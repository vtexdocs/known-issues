---
title: 'A interface do checkout exibe o frete grátis quando o usuário altera as opções de entrega'
slug: a-interface-do-checkout-exibe-o-frete-gratis-quando-o-usuario-altera-as-opcoes-de-entrega
status: PUBLISHED
createdAt: 2023-09-11T14:07:03.000Z
updatedAt: 2023-10-02T19:34:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-shows-free-shipping-when-the-user-switches-the-delivery-options
locale: pt
kiStatus: Backlog
internalReference: 897109
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface do checkout exibe frete grátis quando o usuário altera a forma de entrega de “envio normal” para “entrega agendada”. O problema ocorre apenas na caixa de entrega e quando a conta tem o recurso LeanShipping configurado. Embora a interface mostre frete grátis, os valores totais da compra são exibidos e cobrados corretamente.

## Simulação

1. Acesse a página de checkout comprando um item aleatório
2. Na seção de frete, selecione “entrega agendada” e, em seguida, selecione “envio normal” novamente; o preço com frete grátis aparecerá na seção de entrega

## Workaround

Não há solução alternativa.