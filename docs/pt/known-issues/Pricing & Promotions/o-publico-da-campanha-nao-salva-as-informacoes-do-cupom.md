---
title: 'O "Público da campanha" não salva as informações do cupom'
slug: o-publico-da-campanha-nao-salva-as-informacoes-do-cupom
status: PUBLISHED
createdAt: 2022-02-10T16:21:28.000Z
updatedAt: 2025-09-04T18:02:18.000Z
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

Quando uma condição de cupom é configurada dentro de um **Público da Campanha**, as informações do cupom não são transmitidas no campo `matchedParameters` da resposta RnB. Consequentemente, o Checkout e o Formulário de Pedido não retêm os dados do cupom, e o OMS não os exibirá em `marketingData`.

## Simulação

1. Crie um Público-alvo da Campanha usando uma condição de cupom.
2. Associe esse Público-alvo da Campanha a uma Promoção da Campanha.
3. Conclua uma compra na qual essa promoção se aplique.
4. Verifique o Pedido no OMS.
5. Analise o `orderForm` → observe que as informações do cupom estão ausentes no campo `marketingData`.

## Workaround

Não há solução alternativa nativa. Se possível, configure a condição de cupom **diretamente na Promoção** em vez de usar um Público-alvo da Campanha. Isso garante que as informações do cupom sejam retornadas em `matchedParameters` e salvas no pedido.