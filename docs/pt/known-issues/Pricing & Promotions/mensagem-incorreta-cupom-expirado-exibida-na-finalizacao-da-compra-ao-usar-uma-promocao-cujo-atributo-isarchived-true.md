---
title: 'Mensagem incorreta "cupom expirado" exibida na finalização da compra ao usar uma promoção cujo atributo "isArchived" = true'
slug: mensagem-incorreta-cupom-expirado-exibida-na-finalizacao-da-compra-ao-usar-uma-promocao-cujo-atributo-isarchived-true
status: PUBLISHED
createdAt: 2026-04-27T20:33:07.071Z
updatedAt: 2026-04-27T20:33:07.071Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-coupon-expired-messaged-displayed-in-the-checkout-when-using-a-promotion-that-isarchived-true
locale: pt
kiStatus: Backlog
internalReference: 1375848
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o módulo de promoções permite que os usuários copiem o conteúdo de uma promoção para outra e a definam como ativa. No entanto, se a promoção original tiver expirado, ela pode ter `"isArchived" = true`, e essa informação também será transferida para a promoção copiada.
Nesse cenário, mesmo que a promoção seja definida como ativa, ela ainda pode ser marcada internamente como arquivada, enquanto aparece no painel de administração como uma promoção ativa normal, o que pode ser enganoso.
Esse comportamento pode levar a inconsistências ao validar a disponibilidade da promoção no checkout, especialmente ao usar cupons para acionar a promoção.

## Simulação

1. Crie uma promoção e arquive-a ou deixe-a passar da data de validade: https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-
2. Atualize sua propriedade `"isActive"` para `true` e associe-a a um cupom.
3. Tente usar o cupom no checkout: uma mensagem de **"cupom expirado"** será exibida.

## Workaround

Crie uma nova promoção e um novo cupom do zero. Por padrão, eles terão `"isArchived" = false`. Não tente reutilizar ou modificar a promoção arquivada.