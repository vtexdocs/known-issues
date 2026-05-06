---
title: 'Cartão-presente - Não retorna os campos "caption" e "relationName" quando fazemos uma solicitação GET.'
slug: cartaopresente-nao-retorna-os-campos-caption-e-relationname-quando-fazemos-uma-solicitacao-get
status: PUBLISHED
createdAt: 2021-09-10T18:55:39.000Z
updatedAt: 2023-06-23T19:33:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-it-does-not-return-fields-caption-and-relationname-when-we-make-a-get-request
locale: pt
kiStatus: Backlog
internalReference: 428725
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o método GET é executado para um cartão-presente existente, ele não retorna os campos "caption" nem "relationName", mesmo que esses parâmetros tenham valor.

## Simulação

Faça uma solicitação GET na API:  https://developers.vtex.com/vtex-rest-api/reference/gift-card#getgiftcardbyid

## Workaround

N/A