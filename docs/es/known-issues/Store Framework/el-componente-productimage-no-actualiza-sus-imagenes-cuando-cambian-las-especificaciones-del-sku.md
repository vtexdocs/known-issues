---
title: 'El componente ProductImage no actualiza sus imágenes cuando cambian las especificaciones del SKU'
slug: el-componente-productimage-no-actualiza-sus-imagenes-cuando-cambian-las-especificaciones-del-sku
status: PUBLISHED
createdAt: 2022-09-30T21:46:04.000Z
updatedAt: 2023-05-23T18:34:40.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: the-productimage-component-doesnt-update-its-images-based-on-sku-specifications-change
locale: es
kiStatus: Backlog
internalReference: 669619
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un producto tiene más de una especificación y el usuario cambia la selección de especificaciones, el componente ProductImage no actualiza sus imágenes en función del cambio en la selección correspondiente.

El componente SKUSelector compara el itemId (cadena devuelta por la matriz product.items) con el selectedImageVariationSKU (cadena devuelta por el skuSelector, que es un objeto devuelto por el contexto) para mostrar la imagen correcta tras la selección del usuario; por lo tanto, si el skuSelector.selectedImageVariationSKU no se actualiza, el valor permanecerá en el estado anterior y no actualizará la imagen mostrada en la pantalla dentro del componente ProductImage.

Esto también afecta a la imagen en el selector de SKU, ya que utilizan las mismas variables. Se observó que, tras seleccionar un SKU y cargar la página en la URL del sitio web, selectedImageVariationSKU permanecía en el estado anterior y no actualizaba la imagen mostrada en la pantalla.

## Simulación

Prueba: https://youtu.be/qr4-uTRFwcY

## Workaround

provisional**
N/A