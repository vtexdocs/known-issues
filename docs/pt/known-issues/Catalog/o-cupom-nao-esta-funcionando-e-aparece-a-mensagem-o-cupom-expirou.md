---
title: 'O cupom não está funcionando e aparece a mensagem "o cupom expirou"'
slug: o-cupom-nao-esta-funcionando-e-aparece-a-mensagem-o-cupom-expirou
status: PUBLISHED
createdAt: 2026-03-17T17:39:16.416Z
updatedAt: 2026-03-17T17:39:16.416Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: coupon-not-working-with-message-coupon-has-expired
locale: pt
kiStatus: Backlog
internalReference: 1379679
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o módulo de promoções permite que um usuário copie o conteúdo de uma promoção para outra e a defina como ativa. No entanto, se a promoção já tiver ultrapassado sua data de validade inicial, ela pode estar definida como "isArchived" = true e, por estar ativa, continuará aparecendo no painel de administração como uma promoção normal e ativa.

## Simulação

1 - Crie uma promoção e arquive-a ou deixe-a passar da data de validade.  https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-

2 - Altere sua propriedade "isActive" e associe-a a um cupom

3 - Tente usar o cupom no checkout para aplicar a promoção: será exibida uma mensagem informando "cupom expirado".

## Workaround

**Crie uma nova promoção e um novo cupom do zero, que, por padrão, terão "isArchived" = false. **

**Não tente alterar a propriedade de arquivamento na promoção antiga. **