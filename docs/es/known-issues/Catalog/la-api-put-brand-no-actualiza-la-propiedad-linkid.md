---
title: La API PUT Brand no actualiza la propiedad "LinkID
slug: la-api-put-brand-no-actualiza-la-propiedad-linkid
status: PUBLISHED
createdAt: 2025-10-16T20:51:55.448Z
updatedAt: 2025-10-16T20:51:55.448Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: put-brand-api-does-not-update-linkid-property
locale: es
kiStatus: Backlog
internalReference: 1222015
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, la API disponible para actualizar los datos de la marca, no está recibiendo la información para actualizar correctamente la propiedad "LinkId".

Si se envían datos modificando esta información en el cuerpo de la petición, la respuesta de la API mostrará como si se hubiera actualizado, pero en realidad, no ha cambiado nada.


#### Simulación


1 - Para una marca existente, actualizar sus datos linkId utilizando la API mencionada.

2 - Compruebe el cuerpo de la respuesta, mostrará falsamente que los datos se han actualizado.

3 - Utilice la API GET Marca y Contexto para obtener los datos y no se habrán actualizado https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/brand/-brandId-

## Workaround


La única solución es crear una nueva marca con el linkId ya correcto



