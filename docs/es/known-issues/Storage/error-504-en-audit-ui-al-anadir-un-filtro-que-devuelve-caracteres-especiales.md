---
title: Error 504 en Audit UI al añadir un filtro que devuelve caracteres especiales.
slug: error-504-en-audit-ui-al-anadir-un-filtro-que-devuelve-caracteres-especiales
status: PUBLISHED
createdAt: 2025-10-16T20:00:28.613Z
updatedAt: 2025-10-16T20:00:28.613Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-504-in-audit-ui-when-adding-filter-that-returns-special-characters
locale: es
kiStatus: Backlog
internalReference: 1151566
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al añadir un filtro en la interfaz de usuario de auditoría se produce un error. Este problema se produce porque el valor del campo contiene un carácter especial que la IU no puede interpretar, lo que provoca el fallo de la aplicación.

## Simulación



- Vaya a la interfaz de usuario de auditoría `https://.myvtex.com/admin/ui/audit`.
- Añada un campo "Event Detail" a la aplicación "Site Editor".
- Observe que la aplicación lanza un error `504 gateway Timeout` al intentar procesar los detalles `Something went wrong`.

 ![](https://vtexhelp.zendesk.com/attachments/token/rK7X8AT7k1gH5uh71R9Mksvdd/?name=Captura+de+Tela+2024-12-16+a%CC%80s+15.53.33.png)

## Workaround

"N/A"