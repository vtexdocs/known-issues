---
title: 'Aplicar el descuento a los artículos más caros: la interfaz de usuario no guarda los datos.'
slug: aplicar-el-descuento-a-los-articulos-mas-caros-la-interfaz-de-usuario-no-guarda-los-datos
status: PUBLISHED
createdAt: 2024-04-03T20:29:09.000Z
updatedAt: 2026-09-23T16:54:19.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
locale: es
kiStatus: Backlog
internalReference: 1011071
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar la interfaz de usuario de promociones, intentar guardar manualmente la opción "Aplicar a los artículos más caros" no funcionará y el selector permanecerá en la opción de tipo más económico.

![](https://vtexhelp.zendesk.com/attachments/token/ofDGJuHHbNRwvbYDMOSSCznvB/?name=image.png)

## Simulación

1 - Acceda a la interfaz de usuario de promociones: https://account_name.myvtex.com/admin/promotions

2 - En la interfaz de usuario de promociones, seleccione la opción "Aplicar el descuento a los artículos más caros".

3 - Guarde la promoción.

4 - Acceda nuevamente; la casilla para aplicar la opción más económica estará seleccionada.

## Workaround

Utilice la API de guardado de promociones: https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration