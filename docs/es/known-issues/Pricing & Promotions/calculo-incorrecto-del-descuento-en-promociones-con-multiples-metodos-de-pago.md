---
title: 'Cálculo incorrecto del descuento en promociones con múltiples métodos de pago.'
slug: calculo-incorrecto-del-descuento-en-promociones-con-multiples-metodos-de-pago
status: PUBLISHED
createdAt: 2026-10-15T20:15:33.000Z
updatedAt: 2026-10-15T20:16:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: incorrect-discount-calculation-in-multi-payment-method-promotions
locale: es
kiStatus: Backlog
internalReference: 1474203
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las promociones MPM (Métodos de Pago Múltiples) configuradas con `applyOn = ValuePaidWithExpectedMethods` pueden devolver un descuento incorrecto cuando la función `AllowPaymentDetails` está habilitada.

El problema se debe a una discrepancia en los formatos monetarios durante el cálculo del descuento: el precio del artículo se representa en centavos, mientras que el valor del método de pago puede procesarse como un valor decimal. Esto puede resultar en un descuento significativamente mayor al esperado.

## Simulación

1. Habilite la función `AllowPaymentDetails`.

2. Cree una promoción MPM con un descuento porcentual y configure `applyOn = ValuePaidWithExpectedMethods`.

3. Añada un producto al carrito y seleccione el método de pago esperado, como Pix.

4. Simule la promoción e inspeccione la solicitud enviada a RnB, en particular el campo `paymentMethods[].value`.
5. Compruebe las etiquetas de precio devueltas y compare el importe del descuento con el valor esperado.

6. Repita la prueba con una promoción equivalente configurada con `applyOn = FullPrice` y compare los resultados.

## Workaround

N/A