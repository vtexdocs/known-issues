---
title: 'O público-alvo da campanha não salva informações de cupons.'
slug: o-publicoalvo-da-campanha-nao-salva-informacoes-de-cupons
status: PUBLISHED
createdAt: 2022-02-10T16:21:28.000Z
updatedAt: 2026-09-23T15:23:07.000Z
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

Quando uma condição de cupom é configurada dentro de um **Público-alvo da Campanha**, as informações do cupom não são passadas no campo `matchedParameters` da resposta RnB. Como resultado, o Checkout e o OrderForm não retêm os dados do cupom e o OMS não os exibirá em `marketingData`.

## Simulação

1. Crie um Público-alvo da Campanha usando uma condição de cupom.

2. Associe este Público-alvo da Campanha a uma Promoção da Campanha.

3. Conclua uma compra onde esta promoção se aplica.

4. Verifique o Pedido no OMS.

5. Revise o `orderForm` → observe que as informações do cupom estão ausentes no campo `marketingData`.

## Workaround

Não há solução alternativa nativa. Se possível, configure a condição do cupom **diretamente na Promoção** em vez de usar um Público-alvo da Campanha. Isso garante que as informações do cupom sejam retornadas em `matchedParameters` e salvas no pedido.