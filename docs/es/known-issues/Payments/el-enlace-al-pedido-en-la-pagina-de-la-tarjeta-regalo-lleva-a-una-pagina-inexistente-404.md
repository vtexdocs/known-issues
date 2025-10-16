---
title: El enlace al pedido en la página de la tarjeta regalo lleva a una página inexistente (404)
slug: el-enlace-al-pedido-en-la-pagina-de-la-tarjeta-regalo-lleva-a-una-pagina-inexistente-404
status: PUBLISHED
createdAt: 2025-10-16T20:42:08.019Z
updatedAt: 2025-10-16T20:42:08.019Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-link-to-the-order-on-the-gift-card-page-leads-to-a-nonexistent-page-404
locale: es
kiStatus: Backlog
internalReference: 1196298
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En algunos extractos de tarjetas regalo, no es posible acceder directamente al pedido. El problema es que el enlace tiene el siguiente formato
`https://.myvtex.com/admin/checkout#/orders/`

Sin embargo, el formato correcto debería ser:
`https://.myvtex.com/admin/orders/`


#### Simulación


No se puede reproducir.

## Workaround


Recopile el `orderId` deseado y utilice la ruta correcta: `https://.myvtex.com/admin/orders/`



