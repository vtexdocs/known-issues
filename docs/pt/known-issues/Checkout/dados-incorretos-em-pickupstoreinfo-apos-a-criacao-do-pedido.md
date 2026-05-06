---
title: 'Dados incorretos em pickupStoreInfo após a criação do pedido'
slug: dados-incorretos-em-pickupstoreinfo-apos-a-criacao-do-pedido
status: PUBLISHED
createdAt: 2021-03-22T15:28:14.000Z
updatedAt: 2023-03-31T14:08:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-data-in-pickupstoreinfo-after-order-creation
locale: pt
kiStatus: Fixed
internalReference: 347155
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em algumas ocasiões, quando temos um item com opção de entrega e outro com opção de retirada na loja, os dados de `pickupStoreInfo` são preenchidos incorretamente após a conclusão do pedido.

Lembrando que essa ocorrência é um pouco incomum, já que não temos mais detalhes, registros ou outras ocorrências. Portanto, não é possível chegar a uma conclusão.

## Simulação

Dentro das informações do pedido, as informações da loja de retirada estão incompletas, com dados nulos.

## Workaround

N/A