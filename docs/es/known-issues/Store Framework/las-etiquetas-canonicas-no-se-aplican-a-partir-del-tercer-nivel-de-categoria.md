---
title: 'Las etiquetas canónicas no se aplican a partir del tercer nivel de categoría.'
id: 6HU8WLT5yVRBqeBmGgYRsi
status: PUBLISHED
createdAt: 2023-11-08T13:31:23.182Z
updatedAt: 2024-10-10T14:50:38.058Z
publishedAt: 2024-10-10T14:50:38.058Z
firstPublishedAt: 2023-11-08T13:31:24.275Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-tags-are-not-applied-after-3rd-category-level
locale: es
kiStatus: Backlog
internalReference: 932349
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las etiquetas canónicas no se aplican después del 3er nivel de categoría cuando se tiene un árbol de categorías con más de 3 niveles (departamento, categoría y subcategoría), los otros niveles por encima no se muestran en canónica. La única excepción es cuando las rutas se almacenan en rewriter.


##

## Simulación



1. Crear cualquier subcategoría de 4º nivel
2. Acceder a la página creada
3. Compruebe el Canonical de la misma en la consola, no mostrará nada después del 3er nivel. Sólo el 3º y siguientes.



## Workaround


Ejecute la consulta bootstrap en la regrabadora vtex.routes-bootstrap@0.x:


    {bootstrap{categories}}

