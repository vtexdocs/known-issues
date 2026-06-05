---
title: 'NPS - não aceitamos respostas com mais de 65.536 caracteres'
slug: nps-nao-aceitamos-respostas-com-mais-de-65536-caracteres
status: PUBLISHED
createdAt: 2020-12-17T18:32:42.000Z
updatedAt: 2026-06-05T21:08:36.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: nps-we-arent-accepting-response-with-more-than-65536-characters
locale: pt
kiStatus: No Fix
internalReference: 317389
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao utilizar o conector **NPS**, as transações que contêm um **grande número de itens de pedido** podem falhar durante a etapa de liquidação automática. O conector NPS retorna uma resposta que excede o **limite de 65.536 caracteres** aceito pelo VTEX Gateway, fazendo com que a liquidação falhe com o seguinte erro:

> `Erro desconhecido na liquidação automática — A cota máxima de tamanho de mensagem para mensagens recebidas (65.536) foi excedida. Para aumentar a cota, use a propriedade MaxReceivedMessageSize no elemento de ligação apropriado.`

A transação fica travada e não pode ser liquidada automaticamente.

## Simulação

O problema pode ser desencadeado ao fazer um pedido com **mais de aproximadamente 223 itens** usando o conector NPS. A resposta retornada pelo NPS reflete a lista completa de itens do pedido e, quando essa lista é grande o suficiente para exceder 65.536 caracteres, o Gateway rejeita a mensagem.

## Workaround

Não há solução alternativa disponível.