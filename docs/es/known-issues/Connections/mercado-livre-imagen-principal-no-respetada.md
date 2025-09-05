---
title: Mercado Livre Imagen principal no respetada
slug: mercado-livre-imagen-principal-no-respetada
status: PUBLISHED
createdAt: 2025-09-05T16:26:49.367Z
updatedAt: 2025-09-05T16:26:49.367Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-main-image-not-respected
locale: es
kiStatus: Backlog
internalReference: 1287784
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La imagen principal establecida en VTEX admin no se respeta en la integración de Mercado Livre. La imagen principal mostrada en Netshoes es siempre la primera imagen subida, basada en el orden de subida - independientemente de la imagen marcada como principal en VTEX.



#### Simulación



- Acceda al administrador de VTEX y abra un producto.
- Sube dos o más imágenes a un SKU. Selecciona una de ellas como imagen principal, pero no la primera que añadas.
- Después de sincronizar con Mercado Livre, observe que la imagen principal mostrada en el mercado es la primera imagen subida, ignorando la imagen principal definida en el admin.

## Workaround



1. Para controlar qué imagen aparece como imagen principal en el Mercado, el vendedor debe asegurarse de que la imagen principal deseada se carga primero al registrar el producto en VTEX.
2. El vendedor también tiene la opción de ajustar el pedido directamente en el tablero de Mercado Livre.
3. No es posible actualizar la imagen SKU a través de la integración VTEX después de que haya sido enviada a Mercado Livre.



