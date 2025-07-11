---
title: A mutação ValidateCart retorna 500 quando as personalizações afetam a disponibilidade do produto
slug: a-mutacao-validatecart-retorna-500-quando-as-personalizacoes-afetam-a-disponibilidade-do-produto
status: PUBLISHED
createdAt: 2025-07-11T14:18:41.432Z
updatedAt: 2025-07-11T14:18:41.432Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: validatecart-mutation-returning-500-when-customizations-affects-the-availability-of-the-product
locale: pt
kiStatus: Backlog
internalReference: 1258650
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um produto não está disponível, nosso comportamento padrão é retornar o último carrinho válido e os erros no `cart.messages`. No entanto, quando o cliente personaliza o contexto e a regionalização da loja, o produto no carrinho pode ser associado a um vendedor diferente e ficar indisponível em um contexto diferente. Esse comportamento pode levar a um erro 500 na mutação validateCart, tornando o carrinho indisponível para ações do cliente, como excluir o produto do carrinho.
## Simulação


Não é um contexto fácil de simular; pode envolver personalização no lado da loja.
Mas um exemplo seria mudar de um ponto de coleta em que o produto estava disponível para um em que ele não está mais.


## Workaround


Como solução alternativa, a equipe desenvolveu um sinalizador de recurso para alterar o comportamento do carrinho, permitindo produtos indisponíveis.
https://github.com/vtex/faststore/pull/2938



