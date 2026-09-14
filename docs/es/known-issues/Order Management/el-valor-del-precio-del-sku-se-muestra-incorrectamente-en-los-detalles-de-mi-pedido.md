---
title: 'El valor del precio del SKU se muestra incorrectamente en los detalles de mi pedido.'
slug: el-valor-del-precio-del-sku-se-muestra-incorrectamente-en-los-detalles-de-mi-pedido
status: PUBLISHED
createdAt: 2025-01-30T23:23:26.000Z
updatedAt: 2026-09-14T22:49:19.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sku-price-value-being-displayed-incorrectly-in-my-order-detail
locale: es
kiStatus: Fixed
internalReference: 1171863
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La lista de artículos en el área de detalles de Mis pedidos se genera combinando la información devuelta por dos rutas internas. Si bien estas rutas proporcionan datos similares, no son idénticas. Cuando hay dos SKU del mismo artículo en el pedido, el proceso de combinación puede asignarles el mismo precio, lo que resulta en una visualización incorrecta del valor total en la interfaz, que difiere del valor real registrado en el pedido.

## Simulación

Cree un pedido con dos SKU diferentes del mismo artículo, pero con precios distintos.

Acceda al área de detalles del pedido en Mis pedidos.

Compare los precios mostrados con los valores reales del pedido.

Si se presenta el problema, ambos SKU aparecerán con el mismo precio, lo que provocará que el total mostrado sea diferente.

## Workaround

No existe ninguna solución alternativa disponible.