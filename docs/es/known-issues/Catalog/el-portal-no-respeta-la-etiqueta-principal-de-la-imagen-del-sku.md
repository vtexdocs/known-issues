---
title: 'El portal no respeta la etiqueta «Principal» de la imagen del SKU'
slug: el-portal-no-respeta-la-etiqueta-principal-de-la-imagen-del-sku
status: PUBLISHED
createdAt: 2022-12-07T17:47:12.000Z
updatedAt: 2022-12-08T13:43:57.000Z
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

Una tienda necesita configurar la imagen **Principal** independientemente del orden en que se haya cargado en el sistema. Actualmente, el sistema no respeta la etiqueta **Principal** y acaba tomando la primera imagen registrada como la principal.

## Simulación

1. Configura dos imágenes en la SKU.

2. Intenta cambiar la imagen principal mediante el botón **Principal** en la lista de imágenes.

3. Comprueba en la tienda si el cambio funciona.

## Workaround

Establece siempre la imagen que desees como principal como la primera imagen registrada para la SKU. Esto implica más trabajo, ya que hay que borrar las imágenes y volver a cargarlas.