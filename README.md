# FinControl — Tela de Gastos (HTML, CSS e Tailwind CSS)

Atividade da FIAP (1TDS): recriação, com **HTML**, **CSS** e **Tailwind CSS**, de uma das telas do projeto Fintech desenhadas no Figma na Fase 2.

**Aluno:** Will Pereira — RM576183

## Sobre a tela

O **FinControl** é uma fintech de organização financeira pessoal. A tela escolhida é **Gastos (listar e filtrar)**, a tela "03 · Listar e Filtrar" do protótipo da Fase 2. Ela atende às user stories:

- **US05:** filtrar gastos por período, categoria e valor.
- **US04:** editar ou excluir um gasto (ações de cada linha).
- **US01:** registrar um gasto (botão "Novo gasto").

A tela contém:

- menu lateral no desktop e menu em abas no celular;
- indicadores do período (total, quantidade de lançamentos e saldo do orçamento);
- formulário de filtros;
- lista de gastos com selo de categoria e paginação.

## Como abrir

Abra o arquivo **`index.html`** no navegador (duplo clique). Não precisa instalar nada nem ter internet: o CSS do Tailwind já está compilado em `css/style.css`, e o projeto não usa JavaScript.

## Responsividade

| Largura | Layout |
|---|---|
| Celular (até 767px) | Menu em abas, indicadores e filtros em uma coluna e gastos em cartões |
| Tablet (768px a 1023px) | Menu em abas, indicadores em 3 colunas, filtros em 2 colunas e gastos em tabela |
| Desktop (1024px ou mais) | Menu lateral fixo com orçamento do mês e filtros em 5 colunas (a partir de 1280px) |

## Identidade visual

| Elemento | Padrão |
|---|---|
| Cor principal | Azul FinControl `#1F4E79` (marca, botões, links e item ativo) |
| Fundo | `#F5F7FA`, com cartões brancos de borda `#E0E4EA` e cantos de 12px |
| Textos | `#1A1A1A` (principal) e `#6B7280` (rótulos e textos secundários) |
| Estados | Verde `#2E7D32` (saldo positivo) e vermelho `#C62828` (excluir) |
| Fonte | Inter (com fontes do sistema como alternativa) |
| Componentes | `.cartao`, `.campo`, `.rotulo`, `.botao-primario`, `.botao-secundario`, `.selo`, `.tabela-titulo`, `.tabela-celula` |

As cores e os componentes estão definidos em `tailwind.config.js` e `src/entrada.css`.

## Estrutura

```
FIAP_Fintech/
├── index.html          # Tela (somente HTML, sem CSS embutido)
├── css/
│   └── style.css       # CSS final gerado pelo Tailwind (usado pelo HTML)
├── src/
│   └── entrada.css     # Arquivo-fonte do Tailwind (@tailwind e componentes com @apply)
├── img/
│   ├── logo.svg        # Logotipo do FinControl
│   └── carteira.svg    # Ilustração do cartão de orçamento
├── tailwind.config.js  # Cores, fonte e onde o Tailwind procura as classes
└── package.json        # Scripts para compilar o Tailwind
```

## Como recompilar o CSS (opcional)

Só é preciso recompilar se o HTML ou o `src/entrada.css` forem alterados. Requer o Node.js instalado.

```bash
npm install
npm run build    # gera css/style.css
npm run watch    # recompila sozinho enquanto você edita
```

## Comandos Git usados para publicar

```bash
git init
git add .
git commit -m "Cria a tela de gastos do FinControl com HTML, CSS e Tailwind CSS"
git branch -M main
git remote add origin https://github.com/WillRodriguesPereiraQA/FIAP_Fintech.git
git push -u origin main
```
