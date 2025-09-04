---
title: O Campaign Audience não salva as informações do cupom
slug: o-campaign-audience-nao-salva-as-informacoes-do-cupom
status: PUBLISHED
createdAt: 2025-09-04T15:02:58.831Z
updatedAt: 2025-09-04T15:02:58.831Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-doesnt-save-coupon-information
locale: pt
kiStatus: Backlog
internalReference: 521601
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando uma condição de cupom é configurada dentro de um **Campaign Audience**, as informações do cupom não são passadas no campo `matchedParameters` da resposta do RnB. Como resultado, o Checkout e o OrderForm não retêm os dados do cupom, e o OMS não os exibirá em `marketingData`.

## Simulação



1. Crie um público-alvo de campanha usando uma condição de cupom.
2. Associe esse Campaign Audience a uma Campaign Promotion.
3. Conclua uma compra à qual essa promoção se aplica.
4. Verifique o pedido no OMS.
5. Revise o `orderForm` → observe que as informações do cupom estão faltando no campo `marketingData`.



## Workaround


Não há uma solução alternativa nativa. Se possível, configure a condição do cupom **diretamente na Promoção** em vez de usar um Público da Campanha. Isso garante que as informações do cupom sejam retornadas em `matchedParameters` e salvas no pedido.


