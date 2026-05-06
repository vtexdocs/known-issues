---
title: 'La API de Attachents no permite valores nulos en «domainValues» (y debería hacerlo)'
slug: la-api-de-attachents-no-permite-valores-nulos-en-domainvalues-y-deberia-hacerlo
status: PUBLISHED
createdAt: 2023-09-11T19:02:39.000Z
updatedAt: 2023-09-11T19:02:39.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachents-api-doesnt-allow-null-domainvalues-and-it-should
locale: es
kiStatus: Backlog
internalReference: 897480
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las solicitudes de actualización de la API `/api/catalog/pvt/attachment/` no permiten que el campo «Value» del dominio tenga un valor nulo.

Este campo es nulo, por lo que la respuesta de esta API es incorrecta:

`{`
`  "Message": "DomainValues in Domain at position 1 can not be null or empty value"`
`}`

## Simulación

1 - Crea un archivo adjunto a través de la interfaz de usuario o la API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - Intenta actualizarlo enviando el campo `domainValue` como nulo, por ejemplo:

`{`
`  "Id": 123,`
`  "Name": "payload with null domain",`
`  "IsRequired": true,`
`  "IsActive": true,`
`  "Domains": [`
` {`
` "FieldName": "Prueba básica",`
` "MaxCaracters": "354534",`
` "DomainValues": ""`
` }`
`  ]`
`}`

3 - Se mostrará un tipo de respuesta «Bad request» (Solicitud incorrecta), cuando en realidad debería aceptar valores nulos para este campo.

## Workaround

Actualiza los valores permitidos manualmente, a través de la interfaz de usuario, o créalos ya como nulos (el método POST funciona, el PUT no).