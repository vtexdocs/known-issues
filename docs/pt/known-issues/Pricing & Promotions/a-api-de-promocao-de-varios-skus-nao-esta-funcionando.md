---
title: 'A API de promoção de vários SKUs não está funcionando'
slug: a-api-de-promocao-de-varios-skus-nao-esta-funcionando
status: PUBLISHED
createdAt: 2023-01-09T21:17:29.000Z
updatedAt: 2024-10-04T16:47:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: multiple-sku-promotion-api-not-working
locale: pt
kiStatus: No Fix
internalReference: 729990
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Apesar das respostas de sucesso nas APIs e no e-mail, a promoção não foi criada no painel de administração (API de criação) nem atualizada (API de atualização).

Documentação da API:
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/import/calculatorConfiguration
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#put-/api/rnb/pvt/import/calculatorConfiguration/-promotionId-

## Simulação

1. Segui as etapas da documentação mencionada acima para criar/atualizar uma promoção com vários SKUs;
2. Recebi um e-mail de confirmação sobre a promoção criada ou um código de status de sucesso na API, como 202.
3. Verifiquei no painel de administração que a promoção nunca foi criada/atualizada.

## Workaround

Não há solução alternativa.