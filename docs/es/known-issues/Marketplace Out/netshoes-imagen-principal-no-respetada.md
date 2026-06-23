---
title: 'Netshoes - Imagen principal no respetada'
slug: netshoes-imagen-principal-no-respetada
status: PUBLISHED
createdAt: 2025-05-06T17:10:23.000Z
updatedAt: 2026-06-23T16:02:44.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: netshoes-main-image-not-respected
locale: es
kiStatus: Backlog
internalReference: 1220978
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La imagen principal configurada en el panel de administración de VTEX **no se respeta** en la integración con Netshoes. La imagen principal que se muestra en Netshoes siempre es la **primera imagen subida**, según el orden de subida, independientemente de la imagen marcada como principal en VTEX.

## Simulación

- Acceda al panel de administración de VTEX y abra un producto.

- Suba dos o más imágenes a un SKU. Marque una de ellas como imagen principal, pero **no la primera que se añadió**.

- Tras sincronizar con Netshoes, observe que la imagen principal que se muestra en el marketplace es la **primera imagen subida**, ignorando la imagen principal definida en el panel de administración.

## Workaround

Para controlar qué imagen se muestra como principal en Netshoes, el vendedor debe **asegurarse de que la imagen principal deseada se suba primero** al registrar el producto en VTEX.

Además, **no es posible actualizar la imagen del SKU a través de la integración de VTEX una vez que se ha enviado a Netshoes**. Cualquier actualización de imagen debe **solicitarse manualmente abriendo un ticket directamente con Netshoes**.

La integración actual **no admite el mapeo ni la priorización de la imagen principal**.