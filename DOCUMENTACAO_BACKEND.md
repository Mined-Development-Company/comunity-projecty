# Documentação do Backend

Esta documentação explica como o backend do projeto está estruturado, as tecnologias utilizadas e o motivo de cada decisão arquitetural.

## 🛠️ Stack Tecnológica

### O que está sendo usado?

- **Next.js 15** com **App Router** - Framework React com API Routes integradas
- **Prisma** - ORM (Object-Relational Mapping) para gerenciar o banco de dados
- **PostgreSQL** - Banco de dados relacional (pode ser usado com Supabase, Neon, ou qualquer PostgreSQL)
- **Zod** - Biblioteca de validação e tipagem em runtime
- **TypeScript** - Tipagem estática para maior segurança
- **JWT (jsonwebtoken)** - Autenticação via tokens

### Por que essa stack?

- **Next.js**: Permite criar API Routes sem precisar de um servidor separado, tudo em um único projeto
- **Prisma**: Facilita o acesso ao banco com type-safety, migrations automáticas e queries type-safe
- **PostgreSQL**: Banco robusto e escalável, compatível com vários providers (Supabase, Neon, Railway, etc.)
- **Zod**: Validação de dados em runtime + geração automática de tipos TypeScript
- **TypeScript**: Previne erros em tempo de desenvolvimento

## 📁 Estrutura de Diretórios

```
src/
├── app/
│   └── api/                    # 🚪 API Routes (Next.js App Router)
│       ├── auth/               # Rotas de autenticação
│       │   ├── discord/
│       │   │   └── route.ts    # Route Handler (Server)
│       │   └── callback/
│       │       └── discord/
│       │           └── route.ts
│       └── utils/              # Utilitários para rotas
│           ├── handleError.ts
│           └── validateSchema.ts
└── services/                   # 🧠 Lógica de negócios e regras
    ├── controllers/            # Controllers (orquestração)
    │   └── oAuth.ts
    ├── services/               # Services (lógica de negócios)
    │   └── oAuth.ts
    ├── validators/             # Validators (validação de dados)
    │   └── oAuth.ts
    ├── middleware/             # Middleware (interceptadores)
    └── errors/                 # Classes de erro customizadas
        └── HttpError.ts
```

## 🔄 Fluxo de Requisição

```
Cliente (Frontend)
    ↓
Route (Server) - Recebe HTTP request
    ↓
Controller - Extrai dados e formata resposta
    ↓
Service - Executa lógica de negócios
    ↓
Prisma → PostgreSQL - Acessa banco de dados
    ↓
Service - Retorna resultado
    ↓
Controller - Formata resposta HTTP
    ↓
Route - Retorna para o cliente
```

**Interceptadores:**
- **Middleware**: Executa antes do Controller (autenticação, logs, etc.)
- **Validator**: Valida dados antes de entrar no Service

---

## 1️⃣ Route (Server) – "Porta de entrada"

### 📌 O que faz

- Recebe requisições HTTP (GET, POST, PUT, DELETE)
- Chama o Controller apropriado
- Trata erros de forma centralizada
- Configura headers (CORS, cookies, etc.)

### ❌ O que NÃO faz

- Lógica de negócios
- Validação de dados
- Acesso direto ao banco
- Formatação complexa de dados

### 🧠 Pensa assim:

"O Route só recebe e entrega, como um porteiro"

### 🧩 Exemplo Real

```1:14:src/app/api/auth/discord/route.ts
import { NextRequest } from "next/server"

import { connectController } from "@/services/controllers/oAuth"
import { handleError } from "@/app/api/utils/handleError"

export async function GET(req: NextRequest) {
	try {
		return await connectController(req)
	} catch (error) {
		console.log(error)
		return handleError(error)
	}
}
```

**O que acontece:**
1. Recebe a requisição GET do Next.js
2. Chama o `connectController` para processar
3. Se der erro, usa `handleError` para formatar a resposta
4. Retorna a resposta HTTP

### ✅ Características

- ✅ Simples
- ✅ Curto
- ✅ Sem lógica pesada
- ✅ Tratamento de erro centralizado

---

## 2️⃣ Controller – "Porteiro da rota"

### 📌 O que faz

- Recebe o `NextRequest` do Route
- Extrai dados da requisição (body, query params, headers)
- Chama o Service apropriado
- Formata a resposta HTTP (status code, cookies, headers)
- Retorna `NextResponse`

### ❌ O que NÃO faz

- Regra de negócio
- Validação complexa (usa Validator se necessário)
- Acesso direto ao banco
- Lógica de processamento

### 🧠 Pensa assim:

"O controller só conversa com o mundo externo (HTTP) e delega o trabalho pesado para o Service"

### 🧩 Exemplo Real

```6:16:src/services/controllers/oAuth.ts
export async function connectController(req: NextRequest) {
	const action = req.nextUrl.searchParams.get("action") as TRedirectUrlProps["action"]

	if (!action) {
		return NextResponse.json({ error: "Action is required" }, { status: 400 })
	}

	const redirectUrl = await connectService(action)

	return NextResponse.redirect(redirectUrl)
}
```

**O que acontece:**
1. Extrai o parâmetro `action` da query string
2. Valida se existe (validação simples)
3. Chama o `connectService` para obter a URL
4. Retorna uma resposta de redirecionamento

**Outro exemplo mais complexo:**

```18:51:src/services/controllers/oAuth.ts
export async function callbackDiscordController(req: NextRequest) {
	const body = await req.json()

	const { code, action } = body

	if (!code || !action) {
		return NextResponse.json(
			{ error: "Missing required fields: code and action" },
			{ status: 400 }
		)
	}

	const { token, refreshToken } = await callbackDiscordService(code, action)

	const response = NextResponse.json({ message: "conexão bem sucedida" }, { status: 200 })

	response.cookies.set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 15 * 60
	})

	response.cookies.set("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 7 * 24 * 60 * 60
	})

	return response
}
```

**O que acontece:**
1. Extrai `code` e `action` do body
2. Valida se os campos existem
3. Chama o `callbackDiscordService` para processar
4. Configura cookies de autenticação
5. Retorna resposta formatada

### ✅ Características

- ✅ Simples
- ✅ Curto
- ✅ Sem lógica pesada
- ✅ Foca em formatação HTTP

---

## 3️⃣ Service – "Cérebro da aplicação"

### 📌 O que faz

- **Regra de negócio** - Toda a lógica da aplicação
- **Decisões** - If/else, validações de negócio
- **Fluxo da aplicação** - Orquestra múltiplas operações
- **Acesso ao banco** - Via Prisma
- **Chamadas externas** - APIs de terceiros (Discord, etc.)

### ❌ O que NÃO faz

- Ler `req`/`res` diretamente
- Retornar status HTTP
- Saber de framework (Next.js, Express, etc.)
- Formatar cookies ou headers

### 🧠 Pensa assim:

"Se eu trocar Next.js por Express ou Fastify, o Service continua igual"

### 🧩 Exemplo Real

**Service Simples:**

```9:20:src/services/services/oAuth.ts
export async function connectService(action: TRedirectUrlProps["action"]) {
	const params = new URLSearchParams({
		client_id: DISCORD_CLIENT_ID,
		response_type: "code",
		redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`,
		scope: "identify email"
	})

	const redirectUrl = new URL(`https://discord.com/oauth2/authorize?${params.toString()}`)

	return redirectUrl.href
}
```

**O que acontece:**
- Recebe o `action` como parâmetro
- Constrói a URL de autorização do Discord
- Retorna apenas a string da URL (sem HTTP)

**Service Complexo (com Prisma):**

```22:124:src/services/services/oAuth.ts
export async function callbackDiscordService(
	code: string,
	action: TRedirectUrlProps["action"]
) {
	const response = await fetch(`https://discord.com/api/oauth2/token`, {
		method: "POST",
		body: new URLSearchParams({
			client_id: DISCORD_CLIENT_ID,
			client_secret: DISCORD_SECRET,
			grant_type: "authorization_code",
			code: code,
			scope: "identify email",
			redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})

	if (response.status !== 200) {
		const data = await response.json()

		throw new BadRequestError(data.error_description || data.error)
	}

	const data = await response.json()

	const discordUser = await getUserData(data.access_token)

	if (!discordUser) {
		throw new UnauthorizedError("Discord User data not found")
	}

	const user = await prisma.user.findFirst({
		where: {
			email: discordUser.email,
			OR: [
				{
					accounts: {
						some: {
							provider: "DISCORD",
							providerAccountId: discordUser.id
						}
					}
				}
			]
		}
	})

	let token: string | undefined
	let refreshToken: string | undefined

	if (user === null || user === undefined) {
		await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					email: discordUser.email,
					name: discordUser.username,
					avatarUrl: discordUser.avatar
				}
			})

			await tx.account.create({
				data: {
					userId: createdUser.id,
					provider: "DISCORD",
					providerAccountId: discordUser.id
				}
			})

			const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
				createdUser.id,
				createdUser.email
			)

			await tx.session.create({
				data: {
					userId: createdUser.id,
					sessionToken: newToken,
					sessionRefreshToken: newRefreshToken,
					expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
				}
			})

			token = newToken
			refreshToken = newRefreshToken
		})
	} else {
		const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
			user.id,
			user.email
		)

		token = newToken
		refreshToken = newRefreshToken
	}

	if (!token || !refreshToken || token === "" || refreshToken === "") {
		throw new ServerError()
	}

	return { token, refreshToken }
}
```

**O que acontece:**
1. Troca código de autorização por token do Discord (chamada externa)
2. Busca dados do usuário no Discord
3. Verifica se usuário existe no banco (via Prisma)
4. Se não existe: cria usuário, conta e sessão em uma transação
5. Se existe: apenas gera novos tokens
6. Retorna os tokens (sem formatação HTTP)
7. Lança erros customizados em caso de falha

### 🔍 Como o Prisma funciona aqui?

O Prisma é usado no Service para acessar o banco de dados:

```typescript
// Buscar usuário
const user = await prisma.user.findFirst({
  where: { email: "user@example.com" }
})

// Criar usuário
const newUser = await prisma.user.create({
  data: {
    email: "user@example.com",
    name: "João"
  }
})

// Transação (várias operações atômicas)
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: {...} })
  await tx.account.create({ data: {...} })
})
```

**Por que Prisma?**
- ✅ Type-safe: TypeScript conhece os tipos do banco
- ✅ Migrations automáticas: `prisma migrate dev`
- ✅ Queries intuitivas: código limpo e legível
- ✅ Funciona com qualquer PostgreSQL (Supabase, Neon, Railway, etc.)

### ✅ Características

- ✅ Reutilizável (pode ser usado em CLI, jobs, etc.)
- ✅ Testável (sem depender de HTTP)
- ✅ Independente de framework
- ✅ Contém toda a lógica de negócios

---

## 4️⃣ Validator – "Porteiro de dados"

### 📌 O que faz

- Garante que os dados estão corretos
- Valida tipos, campos obrigatórios, formatos
- Gera tipos TypeScript automaticamente
- Previne dados inválidos de entrarem no sistema

### ❌ O que NÃO faz

- Regra de negócio (ex: "usuário já existe?")
- Chamar banco de dados
- Criar ou atualizar dados
- Processar lógica

### 🧠 Pensa assim:

"Dados ruins não entram no sistema"

### 🧩 Exemplo Real (Zod)

```1:10:src/services/validators/oAuth.ts
import { z } from "zod"

const discordParamsSchema = z.object({
	action: z.enum(["login", "register"]),
	code: z.string(),
	provider: z.literal("discord")
})

export type TRedirectUrlProps = z.infer<typeof discordParamsSchema>
```

**O que acontece:**
- Define um schema que valida:
  - `action`: deve ser "login" ou "register"
  - `code`: deve ser uma string
  - `provider`: deve ser exatamente "discord"
- Exporta o tipo TypeScript inferido automaticamente

**Como usar no Controller:**

```typescript
import { discordParamsSchema } from "../validators/oAuth"

// No controller
const body = await req.json()
const validatedData = discordParamsSchema.parse(body) // Lança erro se inválido
// validatedData agora é tipado como TRedirectUrlProps
```

**Exemplo de validação mais complexa:**

```typescript
import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  age: z.number().int().min(18).max(120),
  tags: z.array(z.string()).optional()
})

export type TUserProps = z.infer<typeof userSchema>

// Uso:
const user = userSchema.parse(data) // Valida e retorna tipado
```

### ✅ Características

- ✅ Validação em runtime
- ✅ Type safety automático
- ✅ Mensagens de erro claras
- ✅ Reutilizável

---

## 5️⃣ Middleware – "Filtro antes da rota"

### 📌 O que faz

- **Autenticação** - Verifica se usuário está logado
- **Autorização** - Verifica permissões
- **Logs** - Registra requisições
- **Rate limiting** - Limita requisições por IP
- **Validação** - Validação simples antes do Controller

### ❌ O que NÃO faz

- Regra de negócio
- Criar ou atualizar dados
- Processar lógica complexa

### 🧠 Pensa assim:

"Isso vale para várias rotas? Então é middleware."

### 🧩 Exemplo Prático

**Middleware de Autenticação:**

```typescript
// src/services/middleware/auth.ts
import { NextRequest } from "next/server"
import { UnauthorizedError } from "../errors/HttpError"

export function requireAuth(req: NextRequest) {
	const token = req.cookies.get("token")?.value

	if (!token) {
		throw new UnauthorizedError("Token não fornecido")
	}

	// Validar token JWT aqui
	// ...

	return true
}
```

**Como usar no Route:**

```typescript
// src/app/api/protected/route.ts
import { requireAuth } from "@/services/middleware/auth"
import { handleError } from "@/app/api/utils/handleError"

export async function GET(req: NextRequest) {
	try {
		requireAuth(req) // Middleware executa antes do controller
		// ... resto da lógica
	} catch (error) {
		return handleError(error)
	}
}
```

**Middleware de Logging:**

```typescript
// src/services/middleware/logger.ts
export function logRequest(req: NextRequest) {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
}
```

### ✅ Características

- ✅ Reutilizável em múltiplas rotas
- ✅ Executa antes do Controller
- ✅ Pode bloquear requisições
- ✅ Lógica transversal

---

## 6️⃣ Error Handling – "Tratamento de erros"

### 📌 O que faz

- Centraliza o tratamento de erros
- Formata respostas de erro consistentes
- Mapeia erros para status HTTP corretos

### 🧩 Estrutura de Erros

```1:45:src/services/errors/HttpError.ts
export class HttpError extends Error {
	statusCode: number

	constructor(message: string, statusCode: number) {
		super(message)
		this.statusCode = statusCode
		this.name = "HttpError"
	}
}

export class BadRequestError extends HttpError {
	constructor(message: string) {
		super(message, 400)
		this.name = "BadRequestError"
	}
}

export class NotFoundError extends HttpError {
	constructor(message: string) {
		super(message, 404)
		this.name = "NotFoundError"
	}
}

export class UnauthorizedError extends HttpError {
	constructor(message: string) {
		super(message, 401)
		this.name = "UnauthorizedError"
	}
}

export class ServerError extends HttpError {
	constructor() {
		super("Internal Server Error	", 500)
		this.name = "NotFoundError"
	}
}

export class ForbiddenError extends HttpError {
	constructor(message: string) {
		super(message, 403)
		this.name = "ForbiddenError"
	}
}
```

**Handler de Erros:**

```1:12:src/app/api/utils/handleError.ts
import { NextResponse } from "next/server"

import { HttpError } from "@/services/errors/HttpError"

export function handleError(error: unknown): NextResponse {
	if (error instanceof HttpError) {
		return NextResponse.json({ error: error.message }, { status: error.statusCode })
	}

	return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
}
```

**Como usar:**

```typescript
// No Service
throw new BadRequestError("Dados inválidos")

// No Route
try {
	return await controller(req)
} catch (error) {
	return handleError(error) // Trata automaticamente
}
```

---

## 🔄 Fluxo Completo de Exemplo

Vamos ver um exemplo completo do fluxo de uma requisição:

### 1. Cliente faz requisição

```typescript
// Frontend
fetch("/api/auth/discord?action=login")
```

### 2. Route recebe a requisição

```1:14:src/app/api/auth/discord/route.ts
import { NextRequest } from "next/server"

import { connectController } from "@/services/controllers/oAuth"
import { handleError } from "@/app/api/utils/handleError"

export async function GET(req: NextRequest) {
	try {
		return await connectController(req)
	} catch (error) {
		console.log(error)
		return handleError(error)
	}
}
```

### 3. Controller orquestra

```6:16:src/services/controllers/oAuth.ts
export async function connectController(req: NextRequest) {
	const action = req.nextUrl.searchParams.get("action") as TRedirectUrlProps["action"]

	if (!action) {
		return NextResponse.json({ error: "Action is required" }, { status: 400 })
	}

	const redirectUrl = await connectService(action)

	return NextResponse.redirect(redirectUrl)
}
```

### 4. Service executa lógica de negócios

```9:20:src/services/services/oAuth.ts
export async function connectService(action: TRedirectUrlProps["action"]) {
	const params = new URLSearchParams({
		client_id: DISCORD_CLIENT_ID,
		response_type: "code",
		redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`,
		scope: "identify email"
	})

	const redirectUrl = new URL(`https://discord.com/oauth2/authorize?${params.toString()}`)

	return redirectUrl.href
}
```

### 5. Resposta retorna ao cliente

```typescript
// NextResponse.redirect(redirectUrl) retorna 302 com a URL
```

---

## 🎯 Por que essa estrutura?

### 1. **Separação de Responsabilidades**
Cada camada tem uma função única e bem definida. Isso facilita:
- Encontrar bugs
- Adicionar features
- Testar código
- Manter o projeto

### 2. **Manutenibilidade**
Se você precisar mudar algo:
- Mudou a lógica? → Vai no **Service**
- Mudou a resposta HTTP? → Vai no **Controller**
- Mudou a rota? → Vai no **Route**

### 3. **Testabilidade**
Cada camada pode ser testada isoladamente:
- Service: testa sem HTTP
- Controller: testa com mocks do Service
- Route: testa integração completa

### 4. **Reutilização**
- Service pode ser usado em CLI, jobs, outros endpoints
- Validator pode ser usado em múltiplos lugares
- Middleware pode proteger várias rotas

### 5. **Type Safety**
TypeScript + Zod garantem tipos seguros em toda a aplicação:
- Erros em tempo de desenvolvimento
- Autocomplete no editor
- Refatoração segura

### 6. **Escalabilidade**
Fácil adicionar novas funcionalidades seguindo o mesmo padrão:
- Criar novo Service
- Criar novo Controller
- Criar nova Route
- Reutilizar Validators e Middleware

---

## 📋 Boas Práticas

### ✅ Controllers devem ser finos
Controllers devem apenas orquestrar, não conter lógica de negócios.

```typescript
// ❌ Ruim - Controller com lógica de negócio
export async function createUserController(req) {
  const user = await prisma.user.findFirst({ where: { email: req.body.email } })
  if (user) {
    return NextResponse.json({ error: "Usuário existe" }, { status: 400 })
  }
  // ...
}

// ✅ Bom - Controller delegando para Service
export async function createUserController(req) {
  const user = await createUserService(req.body)
  return NextResponse.json(user, { status: 201 })
}
```

### ✅ Services devem ser puros
Services não devem conhecer detalhes de HTTP.

```typescript
// ❌ Ruim - Service recebendo NextRequest
export async function createUserService(req: NextRequest) {
  // ...
}

// ✅ Bom - Service recebendo dados simples
export async function createUserService(data: { email: string; name: string }) {
  // ...
}
```

### ✅ Validação sempre
Sempre valide dados de entrada usando Validators.

```typescript
// ✅ Bom
const validatedData = userSchema.parse(req.body)
const user = await createUserService(validatedData)
```

### ✅ Erros customizados
Use classes de erro customizadas para respostas consistentes.

```typescript
// ✅ Bom
throw new BadRequestError("Email inválido")
```

### ✅ Tratamento centralizado
Sempre use `handleError` para tratar erros nas Routes.

```typescript
// ✅ Bom
try {
  return await controller(req)
} catch (error) {
  return handleError(error)
}
```

---

## 📂 Estrutura de Nomenclatura

- **Routes**: `app/api/[feature]/route.ts`
- **Controllers**: `services/controllers/[feature].ts`
- **Services**: `services/services/[feature].ts`
- **Validators**: `services/validators/[feature].ts`
- **Middleware**: `services/middleware/[feature].ts`
- **Errors**: `services/errors/[ErrorName].ts`

---

## 🎓 Resumo Visual

```
┌─────────────────────────────────────────┐
│         Cliente (Frontend)              │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Route (Server)                         │
│  • Recebe HTTP                          │
│  • Trata erros                          │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Controller                              │
│  • Extrai dados                         │
│  • Formata resposta                      │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Service                                 │
│  • Lógica de negócios                   │
│  • Acesso ao banco (Prisma)             │
│  • Chamadas externas                    │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Prisma → PostgreSQL                    │
│  • Queries type-safe                    │
│  • Migrations automáticas               │
└─────────────────────────────────────────┘
```

**Interceptadores:**
- **Middleware**: Antes do Controller (auth, logs)
- **Validator**: Antes do Service (validação de dados)

---

## ✅ Conclusão

Esta arquitetura em camadas proporciona:

- ✅ Código organizado e fácil de entender
- ✅ Manutenção simplificada
- ✅ Testes mais fáceis de escrever
- ✅ Escalabilidade para crescer
- ✅ Type safety em toda a aplicação
- ✅ Reutilização de código

Seguindo estes padrões, o código fica mais limpo, mais fácil de manter e mais robusto. 🚀
