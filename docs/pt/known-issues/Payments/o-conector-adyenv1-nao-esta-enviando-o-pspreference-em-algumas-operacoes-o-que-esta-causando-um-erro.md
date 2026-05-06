---
title: 'O conector AdyenV1 não está enviando o pspReference em algumas operações, o que está causando um erro'
slug: o-conector-adyenv1-nao-esta-enviando-o-pspreference-em-algumas-operacoes-o-que-esta-causando-um-erro
status: PUBLISHED
createdAt: 2023-02-23T13:51:46.000Z
updatedAt: 2023-05-11T16:44:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv1-connector-is-not-sending-pspreference-on-some-operations-and-thus-causing-error
locale: pt
kiStatus: Backlog
internalReference: 758411
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas operações, o conector nativo AdyenV1 não está enviando o código `pspsReference` para a Adyen. Como esse campo é obrigatório para esta integração, recebemos uma resposta de erro quando ele está ausente.

A razão para a ausência desse campo está sendo investigada.

## Simulação

Faça um pedido com o Conector Adyen e tente cancelá-lo.

## Workaround

N/A.