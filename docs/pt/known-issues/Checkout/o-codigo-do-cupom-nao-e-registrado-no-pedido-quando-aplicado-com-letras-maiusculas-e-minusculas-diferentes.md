---
title: 'O código do cupom não é registrado no pedido quando aplicado com letras maiúsculas e minúsculas diferentes.'
slug: o-codigo-do-cupom-nao-e-registrado-no-pedido-quando-aplicado-com-letras-maiusculas-e-minusculas-diferentes
status: PUBLISHED
createdAt: 2026-08-31T23:21:24.000Z
updatedAt: 2026-08-31T23:21:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: coupon-code-is-not-recorded-in-the-order-when-applied-with-different-letter-case
locale: pt
kiStatus: Backlog
internalReference: 1454466
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente aplica um cupom usando letras maiúsculas e minúsculas diferentes das registradas em Tarifas e Benefícios (por exemplo, digitando `Frete1` para um cupom registrado como `frete1`), a promoção é aplicada corretamente e o desconto é concedido, mas o código do cupom não é registrado no pedido.

O total do pedido, o desconto e os dados em `ratesAndBenefitsData` permanecem corretos — apenas o registro de marketing é afetado.

## Simulação

1. No painel de administração, crie um cupom com um código em minúsculas (por exemplo, `frete1`) e vincule-o a uma promoção ativa.

2. Crie um carrinho e adicione um item elegível para essa promoção.

3. Aplique o cupom usando letras maiúsculas e minúsculas diferentes das registradas.
4. Confirme na resposta do formulário de pedido que a promoção foi aplicada.

5. Finalize o pedido.

6. Recupere os detalhes do pedido usando a API Get order e verifique o campo `marketingData`. O código do cupom não estará lá.

O cupom será uma string vazia quando o carrinho não tiver dados UTM, e o próprio `marketingData` será `null` quando o carrinho tiver algum campo UTM preenchido.

## Workaround

Normalize o código do cupom para minúsculas na loja virtual ou no aplicativo antes de enviá-lo para o Checkout.