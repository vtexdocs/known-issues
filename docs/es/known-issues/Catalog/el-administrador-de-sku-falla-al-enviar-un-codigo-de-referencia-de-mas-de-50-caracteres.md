---
title: 'El administrador de SKU falla al enviar un código de referencia de más de 50 caracteres'
slug: el-administrador-de-sku-falla-al-enviar-un-codigo-de-referencia-de-mas-de-50-caracteres
status: PUBLISHED
createdAt: 2023-08-21T17:52:12.000Z
updatedAt: 2023-08-21T17:52:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-admin-breaks-when-sending-a-reference-code-longer-than-50-characters
locale: es
kiStatus: Backlog
internalReference: 884789
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se espera que el usuario pueda modificar el código de referencia de una SKU a través del panel de administración. Sin embargo, cuando se introduce un valor de más de 50 caracteres, el panel de administración se bloquea y muestra un mensaje que indica «ha ocurrido un error».

## Simulación

- Accede al panel de administración de una SKU: `/admin/Site/SkuForm.aspx?IdSku=`
- Vaya al campo **Código de referencia** e introduzca un valor de más de 50 caracteres, como:

 ABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEABCDEW

- Haga clic en «Guardar»
- Se mostrará un mensaje de «Algo ha salido mal» en la interfaz.

## Workaround

No envíe más de 50 caracteres en el campo **Código de referencia** de una SKU