---
title: 'Campaign Audience no guarda la información de los cupones'
slug: campaign-audience-no-guarda-la-informacion-de-los-cupones
status: PUBLISHED
createdAt: 2025-09-04T15:03:12.584Z
updatedAt: 2025-09-04T15:03:12.584Z
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


Cuando se configura una condición de cupón dentro de un público de campaña, la información del cupón no se pasa al campo Parámetros coincidentes de la respuesta RnB. Como resultado, los formularios Checkout y OrderForm no conservan los datos del cupón y OMS no los mostrará en `marketingData`.


## Simulación



1. Cree un público de campaña utilizando una condición de cupón.
2. 2. Asocie esta audiencia de campaña con una promoción de campaña.
3. Completa una compra en la que se aplique esta promoción.
4. 4. Compruebe el pedido en OMS.
5. Revise el `orderForm` → observe que falta la información del cupón en el campo `marketingData`.


## Workaround


No existe una solución nativa. Si es posible, configure la condición del cupón **directamente en la promoción** en lugar de utilizar un público de campaña. Esto garantiza que la información del cupón se devuelva en `matchedParameters` y se guarde en el pedido.


