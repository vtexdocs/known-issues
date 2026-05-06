---
title: 'El comerciante no puede abrir cuentas para algunos clientes en la API de crédito para clientes'
slug: el-comerciante-no-puede-abrir-cuentas-para-algunos-clientes-en-la-api-de-credito-para-clientes
status: PUBLISHED
createdAt: 2023-09-25T13:22:39.000Z
updatedAt: 2023-09-25T13:22:39.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: merchant-not-being-able-to-open-account-for-some-clients-in-customer-credit-api
locale: es
kiStatus: Backlog
internalReference: 906509
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Por alguna razón, al intentar abrir una nueva cuenta para clientes específicos a través de la API, se devuelve el siguiente error:

{
"code": 1099,
"message": "La cuenta de crédito ya está abierta."
}


En este caso, los datos del cliente (nombre, documento, etc.) nunca se han utilizado antes en ninguna otra cuenta.

## Simulación

Esto ocurre de forma irregular, por lo que solo sucederá cada dos intentos.

## Workaround

Crea la cuenta a través de la interfaz de usuario de administración.