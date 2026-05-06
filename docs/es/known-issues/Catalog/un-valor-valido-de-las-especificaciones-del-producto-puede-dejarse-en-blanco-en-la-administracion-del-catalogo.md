---
title: 'Un valor válido de las especificaciones del producto puede dejarse en blanco en la administración del catálogo'
slug: un-valor-valido-de-las-especificaciones-del-producto-puede-dejarse-en-blanco-en-la-administracion-del-catalogo
status: PUBLISHED
createdAt: 2024-01-16T00:27:58.000Z
updatedAt: 2024-01-16T00:27:58.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-valid-product-specification-value-can-be-returned-blank-in-the-catalog-admin
locale: es
kiStatus: Backlog
internalReference: 966499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Se espera que el panel de administración de especificaciones de productos muestre siempre los valores correctos para las especificaciones de un producto. Sin embargo, puede que esto no sea siempre así.
El valor de la especificación puede aparecer en blanco en el panel de administración, como si no tuviera ningún valor asociado.
Además del problema de visualización, si el usuario guarda el producto mediante el administrador de productos, el valor de especificación en blanco sobrescribirá el valor original

## Simulación

Abre un formulario de especificaciones de producto y compara el valor que se muestra en el administrador con el valor devuelto por la API.

## Workaround

Gestiona las especificaciones de los productos a través de la API