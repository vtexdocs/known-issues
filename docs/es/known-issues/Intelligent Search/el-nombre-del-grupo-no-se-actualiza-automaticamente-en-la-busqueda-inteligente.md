---
title: 'El nombre del grupo no se actualiza automáticamente en la Búsqueda Inteligente'
id: 1GKDLtbKdYA0hq9YUhF2Bt
status: PUBLISHED
createdAt: 2023-05-08T19:00:44.637Z
updatedAt: 2023-05-08T19:00:45.207Z
publishedAt: 2023-05-08T19:00:45.207Z
firstPublishedAt: 2023-05-08T19:00:45.207Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: es
kiStatus: Backlog
internalReference: 821481
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, existen 2 módulos de recogida distintos:

1) El nuevo módulo de cobros
2) El módulo CMS heredado

Esta diferencia se detalla aquí: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

El módulo heredado tiene dos grupos de datos distintos, la colección (A) y el nombre del grupo (B)

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Intelligent%20Search/el-nombre-del-grupo-no-se-actualiza-automaticamente-en-la-busqueda-inteligente_1.png)

Sin embargo, el nuevo módulo de colecciones sólo desplaza el nombre de la colección, no su nombre de grupo:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Intelligent%20Search/el-nombre-del-grupo-no-se-actualiza-automaticamente-en-la-busqueda-inteligente_2.png)

Los resultados de la búsqueda inteligente se basan en el nombre del grupo, por lo que, en los casos en que las actualizaciones se realizan únicamente en la nueva interfaz de usuario, los resultados no se reflejan en la interfaz de usuario ni en las consultas de búsqueda.




##

## Simulación


1 - crear una colección utilizando cualquiera de las dos UI
2 - actualizar la colección sólo en la nueva aplicación, sin hacer cambios en el legado.
3 - comprobar los resultados de la búsqueda y ver que no se actualizará.





## Workaround


Actualice manualmente el GroupName en la interfaz de usuario heredada y haga clic en "Guardar grupo" para volver a indexar la colección.





