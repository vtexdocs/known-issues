---
title: 'La API de adjuntos no permite valores "domainValues" nulos (y debería).'
slug: la-api-de-adjuntos-no-permite-valores-domainvalues-nulos-y-deberia
status: PUBLISHED
createdAt: 2023-09-11T22:02:39.000Z
updatedAt: 2026-09-23T17:04:15.000Z
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

Las solicitudes de actualización de la API /api/catalog/pvt/attachment/ no permiten actualizar el campo "Valor" del dominio si este tiene un valor nulo.

Este campo admite valores nulos, por lo que la respuesta de la API es incorrecta:

`{`
`  "Mensaje": "Los valores de dominio en la posición 1 no pueden ser nulos ni estar vacíos"`
`}`

## Simulación

1 - Crea un archivo adjunto mediante la interfaz de usuario o la API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - Intenta actualizarlo enviando el campo `domainValue` como nulo, por ejemplo:

`{`
`  "Id": 123,`
`  "Nombre": "carga útil con dominio nulo",`
`  "Es obligatorio": verdadero,`
` "IsActive": true,`
` "Dominios": [`
`      {`
`          "NombreCampo": "PruebaBásica",`
`          "MáximosCaracteres": "354534",`
`          "ValoresDominio": ""`
`      }`
`  ]`
`}`
3 - Se mostrará una respuesta de tipo "Solicitud incorrecta", cuando en realidad debería aceptar valores nulos para este campo.

## Workaround

Actualice los valores permitidos manualmente, a través de la interfaz de usuario, o créelos ya nulos (el método POST funciona, el PUT no).