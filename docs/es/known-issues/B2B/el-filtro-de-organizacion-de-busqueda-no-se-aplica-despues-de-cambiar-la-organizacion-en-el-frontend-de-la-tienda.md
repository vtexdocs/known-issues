---
title: 'El filtro de organización de búsqueda no se aplica después de cambiar la organización en el frontend de la tienda'
slug: el-filtro-de-organizacion-de-busqueda-no-se-aplica-despues-de-cambiar-la-organizacion-en-el-frontend-de-la-tienda
status: PUBLISHED
createdAt: 2025-10-16T20:31:49.146Z
updatedAt: 2025-10-16T20:31:49.146Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: search-organization-filter-not-applying-after-changing-organization-in-store-frontend
locale: es
kiStatus: Backlog
internalReference: 1168794
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Después de cambiar la organización de la tienda, el filtro de búsqueda no se aplicaba correctamente.

Por ejemplo, al buscar un nombre específico, los resultados esperados (como ninguna coincidencia o un conjunto filtrado) no se muestran correctamente. En su lugar, el sistema devuelve un número incorrecto de resultados o falla al filtrar por la organización seleccionada, mostrando datos irrelevantes o sin filtrar.


#### Simulación



1. Inicie sesión en la tienda utilizando credenciales de usuario válidas.
2. Haga clic en Cambiar organización.
3. Vaya a la barra de búsqueda.
4. Introduce un término de búsqueda (por ejemplo, "XYZ" o cualquier otro nombre que sepas que existe).
5. No filtrará el término tecleado

## Workaround


N/A



