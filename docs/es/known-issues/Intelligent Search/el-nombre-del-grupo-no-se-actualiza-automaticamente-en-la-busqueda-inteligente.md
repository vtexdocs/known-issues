---
title: 'El nombre del grupo no se actualiza automáticamente en la búsqueda inteligente'
slug: el-nombre-del-grupo-no-se-actualiza-automaticamente-en-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2023-05-08T22:00:29.000Z
updatedAt: 2025-09-24T21:19:43.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: group-name-is-not-automatically-updated-on-intelligent-search
locale: es
kiStatus: Fixed
internalReference: 821481
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, existen dos módulos de colecciones distintos:

1) El nuevo módulo de colecciones
2) El módulo heredado del CMS

Esta diferencia se detalla aquí: https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3moFonW33dgOYDrU21Z1X0

El módulo heredado tiene dos grupos de datos distintos: la colección (A) y el nombre del grupo (B)

 ![](https://vtexhelp.zendesk.com/attachments/token/Wb85umTatjLPwTTdZ53985WHt/?name=image.png)

Sin embargo, el nuevo módulo de colecciones solo muestra el nombre de la colección, no su nombre de grupo:

 ![](https://vtexhelp.zendesk.com/attachments/token/dXcYFigMd8BCKPCaF5wlvcUhZ/?name=image.png)

Los resultados de la búsqueda inteligente se basan en el nombre del grupo, por lo que, en los casos en que las actualizaciones se realizan únicamente en la nueva interfaz de usuario, los resultados no se reflejan en la interfaz ni en las consultas de búsqueda.

## Simulación

1 - Crea una colección utilizando cualquiera de las interfaces de usuario.
2 - Actualiza la colección solo en la nueva aplicación, sin realizar cambios en la antigua.
3 - Comprueba los resultados de la búsqueda y verás que no se han actualizado.

## Workaround

Actualiza manualmente el nombre del grupo en la interfaz de usuario antigua y haz clic en «Guardar grupo» para reindexar la colección.