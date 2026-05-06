---
title: 'O checkout não consegue remover o item de presente quando este não está disponível após a seleção do ponto de retirada'
slug: o-checkout-nao-consegue-remover-o-item-de-presente-quando-este-nao-esta-disponivel-apos-a-selecao-do-ponto-de-retirada
status: PUBLISHED
createdAt: 2021-05-04T13:58:58.000Z
updatedAt: 2023-01-30T16:37:08.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-cant-remove-gift-item-when-unavailable-after-pickuppoint-selected
locale: pt
kiStatus: Backlog
internalReference: 363885
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar um item em um carrinho com um benefício de promoção de brinde, esse item não pode ser removido se estiver indisponível após a seleção do ponto de retirada.

## Simulação

- crie um carrinho com um item normal e um brinde (a ser oferecido por meio de uma promoção)
- escolha a retirada no ponto, mas por meio de uma opção que não tenha o item de brinde disponível
- será exibida uma mensagem para escolher uma opção de retirada diferente ou remover o item do carrinho, que é um botão/link como chamada à ação
- clicar na opção para remover o item não funcionará devido ao problema quando o item é um brinde

## Workaround

N/A