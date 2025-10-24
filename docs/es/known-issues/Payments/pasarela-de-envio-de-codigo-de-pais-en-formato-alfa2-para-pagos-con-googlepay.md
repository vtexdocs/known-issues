---
title: 'Pasarela de envío de código de país en formato alfa-2 para pagos con GooglePay'
slug: pasarela-de-envio-de-codigo-de-pais-en-formato-alfa2-para-pagos-con-googlepay
status: PUBLISHED
createdAt: 2025-10-16T20:40:36.453Z
updatedAt: 2025-10-16T20:40:36.453Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gateway-sending-country-code-in-alpha2-format-for-googlepay-payments
locale: es
kiStatus: Backlog
internalReference: 1191562
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La pasarela envía el código de país de la dirección de facturación en formato alfa-2 al proveedor en caso de pagos con GooglePay.


#### Simulación


Ocurre con todas las transacciones de Google Pay ya que Google utiliza un formato diferente al esperado en nuestro protocolo.

## Workaround


El proveedor debe identificar y aceptar la transacción aunque la dirección de facturación tenga un formato diferente en los casos de transacciones GooglePay.



