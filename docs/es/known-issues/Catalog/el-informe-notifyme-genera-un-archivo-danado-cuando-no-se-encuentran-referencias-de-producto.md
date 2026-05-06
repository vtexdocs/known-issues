---
title: 'El informe «Notify-me» genera un archivo dañado cuando no se encuentran referencias de producto'
slug: el-informe-notifyme-genera-un-archivo-danado-cuando-no-se-encuentran-referencias-de-producto
status: PUBLISHED
createdAt: 2023-12-20T20:13:14.000Z
updatedAt: 2023-12-20T20:13:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: notifyme-report-generates-a-corrupted-file-when-there-are-no-skus-found
locale: es
kiStatus: Backlog
internalReference: 956264
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el informe «Notificarme» no contiene SKU, al intentar exportarlo se genera un archivo dañado en Excel

## Simulación

- Comprueba si el informe «Notificarme» está vacío
- Si es así, haz clic en «Exportar a Excel»
- Descarga el archivo y comprueba si es posible abrirlo

## Workaround

Abre el archivo en otro programa o rellena el informe para poder exportarlo