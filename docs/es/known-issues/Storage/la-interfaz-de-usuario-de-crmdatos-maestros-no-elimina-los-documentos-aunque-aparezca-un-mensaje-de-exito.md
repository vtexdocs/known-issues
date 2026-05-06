---
title: 'La interfaz de usuario de CRM/datos maestros no elimina los documentos, aunque aparezca un mensaje de éxito'
slug: la-interfaz-de-usuario-de-crmdatos-maestros-no-elimina-los-documentos-aunque-aparezca-un-mensaje-de-exito
status: PUBLISHED
createdAt: 2022-11-16T21:51:40.000Z
updatedAt: 2023-03-27T20:10:13.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: the-crmmasterdata-ui-is-not-deleting-documents-even-with-the-success-message
locale: es
kiStatus: No Fix
internalReference: 699374
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de usuario del CRM no elimina los documentos, aunque se muestre el mensaje de éxito.

## Simulación

- Acceda al sistema de la aplicación (.vtexcrm.com.br)
- Seleccione una vista, como Clientes, y haga clic en ![](https://vtexhelp.zendesk.com/attachments/token/l2EMLx8PT4mDFNKGPAtZQVGxt/?name=image.png)
- A continuación, el sistema mostrará los documentos que pertenecen a los datos de la entidad seleccionada
- Selecciona un documento y haz clic en el botón de eliminar ![](https://vtexhelp.zendesk.com/attachments/token/ipkMJC5WWN1LRfeRAkxr7RUCG/?name=image.png)
- A continuación, el sistema le pedirá que confirme la acción
- Tras la confirmación, aparecerá el mensaje «_Registro excluído com sucesso!_»
- Sin embargo, el documento sigue apareciendo en la lista al hacer clic en el botón Aceptar

## Workaround

Realizar esta acción a través de la API DELETE Document:

- v1: https://developers.vtex.com/docs/api-reference/masterdata-api#delete-/api/dataentities/-acronym-/documents/-id-
- v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#delete-/api/dataentities/-dataEntityName-/documents/-id-