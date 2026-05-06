---
title: 'O Lean Shipping substitui o método de envio preferido pelo usuário pela opção mais barata em diferentes sessões/navegadores'
slug: o-lean-shipping-substitui-o-metodo-de-envio-preferido-pelo-usuario-pela-opcao-mais-barata-em-diferentes-sessoesnavegadores
status: PUBLISHED
createdAt: 2022-06-29T14:27:09.000Z
updatedAt: 2023-02-01T21:06:08.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-overrides-user-preferred-shipping-method-to-cheapest-option-in-different-sessionsbrowsers
locale: pt
kiStatus: Backlog
internalReference: 607411
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em novas sessões (necessários navegadores diferentes) para o mesmo formulário de pedido, a opção selecionada anteriormente não é levada em consideração, sendo sempre substituída pela opção “mais barata”, o que afeta especialmente os cenários de carrinho compartilhado

## Simulação

- Realize o processo de compra até chegar ao carrinho, faça uma simulação de frete e selecione a opção mais rápida com o valor de frete a ser cobrado
- Gere o link de venda social (carrinho compartilhado) e abra-o em uma nova aba anônima, por exemplo
- Observe que o custo de frete é a opção mais barata, em vez da opção selecionada anteriormente

## Workaround

N/A