---
title: 'Las etiquetas canónicas no se aplican a partir del tercer nivel de categoría'
slug: las-etiquetas-canonicas-no-se-aplican-a-partir-del-tercer-nivel-de-categoria
status: PUBLISHED
createdAt: 2023-11-08T13:31:07.000Z
updatedAt: 2024-10-10T14:50:23.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: canonical-tags-are-not-applied-after-3rd-category-level
locale: es
kiStatus: Backlog
internalReference: 932349
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las etiquetas canónicas no se aplican a partir del tercer nivel de categoría cuando se tiene un árbol de categorías con más de tres niveles (departamento, categoría y subcategoría); los niveles superiores no se muestran en la etiqueta canónica. La única excepción se da cuando las rutas se almacenan en el reescritor.

## Simulación

1. Crea cualquier subcategoría de cuarto nivel
2. Acceda a la página creada
3. Compruebe la canonical en la consola; no mostrará nada más allá del tercer nivel. Solo el tercero y los inferiores.

## Workaround

Ejecute la consulta de bootstrap en el rewriter vtex.routes-bootstrap@0.x:


 {bootstrap{categories}}