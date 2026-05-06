---
title: 'La función «Activar servicio al importar» (SkuVincularValorServico.aspx) no funciona'
slug: la-funcion-activar-servicio-al-importar-skuvincularvalorservicoaspx-no-funciona
status: PUBLISHED
createdAt: 2021-03-02T18:52:43.000Z
updatedAt: 2024-05-10T14:23:57.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: activate-service-on-import-skuvincularvalorservicoaspx-not-working
locale: es
kiStatus: Backlog
internalReference: 339894
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, en la función de importación de SkuVincularValorServico.aspx, al intentar cambiar el estado de los servicios ya existentes de «inactivo» a «activo», los valores no se modifican. La interfaz de usuario indica que los valores se han modificado, pero en realidad no ocurre nada.

(Lo contrario sí funciona: cambiar de activo a inactivo sí funciona).

## Simulación

1) Acceda a la interfaz de usuario https://account.myvtex.com/admin/Site/SkuVincularValorServico.aspx e intercambie las filas de la hoja adjunta de 0 a 1 y viceversa:

 ![](https://vtexhelp.zendesk.com/attachments/token/ladK39V5My6gjGixeHuNTaV2b/?name=inline-1801216200.png)

2) Comprueba los efectos finales en el SKU cuyos valores has modificado:
 ![](https://vtexhelp.zendesk.com/attachments/token/znYEzQhMevPcRVYKlBQYa73fF/?name=inline1216426643.png)

Podrá marcarlos como inactivos, pero no como activos. La interfaz de usuario de importación indica que se han realizado cambios:
 ![](https://vtexhelp.zendesk.com/attachments/token/6iKARGtVqTbKaL0vY9s7XPvt6/?name=inline2110004305.png)

En realidad, no se modifica ningún valor en la base de datos de la cuenta en cuestión.

## Workaround

Utilizar la interfaz de usuario para realizar cambios de inactivo a activo y/o nuestras API de servicio:
https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-service