---
title: 'O desconto nominal não está sendo aplicado a todos os itens do carrinho'
slug: o-desconto-nominal-nao-esta-sendo-aplicado-a-todos-os-itens-do-carrinho
status: PUBLISHED
createdAt: 2021-02-11T20:46:12.000Z
updatedAt: 2024-07-20T02:21:57.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-is-not-being-distributed-among-all-items-in-the-cart
locale: pt
kiStatus: Backlog
internalReference: 334130
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O desconto nominal das promoções não está sendo distribuído entre todos os itens do carrinho.

Essa situação está ocorrendo apenas em algumas contas.

A loja possui uma promoção nominal e o desconto está sendo aplicado apenas a um item do carrinho, não distribuindo-se proporcionalmente a todos os itens como deveria.

## Simulação

1. Crie uma promoção regular com um desconto nominal;
2. Crie um link de carrinho onde a promoção seja aplicável;
3. Verifique se o desconto está sendo aplicado integralmente a apenas um item, em vez de ser distribuído entre todos os itens.

PS: Isso não acontece sempre e com todas as contas.

## Workaround

Para mitigar esse problema, você pode usar a API Create ou Update Coupon para aumentar o campo `maxItemsPerClient`. Isso permite que o cupom seja aplicado a tantos SKUs quanto permitido nesse campo.