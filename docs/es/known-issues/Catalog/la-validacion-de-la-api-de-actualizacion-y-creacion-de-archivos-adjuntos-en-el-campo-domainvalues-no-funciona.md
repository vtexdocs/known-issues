---
title: 'La validación de la API de actualización y creación de archivos adjuntos en el campo «DomainValues» no funciona'
slug: la-validacion-de-la-api-de-actualizacion-y-creacion-de-archivos-adjuntos-en-el-campo-domainvalues-no-funciona
status: PUBLISHED
createdAt: 2023-02-09T16:09:48.000Z
updatedAt: 2023-02-09T16:09:48.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachment-update-and-create-api-validation-on-field-domainvalues-not-working
locale: es
kiStatus: Backlog
internalReference: 751091
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

A través de la interfaz de usuario (directamente en el panel de administración de VTEX) es posible crear un archivo adjunto sin rellenar el campo **Valores permitidos**:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

Sin embargo, a través de la API existe esta validación para este campo:

 <Error> <Message>DomainValues en Domain en la posición 0 no puede ser nulo ni un valor vacío</Message></Error>


Lo que significa que no se puede crear un archivo adjunto como este:

 { "Id": 6, "Name": "Test", "IsRequired": false, "IsActive": true, "Domains": [     { "FieldName": "test", "MaxCaracters": "20",          "DomainValues": "" }  ]}

## Simulación

1. Utilice la siguiente API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/attachment
2. Intente dejar vacío el campo DomainValues
3. Compruebe que se devuelve el mensaje de error mencionado anteriormente.

## Workaround

Crea el archivo adjunto a través de Admin.