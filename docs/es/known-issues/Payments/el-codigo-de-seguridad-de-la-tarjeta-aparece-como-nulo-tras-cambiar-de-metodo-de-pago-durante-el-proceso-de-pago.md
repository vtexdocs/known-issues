---
title: 'El código de seguridad de la tarjeta aparece como «Nulo» tras cambiar de método de pago durante el proceso de pago'
slug: el-codigo-de-seguridad-de-la-tarjeta-aparece-como-nulo-tras-cambiar-de-metodo-de-pago-durante-el-proceso-de-pago
status: PUBLISHED
createdAt: 2021-10-05T16:35:35.000Z
updatedAt: 2026-06-19T16:01:07.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: card-security-code-null-after-switching-payment-methods-in-checkout
locale: es
kiStatus: Backlog
internalReference: 442772
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario introduce el código de seguridad de una tarjeta de crédito o débito, cambia a otro método de pago y vuelve al anterior, el código de seguridad parece seguir introducido en la interfaz de usuario, aunque en realidad está vacío. Esto provoca resultados diferentes según el tipo de tarjeta:

- **Tarjeta de crédito:** La transacción no se inicia y se muestra un error en la página de pago antes de que se envíe al proveedor.
- **Tarjeta de débito:** La transacción se inicia y se envía al proveedor sin el código de seguridad de la tarjeta.

## Simulación

1. Crea un carrito y completa la información de perfil y logística hasta llegar al paso de pago.
2. Introduce los datos de la tarjeta en la interfaz nativa de la tarjeta (crédito o débito).
3. Cambia a otro método de pago.
4. Vuelve a la tarjeta del paso 2; fíjate en que el campo del código de seguridad sigue apareciendo como rellenado.
5. Rellena los campos obligatorios restantes sin tocar el código de seguridad.
6. Intenta realizar el pedido.

## Workaround

provisional**
Después de cambiar de método de pago, borra el contenido del campo del código de seguridad y vuelve a introducirlo antes de realizar el pedido.