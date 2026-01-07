---
title: 'La interfaz de usuario del simulador de promociones muestra un número incorrecto de artículos en comparación con el carrito real.'
slug: la-interfaz-de-usuario-del-simulador-de-promociones-muestra-un-numero-incorrecto-de-articulos-en-comparacion-con-el-carrito-real
status: PUBLISHED
createdAt: 2026-01-07T18:03:32.318Z
updatedAt: 2026-01-07T18:03:32.318Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-simulator-ui-shows-an-incorrect-number-of-items-compared-to-the-actual-cart
locale: es
kiStatus: Backlog
internalReference: 1347847
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 La interfaz de usuario del simulador de promociones puede mostrar un número de artículos diferente al número real presente en el carrito. Este problema no afecta a los descuentos aplicados ni a los precios finales del formulario de pedido. Se trata estrictamente de un problema de visualización de la interfaz de usuario, causado por la forma en que los artículos se dividen internamente en el carrito durante la evaluación de la promoción.

## Simulación

 - Configure dos promociones «Más por menos»: - La primera promoción aplica un descuento cuando el cliente compra 2 artículos de una colección específica. - La segunda promoción aplica un descuento mayor cuando el cliente compra 3 artículos de la misma colección. - Configure ambas promociones para: - Aplicar el descuento solo a un artículo del carrito. - Seleccionar el artículo más barato como objetivo del descuento.

- Permitir la acumulación con otras promociones. - Añadir 3 SKU de la colección promocional al carrito. - Abrir el simulador de promociones en la caja. - Observar que la interfaz de usuario del simulador de promociones muestra 5 artículos, aunque solo haya 3 artículos en el carrito.## Workaround

 alternativa N/A 