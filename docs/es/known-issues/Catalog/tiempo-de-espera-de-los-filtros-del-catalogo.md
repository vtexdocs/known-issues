---
title: 'Tiempo de espera de los filtros del catálogo'
slug: tiempo-de-espera-de-los-filtros-del-catalogo
status: PUBLISHED
createdAt: 2023-10-19T17:11:21.000Z
updatedAt: 2023-10-19T17:11:21.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: es
kiStatus: Backlog
internalReference: 922350
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En el caso de las tiendas con un gran número de referencias (1 millón o más), a menudo, al aplicar los filtros de la interfaz de usuario del catálogo —ya sea en el menú principal o en la sección de informes—, si la consulta del filtro devuelve un número muy elevado de resultados, la interfaz de usuario agota el tiempo de espera (error 504 de tiempo de espera de la pasarela).

## Simulación

No hay una forma fiable de simularlo de manera consistente; solo determinadas consultas de gran tamaño para unas pocas cuentas dan lugar al error.

## Workaround

Solicita una «limpieza de filtros de usuario» al equipo de producto.

Además, si la misma consulta genera a menudo un tiempo de espera agotado (es decir, filtras por un departamento específico y se agota el tiempo de espera), considera aplicar filtros que seleccionen un subconjunto de lo que deseas (en el mismo ejemplo, una categoría dentro del departamento dado).