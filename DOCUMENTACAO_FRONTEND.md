# Documentação do Frontend

Esta documentação explica como o frontend do projeto está organizado, as decisões arquiteturais tomadas e os padrões utilizados.

## Visão Geral

O frontend utiliza **Next.js 15** com **App Router**, **React 18**, **TypeScript** e **Tailwind CSS**. A arquitetura segue os princípios de **Arquitetura Atômica** (Atomic Design) para componentes e **MVVM** (Model-View-ViewModel) para organização de módulos.

## Estrutura de Diretórios

```
src/
├── app/                    # Rotas e páginas (Next.js App Router)
│   ├── (private)/          # Rotas protegidas (requerem autenticação)
│   ├── (public)/           # Rotas públicas
│   │   ├── (auth)/         # Rotas de autenticação
│   │   ├── challenges/     # Páginas de desafios
│   │   └── projects/       # Páginas de projetos
│   ├── api/                # API Routes (backend)
│   ├── providers/          # Providers do React (Context, Query, etc.)
│   └── layout.tsx          # Layout raiz
├── modules/                 # Módulos de funcionalidades
│   ├── Auth/               # Módulo de autenticação
│   ├── Home/               # Módulo da página inicial
│   ├── Challenges/         # Módulo de desafios
│   ├── Projects/           # Módulo de projetos
│   └── Profile/            # Módulo de perfil
└── shared/                 # Recursos compartilhados
    ├── components/         # Componentes reutilizáveis
    │   ├── atoms/          # Componentes atômicos
    │   ├── molecules/      # Componentes moleculares
    │   ├── organisms/      # Componentes organismos
    │   └── templates/      # Templates de página
    ├── libs/               # Bibliotecas (Axios, React Query)
    ├── hooks/              # Hooks compartilhados
    ├── utils/              # Funções utilitárias
    └── styles/             # Estilos globais
```

## Arquitetura Modular (MVVM)

Cada funcionalidade principal da aplicação é isolada em um **módulo** independente. Cada módulo segue o padrão **MVVM**:

### Estrutura de um Módulo

```
modules/
└── Auth/
    ├── api/                # Model: Requisições HTTP
    │   └── getAuthDiscord.ts
    ├── hooks/              # ViewModel: Lógica de apresentação
    │   └── useModel.ts
    ├── components/         # View: Componentes de UI
    │   └── AuthCard.tsx
    └── pages/              # View: Páginas do módulo
        ├── login/
        └── register/
```

### Exemplo: Módulo de Autenticação

**Model (API):** `src/modules/Auth/api/getAuthDiscord.ts`

```1:19:src/modules/Auth/api/getAuthDiscord.ts
"use client"

import { api } from "@/shared/libs/axios"

type GetAuthDiscordProps = {
	code: string
	action: "login" | "register"
	provider: "discord" | "github"
}

export async function getAuthDiscord({ code, action, provider }: GetAuthDiscordProps) {
	const { data } = await api.post(`/api/auth/callback/discord`, {
		code,
		action,
		provider
	})
	return data
}
```

**ViewModel (Hook):** `src/modules/Auth/hooks/useModel.ts`

```8:35:src/modules/Auth/hooks/useModel.ts
export default function useModel() {
	const searchParams = useSearchParams()
	const code = searchParams.get("code")
	const provider = searchParams.get("provider")

	const [isConnectingDiscord, setIsConnectingDiscord] = useState(false)

	const connectDiscord = (action: "login" | "register") => {
		setIsConnectingDiscord(true)
		globalThis.location.href = `/api/auth/discord?action=${action}&provider=discord`
	}

	const { mutate: authDiscord, isPending: isAuthDiscord } = useMutation({
		mutationFn: getAuthDiscord,
		onSuccess: () => {},
		onError: () => {}
	})

	useEffect(() => {
		if (code && provider) {
			authDiscord({ code, action: "login", provider: provider as "discord" | "github" })
		}
	}, [searchParams])

	const loadDiscord = isConnectingDiscord || isAuthDiscord

	return { connectDiscord, loadDiscord }
}
```

**Por que MVVM?**
- **Separação de responsabilidades**: Model (dados), View (UI), ViewModel (lógica)
- **Testabilidade**: Cada camada pode ser testada independentemente
- **Reutilização**: ViewModels podem ser reutilizados em diferentes Views
- **Manutenibilidade**: Mudanças em uma camada não afetam outras
- **Escalabilidade**: Fácil adicionar novos módulos seguindo o mesmo padrão

## Arquitetura Atômica de Componentes

Os componentes compartilhados seguem a **Arquitetura Atômica**, divididos em 4 níveis:

### 1. Átomos (Atoms)

**Localização:** `src/shared/components/atoms/`

Componentes básicos e indivisíveis, como botões, inputs, labels, ícones.

**Exemplos:**
- `button/` - Botões
- `input/` - Campos de entrada
- `label/` - Rótulos
- `icon/` - Ícones
- `badge/` - Badges
- `avatar/` - Avatares

**Características:**
- Componentes pequenos e focados
- Não dependem de outros componentes de UI
- Altamente reutilizáveis
- Props bem definidas

### 2. Moléculas (Molecules)

**Localização:** `src/shared/components/molecules/`

Componentes compostos por átomos, formando estruturas simples e funcionais.

**Exemplos:**
- `inputs/` - Campos de formulário (input + label + hint)
- `select/` - Seletores (select + label)
- `cardInfo/` - Cards de informação
- `ImageUpload/` - Upload de imagens

**Características:**
- Combinam múltiplos átomos
- Têm uma função específica
- Podem ter estado local
- Reutilizáveis em diferentes contextos

### 3. Organismos (Organisms)

**Localização:** `src/shared/components/organisms/`

Componentes complexos que combinam moléculas e átomos, formando partes completas da interface.

**Exemplos:**
- `header/` - Cabeçalho da aplicação
- `Footer.tsx` - Rodapé
- `donation/` - Sistema de doações

**Características:**
- Componentes complexos e completos
- Podem ter múltiplas responsabilidades
- Geralmente específicos para uma seção da aplicação
- Podem gerenciar estado mais complexo

### 4. Templates

**Localização:** `src/shared/components/templates/`

Templates que definem a estrutura geral de uma página.

**Exemplo:**
- `TemplateDefault.tsx` - Template padrão de página

**Características:**
- Definem layout geral
- Combinam organismos
- Estrutura de página completa

**Por que Arquitetura Atômica?**
- **Reutilização**: Componentes pequenos são altamente reutilizáveis
- **Consistência**: Garante consistência visual em toda a aplicação
- **Manutenibilidade**: Fácil localizar e modificar componentes
- **Escalabilidade**: Fácil adicionar novos componentes seguindo a hierarquia
- **Colaboração**: Diferentes desenvolvedores podem trabalhar em diferentes níveis

## Gerenciamento de Estado

### React Query (TanStack Query)

**Localização:** `src/shared/libs/react-query.ts`

O projeto utiliza **React Query** para gerenciar estado de servidor (server state):

- **Cache automático**: Dados são cacheados automaticamente
- **Refetch automático**: Atualização automática de dados
- **Loading states**: Estados de carregamento gerenciados automaticamente
- **Error handling**: Tratamento de erros simplificado

**Exemplo de uso:**

```20:24:src/modules/Auth/hooks/useModel.ts
	const { mutate: authDiscord, isPending: isAuthDiscord } = useMutation({
		mutationFn: getAuthDiscord,
		onSuccess: () => {},
		onError: () => {}
	})
```

**Por que React Query?**
- **Simplifica código**: Menos código boilerplate para gerenciar estado
- **Performance**: Cache inteligente reduz requisições desnecessárias
- **UX**: Estados de loading e error são gerenciados automaticamente
- **Sincronização**: Dados são sincronizados automaticamente entre componentes

### Estado Local (useState)

Para estado de UI simples (como modais abertos/fechados), utiliza-se `useState` do React.

## Comunicação com Backend

### Axios Client

**Localização:** `src/shared/libs/axios.ts`

```1:15:src/shared/libs/axios.ts
"use client"

import axios from "axios"

import { API_URL } from "../env"

export const api = axios.create({
	baseURL: API_URL || "",
	timeout: 30000,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json"
	}
})
```

**Por que Axios?**
- **Interceptors**: Permite adicionar lógica antes/depois de requisições
- **Configuração centralizada**: Base URL e headers configurados uma vez
- **withCredentials**: Envia cookies automaticamente (importante para autenticação)
- **Type-safety**: Pode ser tipado com TypeScript

## Rotas e Navegação

### Next.js App Router

O projeto utiliza o **App Router** do Next.js 15, que oferece:

- **File-based routing**: Rotas baseadas em estrutura de arquivos
- **Layouts**: Layouts compartilhados entre rotas
- **Route Groups**: Agrupamento de rotas com `(private)` e `(public)`
- **Server Components**: Componentes renderizados no servidor por padrão
- **Client Components**: Componentes interativos com `"use client"`

### Estrutura de Rotas

```
app/
├── (private)/          # Rotas protegidas
│   └── profile/        # /profile
├── (public)/           # Rotas públicas
│   ├── (auth)/         # Rotas de autenticação
│   │   ├── login/      # /login
│   │   └── register/   # /register
│   ├── challenges/     # /challenges
│   └── projects/       # /projects
└── page.tsx            # / (página inicial)
```

**Route Groups:**
- `(private)` - Rotas que requerem autenticação
- `(public)` - Rotas públicas
- `(auth)` - Rotas de autenticação (dentro de public)

**Por que desta estrutura?**
- **Organização clara**: Fácil identificar rotas públicas vs privadas
- **Layouts compartilhados**: Cada grupo pode ter seu próprio layout
- **Segurança**: Middleware pode proteger rotas `(private)` facilmente
- **Manutenibilidade**: Estrutura intuitiva e fácil de navegar

## Estilização

### Tailwind CSS

O projeto utiliza **Tailwind CSS** para estilização:

- **Utility-first**: Classes utilitárias para estilização rápida
- **Responsive**: Breakpoints para design responsivo
- **Customização**: Configuração customizada em `tailwind.config.ts`
- **Performance**: Apenas CSS usado é incluído no build

**Exemplo de uso:**

```16:22:src/modules/Home/index.tsx
		<div className="size-full space-y-[100px] pb-11">
			<div className="container relative m-auto mt-20 flex w-full items-center px-4 md:mt-[101px] lg:px-[10px] xl:px-[7.5rem]">
				<div className="m-auto space-y-6 2xl:m-0 2xl:space-y-4">
					<div className="">
						<h3 className="text-wrap text-center text-5xl font-bold leading-normal text-content-primary md:text-5xl lg:text-7xl 2xl:w-[700px] 2xl:text-left 2xl:text-[90px] 2xl:leading-[120px]">
							Let's Grow up together
						</h3>
```

**Por que Tailwind?**
- **Produtividade**: Desenvolvimento mais rápido
- **Consistência**: Design system consistente
- **Performance**: CSS otimizado no build
- **Manutenibilidade**: Estilos colocalizados com componentes

## Componentes UI (Radix UI)

O projeto utiliza **Radix UI** como base para componentes acessíveis:

- **Acessibilidade**: Componentes seguem padrões ARIA
- **Headless**: Apenas lógica, estilização com Tailwind
- **Type-safety**: Totalmente tipado com TypeScript
- **Customizável**: Totalmente customizável com Tailwind

**Componentes utilizados:**
- `@radix-ui/react-dialog` - Modais
- `@radix-ui/react-dropdown-menu` - Menus dropdown
- `@radix-ui/react-select` - Seletores
- `@radix-ui/react-avatar` - Avatares
- E outros...

**Por que Radix UI?**
- **Acessibilidade**: Componentes acessíveis por padrão
- **Flexibilidade**: Headless permite total controle visual
- **Qualidade**: Componentes bem testados e mantidos
- **Type-safety**: Totalmente tipado

## Fluxo de Dados no Frontend

Vamos analisar o fluxo completo usando o exemplo de autenticação:

### 1. Usuário interage com a UI
```tsx
<Button onClick={() => connectDiscord("login")}>
  Conectar com Discord
</Button>
```

### 2. ViewModel (Hook) processa ação
```typescript
const connectDiscord = (action: "login" | "register") => {
  setIsConnectingDiscord(true)
  globalThis.location.href = `/api/auth/discord?action=${action}&provider=discord`
}
```

### 3. Redirecionamento para Discord OAuth
```
GET /api/auth/discord?action=login&provider=discord
→ Redirect para Discord
```

### 4. Callback do Discord
```
GET /login?code=xxx&provider=discord
```

### 5. ViewModel detecta código e chama Model
```typescript
useEffect(() => {
  if (code && provider) {
    authDiscord({ code, action: "login", provider })
  }
}, [searchParams])
```

### 6. Model (API) faz requisição
```typescript
export async function getAuthDiscord({ code, action, provider }) {
  const { data } = await api.post(`/api/auth/callback/discord`, {
    code, action, provider
  })
  return data
}
```

### 7. Backend processa e retorna
```
→ Cookies são definidos
→ Redirecionamento ou atualização de UI
```

## Exemplo Completo: Módulo Home

Vamos analisar o módulo Home como exemplo completo:

**Estrutura:**
```
modules/Home/
├── index.tsx              # View: Componente principal
├── hooks/
│   └── useModel.ts        # ViewModel: Lógica de apresentação
├── components/            # Componentes específicos do módulo
│   ├── ChallengesCard.tsx
│   ├── DiscussionForum/
│   ├── ProjectsCarousel.tsx
│   └── InteractiveGlobe.tsx
└── api/                   # Model: Requisições (se necessário)
```

**View (index.tsx):**

```12:59:src/modules/Home/index.tsx
export default function Home() {
	const {} = useModel()

	return (
		<div className="size-full space-y-[100px] pb-11">
			<div className="container relative m-auto mt-20 flex w-full items-center px-4 md:mt-[101px] lg:px-[10px] xl:px-[7.5rem]">
				<div className="m-auto space-y-6 2xl:m-0 2xl:space-y-4">
					<div className="">
						<h3 className="text-wrap text-center text-5xl font-bold leading-normal text-content-primary md:text-5xl lg:text-7xl 2xl:w-[700px] 2xl:text-left 2xl:text-[90px] 2xl:leading-[120px]">
							Let's Grow up together
						</h3>

						<Button
							variant="secondary"
							className="absolute bottom-[100px] left-[34%] hidden h-[48px] w-[160px] gap-3 rounded-[1.875rem] p-0 text-xl font-bold 2xl:flex [&_svg]:size-[30px]">
							<PiDiscordLogoFill size={42} />
							<p className="text-xl"> Discord</p>
						</Button>
					</div>

					<p className="text-center text-xl font-thin text-content-secondary md:m-auto md:w-[620px] 2xl:m-0 2xl:w-[480px] 2xl:text-start">
						<strong className="text-green-hard">Seja bem-vindo(a)!</strong> Sinta-se à
						vontade para compartilhar suas ideias e opiniões.
					</p>

					<Button
						variant="secondary"
						className="m-auto mt-6 flex h-[36px] w-[160px] gap-3 rounded-[1.875rem] p-0 font-bold 2xl:hidden [&_svg]:size-[20px]">
						<PiDiscordLogoFill size={36} />
						<p className="text-lg"> Discord</p>
					</Button>
				</div>

				<img
					className="absolute right-24 top-16 hidden size-[456px] 2xl:block"
					src="/globe.svg"
					alt="Globe"
				/>
			</div>

			<ChallengesCard />
			<DiscussionForum />
			<ProjectsCarousel />

			<div></div>
		</div>
	)
}
```

**Características:**
- **View pura**: Apenas renderização, lógica no ViewModel
- **Componentes compostos**: Usa componentes do módulo e compartilhados
- **Responsivo**: Classes Tailwind para diferentes breakpoints
- **Acessível**: Semântica HTML apropriada

## Benefícios desta Arquitetura

1. **Modularidade**: Cada funcionalidade é isolada em seu próprio módulo
2. **Reutilização**: Componentes compartilhados podem ser usados em qualquer lugar
3. **Manutenibilidade**: Fácil localizar e modificar código
4. **Escalabilidade**: Fácil adicionar novos módulos e funcionalidades
5. **Testabilidade**: Cada camada pode ser testada independentemente
6. **Colaboração**: Múltiplos desenvolvedores podem trabalhar em módulos diferentes
7. **Consistência**: Arquitetura Atômica garante UI consistente
8. **Type-safety**: TypeScript em toda a aplicação

## Boas Práticas Implementadas

- ✅ **Separação de responsabilidades**: MVVM separa dados, lógica e UI
- ✅ **Componentes reutilizáveis**: Arquitetura Atômica promove reutilização
- ✅ **Type-safety**: TypeScript em toda a aplicação
- ✅ **Acessibilidade**: Radix UI garante componentes acessíveis
- ✅ **Performance**: React Query otimiza requisições
- ✅ **Responsividade**: Tailwind facilita design responsivo
- ✅ **Código limpo**: Componentes pequenos e focados
- ✅ **Documentação**: Código auto-documentado com tipos

## Próximos Passos Sugeridos

- [ ] Adicionar Storybook para documentação de componentes
- [ ] Implementar testes unitários para componentes
- [ ] Adicionar testes de integração para módulos
- [ ] Implementar lazy loading para módulos
- [ ] Adicionar error boundaries
- [ ] Implementar loading states consistentes
- [ ] Adicionar animações com Framer Motion (já instalado)
- [ ] Implementar internacionalização (i18n)

