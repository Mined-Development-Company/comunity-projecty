# Estrutura do Projeto

Este documento descreve a estrutura do projeto utilizando **Next.js** e como os diretórios e subdiretórios estão organizados para facilitar o desenvolvimento, manutenção e escalabilidade. A estrutura segue os princípios de **Arquitetura Atômica** e **MVVM (Model-View-ViewModel)**.

---

## Estrutura Geral
A base do projeto está organizada dentro do diretório `src`, que contém os seguintes diretórios principais:

- **app**: Contém as configurações e lógica central do aplicativo.
- **modules**: Agrupamento modular das principais funcionalidades da aplicação.
- **shared**: Conjunto de recursos reutilizáveis e compartilhados entre os módulos.
- **stories**: Diretório para histórias e testes de componentes utilizando ferramentas como Storybook.

---

### **Detalhamento dos Diretórios**

#### **1. app**
Este diretório concentra a lógica principal e configurações do Next.js, como:

- Rotas do aplicativo.
- Configurações globais.
- Renderização inicial.

#### **2. modules**
Cada funcionalidade principal da aplicação é isolada dentro de um módulo. Um módulo típico possui a seguinte estrutura:

**Exemplo: `modules/home`**

```
home/
|-- api/        # Requisições e integrações de APIs relacionadas ao módulo.
|-- components/ # Componentes específicos do módulo.
|-- hooks/      # Hooks personalizados do módulo.
|-- pages/      # Páginas específicas do módulo.
```

Essa abordagem modular facilita a separação de responsabilidades e melhora a organização do código. Cada módulo implementa o padrão **MVVM**, organizando as responsabilidades em:

- **Model:** Gerenciamento de dados e lógica de negócios.
- **View:** Componentes e páginas que renderizam a interface do usuário.
- **ViewModel:** Intermediação entre a View e o Model, contendo lógica de apresentação e estado.

#### **3. shared**
Este diretório armazena os recursos reutilizáveis que podem ser compartilhados por diferentes módulos.

**Estrutura:**

```
shared/
|-- components/
|   |-- atoms/      # Componentes básicos e menores, como botões e ícones.
|   |-- molecules/   # Componentes compostos por átomos, como campos de formulários.
|   |-- organisms/   # Componentes complexos que combinam moléculas e átomos, como headers ou cards.
|
|-- styles/       # Estilos globais ou temas CSS.
|-- utils/        # Funções utilitárias e helpers genéricos.
|-- libs/         # Bibliotecas ou integrações externas.
```

Os componentes dentro de `shared/components` seguem o padrão **Arquitetura Atômica**, divididos em:

- **Átomos:** Os menores componentes da interface, como botões, ícones ou inputs.
- **Moléculas:** Conjuntos de átomos que formam estruturas simples, como um campo de busca com botão.
- **Organismos:** Combinações de moléculas e átomos que criam partes completas da interface, como cabeçalhos ou formulários.

#### **4. stories**
Este diretório contém as histórias de componentes utilizadas com Storybook. Ele é organizado de forma paralela aos componentes no diretório `shared`.

---

## Benefícios da Estrutura

1. **Escalabilidade:** A separação clara entre módulos e componentes compartilhados facilita a adição de novas funcionalidades sem impactar outras partes do projeto.
2. **Reutilização:** Os componentes dentro de `shared` promovem a reutilização, reduzindo a duplicação de código.
3. **Manutenibilidade:** A divisão modular ajuda na identificação rápida de arquivos e facilita o debugging.
4. **Colaboração:** A organização clara torna o projeto mais acessível para novos desenvolvedores.
5. **Adesão a padrões:** A implementação de **Arquitetura Atômica** e **MVVM** torna o código mais consistente e aderente a boas práticas.

---

## Como Navegar na Estrutura

- Para encontrar uma página ou lógica específica de um módulo, navegue até `src/modules/<nome-do-modulo>`.
- Para componentes reutilizáveis ou estilos, utilize o diretório `src/shared`.
- Para histórias ou testes de componentes, verifique o diretório `src/stories`.

---

Essa estrutura garante que o projeto seja robusto, organizado e eficiente para o desenvolvimento com Next.js.