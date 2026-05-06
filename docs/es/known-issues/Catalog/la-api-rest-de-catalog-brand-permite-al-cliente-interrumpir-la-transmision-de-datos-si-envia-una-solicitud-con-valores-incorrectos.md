---
title: 'La API REST de Catalog Brand permite al cliente interrumpir la transmisión de datos si envía una solicitud con valores incorrectos'
slug: la-api-rest-de-catalog-brand-permite-al-cliente-interrumpir-la-transmision-de-datos-si-envia-una-solicitud-con-valores-incorrectos
status: PUBLISHED
createdAt: 2020-07-29T15:32:38.000Z
updatedAt: 2023-05-11T18:00:29.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-brand-api-rest-allows-the-client-to-break-the-information-if-sending-request-with-wrong-values
locale: es
kiStatus: Fixed
internalReference: 269109
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hay muchas rutas que admiten un determinado tipo de valor, pero si el cliente utiliza otro tipo de valor (por ejemplo, introduce un valor nulo en lugar de un valor booleano), puede provocar un fallo en la interfaz de producto/SKU/categoría/marca. Esto impide que el cliente actualice la información a través del panel de administración.

## Simulación

Para las rutas `api/catalog/pvt/brand?an=` o `/api/catalog/pvt/brand/?an=`, la documentación indica que el campo `MenuHome` solo acepta valores booleanos. Sin embargo, si enviamos una solicitud con «null», por ejemplo, la ruta devolverá un 200 y podremos insertar este valor. Después de esto, si intentamos editar la marca en la interfaz de administración, no podremos hacerlo. Se mostrará un error «Something Went Wrong» con el mensaje `exception_message="Object cannot be cast from DBNull to other types."`

## Workaround

Actualiza la información de nuevo a través de la API.