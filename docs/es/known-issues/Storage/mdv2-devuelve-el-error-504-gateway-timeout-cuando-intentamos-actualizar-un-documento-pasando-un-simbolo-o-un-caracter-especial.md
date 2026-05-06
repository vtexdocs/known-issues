---
title: 'MDv2 devuelve el error «504 Gateway Timeout» cuando intentamos actualizar un documento pasando un símbolo o un carácter especial.'
slug: mdv2-devuelve-el-error-504-gateway-timeout-cuando-intentamos-actualizar-un-documento-pasando-un-simbolo-o-un-caracter-especial
status: PUBLISHED
createdAt: 2023-06-29T19:33:28.000Z
updatedAt: 2025-10-21T22:13:47.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: mdv2-returns-error-504-gateway-timeout-when-we-try-to-update-a-document-passing-a-symbol-or-special-character
locale: es
kiStatus: Fixed
internalReference: 852966
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El comportamiento de la API al intentar actualizar un documento que contenga un símbolo en un campo de tipo cadena, como `"name": "Product1 14€"`, devolverá el error 504 (tiempo de espera de la puerta de enlace agotado) y no actualizará el documento.

## Simulación

1. Realice una solicitud PUT para actualizar un documento a través de la API; en el cuerpo, incluya el carácter especial en un campo de tipo cadena.

 { "name": "Product1 14€", ...}2.  Observe la respuesta de la API y compruebe que devuelve el error 504 Gateway timeout.

## Workaround

Elimine el carácter especial e introduzca el nombre del símbolo. Por ejemplo: "`14 euros`"