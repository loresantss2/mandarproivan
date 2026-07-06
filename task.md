# task.md

# Especificação do Projeto — Site de Compra e Venda de Vacas

## Objetivo

Desenvolver um pequeno e-commerce moderno, responsivo e intuitivo para comercialização de vacas, permitindo que o usuário visualize os animais disponíveis, realize buscas, utilize filtros e simule uma compra através de um carrinho totalmente funcional.

---

# Regras Obrigatórias

## Estrutura do Projeto

O projeto deve conter **apenas três arquivos**:

* `index.html`
* `style.css`
* `script.js`

Não utilizar:

* Frameworks
* Bibliotecas externas
* Node.js
* Bootstrap
* React
* Vue
* Angular
* jQuery
* Qualquer dependência externa

O projeto deve utilizar exclusivamente:

* HTML5
* CSS3
* JavaScript puro (Vanilla JS)

---

# Layout

Criar um visual moderno utilizando:

* Tons de verde
* Branco
* Marrom
* Cartões com sombras suaves
* Bordas arredondadas
* Espaçamentos agradáveis
* Hover em botões
* Hover nos cards
* Transições suaves
* Interface limpa
* Boa legibilidade

---

# Estrutura HTML

Utilizar HTML semântico.

A estrutura deverá conter obrigatoriamente:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

---

# Cabeçalho

O header deve possuir:

* Logo (emoji 🐄 ou similar)
* Nome da fazenda
* Menu de navegação

Itens do menu:

* Início
* Catálogo
* Carrinho
* Contato

---

# Banner Principal

Criar uma seção de destaque contendo:

* Imagem ilustrativa de fazenda ou vacas
* Título chamativo
* Pequena descrição
* Botão:

```
Comprar Agora
```

O botão deve rolar suavemente até o catálogo.

---

# Catálogo

Criar diversos cards de vacas.

Cada card deve conter:

* Foto
* Nome
* Raça
* Idade
* Peso
* Produção de leite (quando aplicável)
* Preço
* Botão:

```
Adicionar ao Carrinho
```

---

# Dados das Vacas

Os dados deverão ser armazenados em um array dentro do arquivo `script.js`.

Cada objeto deverá possuir propriedades como:

```javascript
id
nome
raca
idade
peso
leite
preco
imagem
```

Os cards deverão ser gerados dinamicamente através do JavaScript.

Não escrever os cards manualmente no HTML.

---

# Busca

Adicionar um campo de pesquisa.

A pesquisa deve localizar vacas por:

* Nome
* Raça

A filtragem deve ocorrer em tempo real.

---

# Filtros

Adicionar filtros para:

## Raça

Exemplos:

* Todas
* Holandesa
* Jersey
* Nelore
* Gir
* Angus

---

## Faixa de preço

Exemplos:

* Até R$ 5.000
* R$ 5.000–10.000
* Acima de R$ 10.000

---

## Produção de leite

Exemplos:

* Todas
* Até 20 L/dia
* 20–40 L/dia
* Acima de 40 L/dia

Todos os filtros devem funcionar simultaneamente.

---

# Carrinho

Implementar um sistema completo de carrinho.

Deve permitir:

* Adicionar vacas
* Remover vacas
* Alterar quantidade
* Incrementar quantidade
* Decrementar quantidade
* Limpar carrinho

Calcular automaticamente:

* Subtotal
* Quantidade total de itens
* Valor total

Quando vazio, exibir:

```
Seu carrinho está vazio 🛒
```

---

# Contador do Carrinho

O ícone do carrinho deverá possuir um contador indicando a quantidade de itens adicionados.

O contador deve atualizar automaticamente.

---

# Animações

Adicionar animações suaves para:

* Hover dos cards
* Hover dos botões
* Adicionar item ao carrinho
* Atualização do carrinho
* Entrada dos cards

Utilizar apenas CSS.

---

# Rodapé

O footer deve conter:

* Nome da fazenda
* Endereço
* Telefone
* E-mail
* Redes sociais utilizando emojis

Exemplo:

📍 Endereço

📞 Telefone

📧 Email

📷 Instagram

👍 Facebook

---

# Responsividade

O site deve funcionar corretamente em:

* Desktop
* Notebook
* Tablet
* Smartphone

Utilizar apenas:

* Flexbox
* CSS Grid

Criar media queries para diferentes tamanhos de tela.

---

# Organização do CSS

Organizar o arquivo `style.css` por seções comentadas:

```css
/* =========================
   Reset
========================= */

/* =========================
   Variáveis
========================= */

/* =========================
   Header
========================= */

/* =========================
   Banner
========================= */

/* =========================
   Busca
========================= */

/* =========================
   Filtros
========================= */

/* =========================
   Cards
========================= */

/* =========================
   Carrinho
========================= */

/* =========================
   Botões
========================= */

/* =========================
   Footer
========================= */

/* =========================
   Responsividade
========================= */
```

---

# Organização do JavaScript

Todo o comportamento deve estar em `script.js`.

O código deve conter funções separadas para:

* Renderizar catálogo
* Criar cards
* Adicionar ao carrinho
* Remover do carrinho
* Atualizar quantidade
* Atualizar contador
* Atualizar subtotal
* Atualizar total
* Pesquisar
* Filtrar
* Limpar carrinho

Sempre atualizar a interface automaticamente após qualquer alteração.

---

# Qualidade do Código

O código deverá ser:

* Limpo
* Bem organizado
* Bem comentado
* Modular
* Fácil manutenção
* Fácil leitura

Evitar duplicação de código.

Utilizar nomes de variáveis descritivos.

---

# Extras

Adicionar também:

* Emojis para ícones
* Botão "Limpar Carrinho"
* Contador de itens
* Mensagem de carrinho vazio
* Efeito hover em todos os botões
* Sombra suave nos cards
* Bordas arredondadas
* Transições suaves
* Rolagem suave entre seções
* Geração dinâmica de todo o catálogo via JavaScript

---

# Resultado Esperado

Ao finalizar o projeto, o resultado deve ser um pequeno e-commerce totalmente funcional para compra e venda de vacas utilizando exclusivamente:

* HTML5
* CSS3
* JavaScript puro

Sem qualquer biblioteca ou framework externo.

O sistema deverá oferecer uma boa experiência de navegação, possuir layout moderno, ser totalmente responsivo e apresentar um código organizado, comentado e de fácil manutenção.
