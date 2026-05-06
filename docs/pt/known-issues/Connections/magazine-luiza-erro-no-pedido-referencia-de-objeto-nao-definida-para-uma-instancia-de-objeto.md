---
title: 'Magazine Luiza Erro no pedido: "Referência de objeto não definida para uma instância de objeto"'
slug: magazine-luiza-erro-no-pedido-referencia-de-objeto-nao-definida-para-uma-instancia-de-objeto
status: PUBLISHED
createdAt: 2023-03-23T20:11:42.000Z
updatedAt: 2023-03-23T20:11:42.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magazine-luiza-order-with-error-object-reference-not-set-to-an-instance-of-an-object
locale: pt
kiStatus: Backlog
internalReference: 777298
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas encomendas não foram criadas no OMS+Bridge e o log exibe o erro: `"Referência de objeto não definida para uma instância de objeto"`

Marketplace: Magazine Luiza
Causa raiz do produto: Pedidos
Impacto:  ocorre com poucas solicitações/exceções

## Simulação

Pode até ser um erro na solicitação do cliente, em que algum campo obrigatório estava faltando e, aparentemente, o fluxo não previu que algum campo ficaria “nulo”.

 ![](https://vtexhelp.zendesk.com/attachments/token/eAXF9lNpZblveDVQvGYdP8TXE/?name=image.png)

## Workaround

prossiga com o pedido direto no Marketplace