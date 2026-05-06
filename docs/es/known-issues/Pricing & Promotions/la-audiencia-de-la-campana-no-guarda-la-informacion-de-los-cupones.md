---
title: 'La audiencia de la campaña no guarda la información de los cupones'
slug: la-audiencia-de-la-campana-no-guarda-la-informacion-de-los-cupones
status: PUBLISHED
createdAt: 2022-02-10T16:21:28.000Z
updatedAt: 2025-09-04T18:02:18.000Z
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

Cuando se configura una condición de cupón dentro de una **audiencia de campaña**, la información del cupón no se transmite en el campo `matchedParameters` de la respuesta RnB. Como consecuencia, el proceso de pago y el formulario de pedido no conservan los datos del cupón, y el OMS no los mostrará en `marketingData`.

## Simulación

1. Crea una audiencia de campaña utilizando una condición de cupón.
2. Asocia esta audiencia de campaña a una promoción de campaña.
3. Realiza una compra en la que se aplique esta promoción.
4. Comprueba el pedido en el OMS.
5. Revise el `orderForm` → observe que falta la información del cupón en el campo `marketingData`.

## Workaround

No existe una solución alternativa nativa. Si es posible, configure la condición de cupón **directamente en la promoción** en lugar de utilizar una audiencia de campaña. Esto garantiza que la información del cupón se devuelva en `matchedParameters` y se guarde en el pedido.