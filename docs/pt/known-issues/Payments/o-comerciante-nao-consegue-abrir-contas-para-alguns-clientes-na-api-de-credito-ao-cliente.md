---
title: 'O comerciante não consegue abrir contas para alguns clientes na API de Crédito ao Cliente'
slug: o-comerciante-nao-consegue-abrir-contas-para-alguns-clientes-na-api-de-credito-ao-cliente
status: PUBLISHED
createdAt: 2023-09-25T13:22:39.000Z
updatedAt: 2023-09-25T13:22:39.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: merchant-not-being-able-to-open-account-for-some-clients-in-customer-credit-api
locale: pt
kiStatus: Backlog
internalReference: 906509
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Por algum motivo, ao tentar abrir uma nova conta para clientes específicos por meio da API, é retornado o seguinte erro:

{
"code": 1099,
"message": "A conta de crédito já está aberta."
}


Nesse cenário, os dados do cliente (nome, documento etc.) nunca foram usados antes em nenhuma outra conta.

## Simulação

Isso ocorre de forma inconsistente, portanto, só acontecerá a cada duas tentativas.

## Workaround

Crie a conta pela interface de usuário do administrador.