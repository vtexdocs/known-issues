---
title: 'Pérdida de información de envío de cookies del formulario de pedido de pago'
slug: perdida-de-informacion-de-envio-de-cookies-del-formulario-de-pedido-de-pago
status: PUBLISHED
createdAt: 2026-08-25T23:44:17.000Z
updatedAt: 2026-08-25T23:44:17.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkoutorderformownership-cookie-shipping-information-loss
locale: es
kiStatus: Backlog
internalReference: 1452215
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunos casos, al pasar del paso de envío al de pago del proceso de compra, la cookie `CheckoutOrderFormOwnership` pierde la información de la dirección, lo que provoca que los datos de envío se oculten.

## Simulación

La simulación en este caso no es del todo sencilla; el problema puede presentarse o no.

- En una tienda con la validación de la cookie `CheckoutOrderFormOwnership` activa;

- Complete la información de envío y proceda al pago;

- Los datos de envío/dirección se ocultarán.

## Workaround

No aplica. Póngase en contacto con el soporte técnico para solicitar la desactivación e indicar en qué casos se aplica.