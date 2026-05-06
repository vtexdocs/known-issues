---
title: 'El campo «MetaTagDescription» no se puede eliminar a través del panel de administración'
slug: el-campo-metatagdescription-no-se-puede-eliminar-a-traves-del-panel-de-administracion
status: PUBLISHED
createdAt: 2024-02-08T20:20:42.000Z
updatedAt: 2024-02-08T20:20:42.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: metatagdescription-field-cannot-be-deleted-through-admin
locale: es
kiStatus: Backlog
internalReference: 979691
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se ha detectado un comportamiento inconsistente en el campo `MetaTagDescription` del registro de productos: no se puede eliminar a través del panel de administración, pero sí a través de la API. En el panel de administración, al hacer clic en «Guardar» con este campo vacío, se copia el valor del campo `Description`. Esto no ocurre al utilizar la API, donde el valor se elimina correctamente.

## Simulación

- Haz clic en el producto para editarlo
- Elimina el valor del campo `MetaTagDescription`
- Haz clic en «Guardar» y vuelve al producto
- Comprueba que el valor original ya no está, pero que el valor del campo `description` se ha duplicado

## Workaround

Utiliza la API para eliminar el valor no deseado después de actualizar el producto en el panel de administración
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/product/-productId-?endpoint=put-/api/catalog/pvt/product/-productId-