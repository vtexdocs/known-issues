---
title: 'El sistema no admite más de una afiliación de pago aplazado para el método de pago con tarjeta de débito en línea'
slug: el-sistema-no-admite-mas-de-una-afiliacion-de-pago-aplazado-para-el-metodo-de-pago-con-tarjeta-de-debito-en-linea
status: PUBLISHED
createdAt: 2020-12-28T21:11:38.000Z
updatedAt: 2026-06-05T21:05:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-system-doesnt-work-with-more-than-one-extension-payment-affiliation-for-debit-online-method
locale: es
kiStatus: No Fix
internalReference: 319750
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se configura más de una **afiliación de pago de extensión** para el método de pago **débito online** utilizando diferentes adquirentes, las transacciones pueden ser redirigidas a la **afiliación incorrecta** de forma intermitente. Esto significa que un pago destinado a un adquirente puede acabar siendo procesado por otro, lo que provoca un comportamiento inconsistente al finalizar la compra.

## Simulación

No se puede reproducir de forma consistente en un entorno controlado. El problema se manifiesta de forma intermitente en producción cuando se configuran dos o más reglas de pago por débito en línea con afiliaciones diferentes del mismo tipo.

## Workaround

provisional**
Utilice solo **una afiliación** por regla de pago mediante débito online, o desactive las afiliaciones adicionales. La configuración de múltiples afiliaciones de extensión para el mismo método de pago no es compatible de forma fiable.