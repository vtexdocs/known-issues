---
title: El valor del precio SKU se muestra incorrectamente en el detalle de Mi pedido
slug: el-valor-del-precio-sku-se-muestra-incorrectamente-en-el-detalle-de-mi-pedido
status: PUBLISHED
createdAt: 2025-10-16T20:33:58.781Z
updatedAt: 2025-10-16T20:33:58.781Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: sku-price-value-being-displayed-incorrectly-in-my-order-detail
locale: es
kiStatus: Backlog
internalReference: 1171863
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La lista de artículos del área de detalle de Mis Pedidos se genera fusionando la información devuelta por dos rutas internas. Aunque estas rutas proporcionan datos similares, no son idénticas. Cuando hay dos SKUs del mismo artículo en el pedido, el proceso de fusión puede asignar el mismo precio a ambos, resultando en una visualización incorrecta del valor total en la interfaz, divergiendo del valor real registrado en el pedido.


#### Simulación


Cree un pedido con dos SKU diferentes del mismo artículo, pero con precios diferentes.
Acceda al área de detalles del pedido en Mis Pedidos.
Compare los precios mostrados con los valores reales del pedido.
Si se produce el problema, ambas SKUs aparecerán con el mismo precio, provocando que el total mostrado difiera.

## Workaround


No hay ninguna solución disponible.



