---
title: 'Conflicto entre especificaciones con el mismo nombre en la Búsqueda inteligente'
slug: conflicto-entre-especificaciones-con-el-mismo-nombre-en-la-busqueda-inteligente
status: PUBLISHED
createdAt: 2023-11-10T00:13:02.000Z
updatedAt: 2024-06-24T13:47:51.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: conflict-between-specifications-with-the-same-name-at-the-intelligent-search
locale: es
kiStatus: Fixed
internalReference: 933958
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La Búsqueda Inteligente agrupa en la misma _«faceta»_ las especificaciones que tienen el mismo nombre, lo que puede suponer un problema si tienen configuraciones diferentes.

Algunos atributos que pueden verse afectados son el filtro, los controles de activación/desactivación de «oculto» e «indexado/buscable», el tipo de campo y la posición del valor. No hay diferencia entre si se trata de una especificación de producto o de SKU.

No es posible saber qué propiedad tendrá prioridad sobre la otra.

## Simulación

Para una tienda con:
- una especificación llamada «foo» (ID 1) configurada como filtro (para que aparezca en la tienda) y con el valor «bar» para un producto;
- otra especificación llamada «foo» (pero con ID 2), que no es un filtro, y con el valor «baz» para el mismo u otro producto.

El escaparate puede mostrar un filtro de búsqueda para la faceta/especificación «foo» con ambos valores «bar» y «baz», o incluso ocultar todo el filtro.

## Workaround

Aunque el módulo Catalog no bloquea los nombres de especificaciones repetidos, este uso debe considerarse incorrecto.