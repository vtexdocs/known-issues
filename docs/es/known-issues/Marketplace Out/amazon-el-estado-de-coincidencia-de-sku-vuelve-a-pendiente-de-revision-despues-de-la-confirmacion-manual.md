---
title: 'Amazon El estado de coincidencia de SKU vuelve a "Pendiente de revisión" después de la confirmación manual.'
slug: amazon-el-estado-de-coincidencia-de-sku-vuelve-a-pendiente-de-revision-despues-de-la-confirmacion-manual
status: PUBLISHED
createdAt: 2026-08-10T22:33:52.000Z
updatedAt: 2026-08-10T22:33:52.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-sku-matching-status-reverts-to-pending-review-after-manual-confirmation
locale: es
kiStatus: Backlog
internalReference: 1446100
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunas cuentas con la integración de Amazon, los SKU cuya coincidencia ya había sido confirmada manualmente por el vendedor vuelven a aparecer como "Pendiente de revisión" en el Panel de Publicación días o semanas después, sin que el vendedor haya realizado ninguna acción. La pantalla de coincidencia no muestra ninguna indicación de por qué sucedió esto internamente; un error reportado por Amazon sobre el listado provoca que el estado mostrado en VTEX retroceda, mientras que el enlace con Amazon permanece activo. En otras palabras, el producto no ha perdido su coincidencia, simplemente dejó de venderse debido a ese error, que no es visible en esa pantalla.

## Simulación

- El vendedor confirma manualmente la coincidencia de un SKU en la pantalla "Confirmar y publicar" del Panel de Publicación.

- Días o semanas después, Amazon reporta un error relacionado con el listado de ese mismo producto (por ejemplo, aprobación de marca pendiente o problemas pendientes en la cuenta de Amazon del vendedor). Este error no se muestra en la pantalla de coincidencia. - Al recibir esta notificación de error, el estado del SKU en VTEX cambia automáticamente a "Revisão pendente" ("Pendiente de revisión"), aunque la coincidencia siga activa y válida en Amazon. En la mayoría de los casos, se trata de una discrepancia en la visualización del estado (el SKU coincide, pero no se vende debido al error), no de una pérdida real de la coincidencia.

![](https://vtexhelp.zendesk.com/attachments/token/2OByFRa6E3rhMwqafpYoKvGsY/?name=image.png)

## Workaround

Dado que el error no se muestra en la pantalla de coincidencia, es necesario consultar la herramienta Bridge para identificar el informe de Amazon. Indique al vendedor que corrija el error directamente en Amazon y, a continuación, vuelva a confirmar la coincidencia en la pantalla de publicación. Actualmente no existe una solución permanente para evitar que el estado vuelva a cambiar.