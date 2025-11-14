---
title: 'No es posible crear una ruta utilizando el tipo de contenido a través de UI'
slug: no-es-posible-crear-una-ruta-utilizando-el-tipo-de-contenido-a-traves-de-ui
status: PUBLISHED
createdAt: 2025-11-14T17:13:12.776Z
updatedAt: 2025-11-14T17:13:12.776Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: it-is-not-possible-to-create-a-path-using-content-type-via-ui
locale: es
kiStatus: Backlog
internalReference: 923619
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Si intentamos crear una ruta usando tipos de contenido a través de la UI la página no funcionará. Sólo funciona si la creamos a través del tema.


#### Simulación



- Crea una ruta utilizando un tipo de contenido en el módulo Pages, por ejemplo, `storeTest/:test_id`.
- Guárdala
- Intenta acceder a ella desde el front
- No funcionará

## Workaround


Si añadimos la ruta usando el tipo de contenido a través del tema, la página aparecerá en la UI y funcionará



