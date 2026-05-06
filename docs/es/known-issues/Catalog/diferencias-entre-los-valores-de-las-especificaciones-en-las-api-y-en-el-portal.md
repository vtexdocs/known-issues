---
title: 'Diferencias entre los valores de las especificaciones en las API y en el portal'
slug: diferencias-entre-los-valores-de-las-especificaciones-en-las-api-y-en-el-portal
status: PUBLISHED
createdAt: 2023-06-29T20:11:34.000Z
updatedAt: 2023-07-06T13:41:03.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: differences-between-specification-value-on-apis-and-portal
locale: es
kiStatus: Backlog
internalReference: 853184
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, estas dos API («api/catalog» y «api/catalog_system», valor de la especificación GET) consultan tablas diferentes en la base de datos del catálogo. Se supone que los valores deben ser los mismos en ambas tablas; sin embargo, en casos en los que haya caracteres especiales, pueden producirse discrepancias.

Esto también se refleja en el portal y en las PDP, ya que la información se genera basándose en la tabla incorrecta. Los caracteres especiales aparecen como «????» en la interfaz de usuario.

## Simulación

1. Disponer de un valor de especificación con caracteres especiales;
2. Comprobar los resultados en las API «api/catalog» y «api/catalog_system»;
3. Comprobar la información de la PDP;
4. Verificar si eran iguales.

## Workaround

provisional**
N/A