---
title: 'Imagen principal no respetada'
slug: imagen-principal-no-respetada
status: PUBLISHED
createdAt: 2025-08-12T20:23:23.445Z
updatedAt: 2025-08-12T20:23:23.445Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: netshoes-main-image-not-respected
locale: es
kiStatus: Backlog
internalReference: 1220978
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La imagen principal establecida en VTEX admin **no se respeta** en la integración de Netshoes. La imagen principal mostrada en Netshoes es siempre la **primera imagen subida**, basada en el orden de subida - independientemente de la imagen marcada como principal en VTEX.


#### Simulación



- Accede al administrador de VTEX y abre un producto.
- Sube dos o más imágenes a un SKU. Marque una de ellas como la imagen principal, pero no la primera que subió.
- Después de la sincronización con Netshoes, observa que la imagen principal mostrada en el mercado es la **primera imagen subida**, ignorando la imagen principal definida en el admin.

## Workaround


Para controlar qué imagen se muestra como principal en Netshoes, el vendedor debe **asegurarse de que la imagen principal deseada se sube primero** al registrar el producto en VTEX.
Además, **no es posible actualizar la imagen SKU a través de la integración VTEX una vez que ha sido enviada a Netshoes**. Cualquier actualización de imagen debe ser **solicitada manualmente abriendo un ticket directamente con Netshoes**.
La integración actual **no permite asignar o priorizar la imagen principal**.