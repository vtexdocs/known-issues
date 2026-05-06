---
title: 'Error al crear una tarjeta regalo a través del panel de administración'
slug: error-al-crear-una-tarjeta-regalo-a-traves-del-panel-de-administracion
status: PUBLISHED
createdAt: 2024-02-21T22:45:10.000Z
updatedAt: 2024-02-21T22:45:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-creation-error-via-admin
locale: es
kiStatus: Backlog
internalReference: 986327
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunas cuentas no podrán crear una tarjeta regalo por primera vez a través del panel de administración; aparecerá el siguiente mensaje en pantalla:

`Ha surgido un error`
`Error al conectarse al servidor backend.`
`Por favor, vuelve a nuestra tienda dentro de unos minutos.`

## Simulación

Esto solo se puede reproducir en las tiendas que se enfrentan a este problema; tras rellenar toda la información de la tarjeta regalo y pulsar el botón «Guardar», los usuarios verán el mensaje de error mencionado anteriormente.

## Workaround

provisional**
Si la primera tarjeta regalo se crea a través de la API, el error dejará de producirse y, a partir de ese momento, los comerciantes podrán crear tarjetas regalo a través del panel de administración con normalidad.