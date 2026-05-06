---
title: 'A importação de especificações de produto com o tipo "texto" não aciona a indexação do produto'
slug: a-importacao-de-especificacoes-de-produto-com-o-tipo-texto-nao-aciona-a-indexacao-do-produto
status: PUBLISHED
createdAt: 2024-03-12T19:36:44.000Z
updatedAt: 2024-03-12T19:36:44.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-specification-import-with-type-text-does-not-trigger-the-products-indexation
locale: pt
kiStatus: Backlog
internalReference: 998658
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao importar especificações de produtos, os tipos com valores pré-registrados (como Checkbox ou Radio) acionam a indexação do produto, mas quando o tipo é "Texto", isso não ocorre.

## Simulação

- Registre um campo do tipo texto dentro da categoria
- Importe um arquivo preenchido com um novo valor
- Observe que o valor será atualizado no Admin, mas o produto não será reindexado

## Workaround

Configure esse tipo de campo através do Admin ou da API