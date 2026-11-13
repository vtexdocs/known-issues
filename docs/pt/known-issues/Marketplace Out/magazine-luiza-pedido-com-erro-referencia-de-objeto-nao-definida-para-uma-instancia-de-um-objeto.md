---
title: 'Magazine Luiza Pedido com erro "Referência de objeto não definida para uma instância de um objeto"'
slug: magazine-luiza-pedido-com-erro-referencia-de-objeto-nao-definida-para-uma-instancia-de-um-objeto
status: PUBLISHED
createdAt: 2023-03-23T23:11:42.000Z
updatedAt: 2026-11-13T17:35:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-order-with-error-object-reference-not-set-to-an-instance-of-an-object
locale: pt
kiStatus: Fixed
internalReference: 777298
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns pedidos não foram criados no OMS+Bridge e o log mostra o erro: "Referência de objeto não definida para uma instância de um objeto"

Marketplace: Magazine Luiza
Causa raiz do produto: Pedidos
Impacto: ocorre com poucas solicitações/exceções

## Simulação

Pode ser até mesmo um erro na solicitação do cliente, onde algum campo obrigatório estava faltando e aparentemente o fluxo não previu que algum campo seria "nulo".

![](https://vtexhelp.zendesk.com/attachments/token/eAXF9lNpZblveDVQvGYdP8TXE/?name=image.png)

## Workaround

Prossiga com o pedido diretamente no Marketplace