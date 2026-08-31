---
title: 'El código del cupón no se registra en el pedido cuando se aplica con mayúsculas o minúsculas diferentes.'
slug: el-codigo-del-cupon-no-se-registra-en-el-pedido-cuando-se-aplica-con-mayusculas-o-minusculas-diferentes
status: PUBLISHED
createdAt: 2026-08-31T23:21:24.000Z
updatedAt: 2026-08-31T23:21:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: coupon-code-is-not-recorded-in-the-order-when-applied-with-different-letter-case
locale: es
kiStatus: Backlog
internalReference: 1454466
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un comprador aplica un cupón con una combinación de mayúsculas y minúsculas diferente a la registrada en Tarifas y Beneficios (por ejemplo, escribiendo `Frete1` para un cupón registrado como `frete1`), la promoción se aplica correctamente y se concede el descuento, pero el código del cupón no se registra en el pedido.

El total del pedido, el descuento y la información en `ratesAndBenefitsData` permanecen correctos; solo se ve afectado el registro de marketing.

## Simulación

1. En el panel de administración, cree un cupón con un código en minúsculas (por ejemplo, `frete1`) y vincúlelo a una promoción activa.

2. Cree un carrito y añada un artículo que cumpla los requisitos para dicha promoción.

3. Aplique el cupón con una combinación de mayúsculas y minúsculas diferente a la registrada.
4. Confirme en la respuesta del formulario de pedido que la promoción se aplicó correctamente.

5. Realice el pedido.

6. Recupere los detalles del pedido mediante la API Get order y compruebe el campo `marketingData`. El código del cupón no aparece.

El cupón será una cadena vacía si el carrito no contiene datos UTM, y `marketingData` será `null` si el carrito contiene algún campo UTM.

## Workaround

Normalice el código del cupón a minúsculas en la tienda o aplicación antes de enviarlo al proceso de pago.