---
title: 'El portal no respeta la etiqueta "Principal" de la imagen de SKU.'
slug: el-portal-no-respeta-la-etiqueta-principal-de-la-imagen-de-sku
status: PUBLISHED
createdAt: 2022-12-07T20:47:12.000Z
updatedAt: 2026-09-23T17:24:25.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: portal-dont-respect-the-tag-principal-of-skus-image
locale: es
kiStatus: Backlog
internalReference: 712443
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Una tienda necesita configurar la imagen **Principal** independientemente del orden en que se cargó en el sistema. Actualmente, el sistema no respeta la etiqueta **Principal** y termina tomando la primera imagen registrada como la principal.

## Simulación

1. Configure dos imágenes en el SKU.

2. Intente cambiar la imagen principal desde el botón **Principal** en la lista de imágenes.

3. Verifique en la tienda si el cambio funciona.

## Workaround

Siempre configure la imagen que desea como principal como la primera imagen registrada para el SKU. Esto implica más trabajo, ya que hay que borrar las imágenes y volver a cargarlas.