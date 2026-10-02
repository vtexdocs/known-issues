---
title: 'Error en el recuento de la cantidad de SKU en el proceso de pago cuando se aplica la promoción "Más por menos" en las cotizaciones B2B.'
slug: error-en-el-recuento-de-la-cantidad-de-sku-en-el-proceso-de-pago-cuando-se-aplica-la-promocion-mas-por-menos-en-las-cotizaciones-b2b
status: PUBLISHED
createdAt: 2025-08-26T22:07:30.000Z
updatedAt: 2026-10-02T17:14:39.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: sku-quantity-miscount-in-checkout-when-more-for-less-promotion-is-applied-in-b2b-quotes
locale: es
kiStatus: Fixed
internalReference: 1281922
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se aplica una promoción de "Más por menos" (o cualquier promoción que divida artículos) en Cotizaciones B2B para un SKU, al finalizar la compra, el primer grupo del SKU dividido permanecerá en el carrito, pero el segundo no. En otras palabras, el proceso de pago calcula erróneamente el total de unidades del SKU.

## Simulación

- Cree una cotización con 12 unidades de un SKU con una promoción de "Más por menos" aplicada por cada 10 unidades.

- La aplicación Cotizaciones B2B dividirá el SKU en 1 artículo de 10 unidades (con la promoción aplicada) y 1 artículo de 2 unidades (con el precio total sin la promoción).

- Finalice la compra.

- El primer artículo de 10 unidades aparecerá en la página de pago, pero el segundo (con 2 unidades) no.

## Workaround

NA