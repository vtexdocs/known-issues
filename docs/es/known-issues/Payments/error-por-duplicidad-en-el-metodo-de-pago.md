---
title: 'Error por duplicidad en el método de pago'
slug: error-por-duplicidad-en-el-metodo-de-pago
status: PUBLISHED
createdAt: 2023-11-02T12:01:41.000Z
updatedAt: 2023-11-02T12:22:43.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-on-duplicate-payment-method
locale: es
kiStatus: Backlog
internalReference: 929428
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al duplicar un método de pago que no admite pagos a plazos, el operador recibe el siguiente mensaje en pantalla: «El sistema de pago actual no permite opciones de pago a plazos». Esto ocurre porque, al generar el cuerpo de la solicitud de creación en la nueva regla, se insertan algunos campos de forma predeterminada, entre ellos «installmentOptions», pero este campo no existe para los pagos en efectivo, como los realizados con tarjeta de débito o boleto (Brasil).

## Simulación

1. Ve a la pantalla de condiciones de pago.
2. Selecciona un método de pago que no ofrezca la opción de pago a plazos.
3. Haz clic en el botón para duplicar la regla.
4. Aparecerá el siguiente mensaje de error en tu pantalla: «El sistema de pago actual no permite opciones de pago a plazos».

## Workaround

Tenemos dos formas de solucionar este problema:

1. Crea otra con la misma configuración que la que deseas duplicar;
2. Crea la regla a través de la API, `https://.myvtex.com/api/payments/pvt/rules/`, eliminando el campo installmentOptions del cuerpo.