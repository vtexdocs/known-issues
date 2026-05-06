---
title: 'La interfaz de usuario genera solicitudes independientes para cada clave o campo de un archivo adjunto'
slug: la-interfaz-de-usuario-genera-solicitudes-independientes-para-cada-clave-o-campo-de-un-archivo-adjunto
status: PUBLISHED
createdAt: 2021-02-19T17:13:53.000Z
updatedAt: 2024-03-01T20:32:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-triggers-separate-requests-for-each-keyfield-of-an-attachment
locale: es
kiStatus: Backlog
internalReference: 336371
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se establece el valor de un campo de archivo adjunto de un artículo a través de la interfaz de usuario, esto desencadena una solicitud para actualizar el «orderForm», incluso si aún quedan más campos por completar.
A continuación, se procesará esta solicitud y se obtendrá la respuesta con el «orderForm» actualizado.

En los casos en que el archivo adjunto tenga varios campos de texto libre, esto puede provocar que los campos siguientes se sobrescriban mientras se introducen sus valores.
Esto ocurre porque la solicitud de actualización se habrá enviado cuando este campo aún estaba en blanco, por lo que también estará en blanco en la respuesta.

En los casos en que el artículo tenga un archivo adjunto de suscripción con varias claves, puede activarse un mensaje de error como «no se puede comunicar con el vendedor» / «não foi possível se comunicar com o seller».
Esto ocurre porque la suscripción esperará que se hayan rellenado varias claves, pero la primera solicitud solo habrá enviado una.

## Simulación

Crea un archivo adjunto con al menos dos claves/campos.
Añade un artículo vinculado a este archivo adjunto a tu carrito y, a continuación, añade el archivo adjunto.
Por último, establece el valor de un campo y observa el comportamiento que se produce a continuación.

## Workaround

N/A