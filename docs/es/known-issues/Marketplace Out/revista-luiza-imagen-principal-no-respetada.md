---
title: 'Revista Luiza - Imagen principal no respetada'
slug: revista-luiza-imagen-principal-no-respetada
status: PUBLISHED
createdAt: 2025-05-06T18:19:45.000Z
updatedAt: 2026-06-23T15:54:07.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-main-image-not-respected
locale: es
kiStatus: Backlog
internalReference: 1221096
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La imagen principal configurada en el panel de administración de VTEX **no se respeta** en la integración con Magazine Luiza. La imagen principal que se muestra en Magazine Luiza siempre es la **primera imagen subida**, según el orden de subida, independientemente de la imagen marcada como principal en VTEX.

## Simulación

- Acceda al panel de administración de VTEX y abra un producto.

- Suba dos o más imágenes a un SKU. Marque una de ellas como imagen principal, pero **no la primera que se añade**.

- Tras sincronizar con Magazine Luiza, observe que la imagen principal que se muestra en el marketplace es la **primera imagen subida**, ignorando la imagen principal definida en el panel de administración.

## Workaround

Para garantizar que la imagen deseada se muestre como principal en Magazine Luiza, el vendedor debe subirla **primero** en el panel de administración de VTEX, asegurándose de que aparezca al principio de la lista. Si bien es técnicamente posible actualizar la imagen principal después de que se haya enviado el SKU mediante una nueva sincronización, el comportamiento actual **no prioriza la lógica de la imagen principal definida en la administración de VTEX**.