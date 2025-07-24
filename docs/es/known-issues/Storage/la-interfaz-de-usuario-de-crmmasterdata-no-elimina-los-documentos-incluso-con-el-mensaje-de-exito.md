---
title: 'La interfaz de usuario de CRM/masterdata no elimina los documentos incluso con el mensaje de éxito'
id: 68de6QDUomjPPDXf9P14c3
status: PUBLISHED
createdAt: 2023-03-27T20:03:54.217Z
updatedAt: 2023-03-27T20:10:28.561Z
publishedAt: 2023-03-27T20:10:28.561Z
firstPublishedAt: 2023-03-27T20:03:54.901Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: the-crmmasterdata-ui-is-not-deleting-documents-even-with-the-success-message
locale: es
kiStatus: No Fix
internalReference: 699374
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La interfaz de usuario de CRM no elimina los documentos, aunque se muestra el mensaje de éxito.


##

## Simulación



- Acceda al sistema de aplicación (.vtexcrm.com.br)
- Seleccione una vista, como Clientes, haga clic en ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-interfaz-de-usuario-de-crmmasterdata-no-elimina-los-documentos-incluso-con-el-mensaje-de-exito_1.png)
- A continuación, el sistema mostrará los documentos que pertenecen a los datos de la entidad seleccionada
- Seleccione un documento y haga clic en el botón eliminar ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/la-interfaz-de-usuario-de-crmmasterdata-no-elimina-los-documentos-incluso-con-el-mensaje-de-exito_2.png)
- Después de eso, el sistema le pedirá que confirme la acción
- Después de la confirmación, aparece el mensaje "_Registro excluído com sucesso!_".
- Pero el documento sigue en la lista al hacer clic en el botón OK



## Workaround


Realizando esta acción a través de la API DELETE Document:

- v1: https://developers.vtex.com/docs/api-reference/masterdata-api#delete-/api/dataentities/-acronym-/documents/-id-
- v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#delete-/api/dataentities/-dataEntityName-/documents/-id-





