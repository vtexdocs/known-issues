---
title: 'As mensagens de erro de cupom do Minicart só aparecem após uma segunda tentativa'
slug: as-mensagens-de-erro-de-cupom-do-minicart-so-aparecem-apos-uma-segunda-tentativa
status: PUBLISHED
createdAt: 2023-11-17T17:42:42.000Z
updatedAt: 2023-12-18T16:21:49.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: minicart-coupon-error-messages-only-appear-after-a-second-try
locale: pt
kiStatus: No Fix
internalReference: 938379
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As mensagens de erro de cupom no Minicart não aparecem na primeira vez que você tenta usar um cupom, mesmo que ele não exista.

## Simulação

1. Adicione o produto ao carrinho.
2. Abra o minicart.
3. Insira um cupom aleatório no minicart.
4. A mensagem de erro não aparecerá.
5. Insira outro cupom falso.
6. O erro aparecerá.

## Workaround

Não há solução alternativa disponível. No entanto, inserir o código a qualquer momento após a primeira tentativa exibirá a mensagem de erro corretamente.