---
title: 'Las opciones «Texto grande con índices» y «Texto con índices» no se modifican al importar la especificación'
slug: las-opciones-texto-grande-con-indices-y-texto-con-indices-no-se-modifican-al-importar-la-especificacion
status: PUBLISHED
createdAt: 2021-01-08T19:17:13.000Z
updatedAt: 2026-02-11T00:03:37.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: large-indexed-text-and-indexed-text-not-being-changed-by-specification-import
locale: es
kiStatus: Fixed
internalReference: 322657
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, para todos los tipos de especificaciones de producto, los campos «`Texto indexado extenso`» y «`Texto indexado`» no reconocen los cambios en los valores de las especificaciones al importarlas a través de la hoja de especificaciones del producto.

## Simulación

1) Crea una especificación de producto del tipo «`Texto indexado extenso`» o «`Texto indexado`».

2) Exporte una hoja de especificaciones de producto de una categoría en la que se haya creado esta especificación: en ProdutoExportacaoImportacaoEspecificacaoV2.aspx e intente cambiar un valor de especificación.

3) Compruebe el producto en el que ha solicitado los cambios; no se habrá realizado ninguno.

## Workaround

Utilizar otros tipos de texto, como «`Texto grande`» o «`Texto`».