---
title: 'La modificación del precio del Marketplace se aplica a todos los artículos del carrito, independientemente del vendedor'
slug: la-modificacion-del-precio-del-marketplace-se-aplica-a-todos-los-articulos-del-carrito-independientemente-del-vendedor
status: PUBLISHED
createdAt: 2026-05-29T23:56:28.000Z
updatedAt: 2026-05-29T23:56:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketplace-price-override-applies-to-all-cart-items-regardless-of-the-seller
locale: es
kiStatus: Backlog
internalReference: 1414414
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un marketplace configura la sustitución de precios de los vendedores, cualquier carrito que incluya al menos un artículo de un vendedor sustituido acaba aplicando el precio del marketplace a todos los artículos del carrito, incluidos los artículos de vendedores que no deberían ser sustituidos.

El síntoma visible es que los carritos con vendedores mixtos muestran el precio del mercado en los vendedores no modificados. Esto afecta a los carritos de pago en cualquier canal de ventas donde esté habilitado `sellersToOverride` y el carrito contenga artículos tanto de vendedores modificados como de vendedores no modificados.

## Simulación

**Requisitos previos: **
El mercado debe tener sellersToOverride configurado en Precios para al menos un vendedor.

**Pasos:**


- Crea un carrito que contenga un artículo del vendedor X, cuyo precio debe ser anulado.
- Añade un artículo del vendedor Y al mismo carrito.

Como resultado, el artículo del vendedor Y recibe incorrectamente el precio del mercado en lugar de su propio precio.

## Workaround

El mercado puede registrar los precios de los productos de los vendedores en su propia cuenta.