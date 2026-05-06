---
title: 'O ponto de retirada não pode ser selecionado em marketplaces com vendedores de vários níveis'
slug: o-ponto-de-retirada-nao-pode-ser-selecionado-em-marketplaces-com-vendedores-de-varios-niveis
status: PUBLISHED
createdAt: 2022-02-14T17:07:02.000Z
updatedAt: 2023-01-11T19:57:39.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-cant-be-selected-in-marketplaces-with-multilevel-sellers
locale: pt
kiStatus: Backlog
internalReference: 524073
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um marketplace com uma relação multinível (MOI), quando um ponto de retirada é selecionado, o marketplace retorna um erro de comunicação com o vendedor, impedindo o uso de pontos de retirada no marketplace junto com esses vendedores.

No 2º nível (Vendedor Direto), o erro interno é “O endereço não pode ser usado para o canal de entrega especificado (código de status: 400)”.

Esse comportamento ocorre porque a interface do usuário envia a solicitação com uma combinação de `"selectedDeliveryChannel": null` e `"addressType": "search"`.

## Simulação

- Acesse uma conta de marketplace que tenha vendedores regulares usando a relação multinível (MOI)
- Procure um endereço que tenha pontos de retirada que cubram a localização
- Uma mensagem de erro de comunicação do vendedor será exibida

## Workaround

N/A