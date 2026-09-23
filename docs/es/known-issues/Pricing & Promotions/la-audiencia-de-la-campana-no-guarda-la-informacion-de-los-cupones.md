---
title: 'La audiencia de la campaña no guarda la información de los cupones.'
slug: la-audiencia-de-la-campana-no-guarda-la-informacion-de-los-cupones
status: PUBLISHED
createdAt: 2022-02-10T16:21:28.000Z
updatedAt: 2026-09-23T15:23:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-doesnt-save-coupon-information
locale: es
kiStatus: Backlog
internalReference: 521601
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se configura una condición de cupón dentro de una **Audiencia de campaña**, la información del cupón no se transfiere al campo `matchedParameters` de la respuesta de RnB. Como resultado, el formulario de pago y el formulario de pedido no conservan los datos del cupón, y el OMS no los mostrará en `marketingData`.

## Simulación

1. Cree una Audiencia de campaña con una condición de cupón.

2. Asocie esta Audiencia de campaña con una Promoción de campaña.

3. Complete una compra a la que se aplique esta promoción.

4. Revise el Pedido en el OMS.

5. Revise el formulario de pedido y observe que falta la información del cupón en el campo `marketingData`.

## Workaround

No existe una solución alternativa nativa. Si es posible, configure la condición del cupón **directamente en la Promoción** en lugar de usar una Audiencia de campaña. Esto garantiza que la información del cupón se devuelva en `matchedParameters` y se guarde en el pedido.