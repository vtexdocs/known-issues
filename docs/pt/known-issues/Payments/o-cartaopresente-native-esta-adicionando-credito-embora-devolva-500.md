---
title: 'O cartão-presente Native está adicionando crédito, embora devolva 500'
slug: o-cartaopresente-native-esta-adicionando-credito-embora-devolva-500
status: PUBLISHED
createdAt: 2023-02-27T20:40:23.000Z
updatedAt: 2023-05-11T16:25:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: native-gift-card-is-adding-credit-although-it-returns-500
locale: pt
kiStatus: Backlog
internalReference: 760896
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após realizar alguns testes empíricos, observamos que a rota /transaction na API nativa de cartões-presente, por vezes, retorna um código de erro 500 ao adicionar o crédito solicitado, o que constitui um comportamento inesperado. Além disso, notamos que a solicitação está demorando mais do que o esperado para receber uma resposta, indicando um comportamento de tempo limite. Como resultado, não há nenhum bloqueio eficaz em vigor para garantir que o saldo do cartão não seja creditado nesse cenário.

## Simulação

Comportamento intermitente.

## Workaround

N/A