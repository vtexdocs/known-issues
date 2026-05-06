---
title: 'O campo "referência" está sempre definido como nulo'
slug: o-campo-referencia-esta-sempre-definido-como-nulo
status: PUBLISHED
createdAt: 2023-04-26T22:31:26.000Z
updatedAt: 2023-04-26T22:32:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: field-reference-always-set-as-null
locale: pt
kiStatus: Backlog
internalReference: 797989
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O campo `reference` do endereço do ponto de retirada é sempre definido como nulo, mesmo que esteja registrado na API do ponto de retirada.

## Simulação

- Registre um ponto de retirada via API, incluindo o campo `address.reference`;
- Adicione um item ao carrinho;
- Execute uma consulta Get Order e verifique o campo `pickupPoints.reference`: ele está nulo.

## Workaround

N/A