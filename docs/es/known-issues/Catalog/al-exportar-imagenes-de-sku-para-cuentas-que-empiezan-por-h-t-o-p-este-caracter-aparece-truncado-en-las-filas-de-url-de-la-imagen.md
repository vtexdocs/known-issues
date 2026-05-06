---
title: 'Al exportar imágenes de SKU para cuentas que empiezan por «h», «t» o «p», este carácter aparece truncado en las filas de «URL de la imagen».'
slug: al-exportar-imagenes-de-sku-para-cuentas-que-empiezan-por-h-t-o-p-este-caracter-aparece-truncado-en-las-filas-de-url-de-la-imagen
status: PUBLISHED
createdAt: 2023-10-13T15:20:36.000Z
updatedAt: 2023-10-13T15:20:36.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exporting-sku-images-for-accounts-starting-with-ht-or-p-get-this-character-cut-in-the-image-url-rows
locale: es
kiStatus: Backlog
internalReference: 919199
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El informe de imágenes de SKU, /admin/Site/ProdutoImagemExportacao.aspx, para nombres de cuenta que comienzan por «h», «t» o «p», como «testaccount», mostrará un carácter faltante en la hoja de exportación, en la fila de la URL de la imagen.

## Simulación

1 - Para una cuenta que comience con los caracteres iniciales mencionados, vaya a /admin/Site/ProdutoImagemExportacao.aspx y exporte una hoja para cualquier SKU que tenga al menos una imagen.
2 - Abre la hoja exportada y comprueba la columna «UrlImagem»: no incluirá el carácter inicial.

Por ejemplo, si la cuenta se llama «testaccount»:

 ![](https://vtexhelp.zendesk.com/attachments/token/3VxPtxFSDjU1obEtgqkS16BXM/?name=image.png)

## Workaround

Crea una subcuenta que comience con otro carácter (por ejemplo, «mytestaccount») y accede a la interfaz de exportación utilizando esta subcuenta. La exportación mostrará entonces  la cadena URL completa sin ningún recorte incorrecto.