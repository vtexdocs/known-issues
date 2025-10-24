---
title: 'La propiedad DefaultValue no se actualiza en la API de especificación'
slug: la-propiedad-defaultvalue-no-se-actualiza-en-la-api-de-especificacion
status: PUBLISHED
createdAt: 2025-09-08T21:44:32.401Z
updatedAt: 2025-09-08T21:44:32.401Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: defaultvalue-property-doesnt-update-on-specification-api
locale: es
kiStatus: Backlog
internalReference: 1226096
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, la API para actualizar especificaciones https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/specification/-specificationId-, en sus datos documentados, presenta el campo DefaultValue como una posible propiedad que puede ser actualizada.

Sin embargo, la modificación de este campo una vez creada la especificación no produce ningún resultado.


#### Simulación


1 - Obtener datos, utilizando el verbo GET en la misma ruta, para una especificación que tenga un DefaultValue registrado en ella https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/-specificationId- O crear una especificación con uno.

2 - Utilizando el cuerpo de la respuesta como carga útil, intenta cambiar el campo DefaultValue

3 - El cuerpo de la respuesta no mostrará cambios, a pesar de que el cuerpo de la petición informado es diferente.

## Workaround


Cambie manualmente estos valores a través de la interfaz de administración.