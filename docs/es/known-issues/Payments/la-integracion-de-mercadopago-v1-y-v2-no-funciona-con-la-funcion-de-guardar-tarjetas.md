---
title: 'La integración de MercadoPago V1 y V2 no funciona con la función de guardar tarjetas'
slug: la-integracion-de-mercadopago-v1-y-v2-no-funciona-con-la-funcion-de-guardar-tarjetas
status: PUBLISHED
createdAt: 2020-09-01T15:25:36.000Z
updatedAt: 2024-01-09T13:23:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-mercadopagov1-and-v2-integration-does-not-work-with-save-card-functionality
locale: es
kiStatus: Backlog
internalReference: 283727
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La integración de MercadoPagoV1 y MercadoPagoV2 no funciona correctamente con la función de guardar tarjetas de la sección «Mi cuenta» en los países que no permiten transacciones con decimales.

Este problema surge porque la función «Mis tarjetas» genera una nueva transacción con un valor de 1,5 $. Sin embargo, algunos países no permiten transacciones con importes decimales de este tipo, lo que provoca el rechazo de cualquier intento de aprobar estas transacciones.

## Simulación

1. Accede al **Admin.** de VTEX.
2. Configura el adquirente MercadoPagoV1 o MercadoPagoV2.
3. Configura un método de pago con tarjeta de crédito —como Mastercard, Visa, American Express, etc.— para que sea procesado por el adquirente.
4. Ve a la página de inicio de tu tienda.
5. Inicia sesión introduciendo tu dirección de correo electrónico y contraseña.
6. Haz clic en **Mi cuenta**.
7. Ve a la sección **Tarjetas de crédito**.
8. Haz clic en **Añadir nueva tarjeta**.
9. Rellena todos los campos y haz clic en **Guardar nueva tarjeta**.
10. Este proceso mostrará el mensaje _Se ha producido un error al intentar registrar la tarjeta_

## Workaround

N/A