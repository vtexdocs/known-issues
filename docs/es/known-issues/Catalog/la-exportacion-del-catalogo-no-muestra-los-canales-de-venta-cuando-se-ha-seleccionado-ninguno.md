---
title: 'La exportación del catálogo no muestra los canales de venta cuando se ha seleccionado «ninguno»'
slug: la-exportacion-del-catalogo-no-muestra-los-canales-de-venta-cuando-se-ha-seleccionado-ninguno
status: PUBLISHED
createdAt: 2022-12-23T13:37:45.000Z
updatedAt: 2022-12-23T13:38:19.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-export-does-not-show-sales-channels-when-none-are-tagged
locale: es
kiStatus: Backlog
internalReference: 722001
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, los canales de venta que se pueden seleccionar en la interfaz de usuario del producto siguen la lógica de «si no se selecciona ninguno, todos están disponibles».

Aunque esta lógica resulta razonable en la interfaz de usuario del catálogo, la hoja de exportación «Productos y SKU» puede resultar engañosa, ya que muestra la columna con los respectivos canales de venta como «vacía».

Una solución mejor sería incluir todos los canales de venta en esta columna o, mejor aún, el texto «todos» si no hay ninguno marcado.

## Simulación

Marca un producto sin canales de venta e intenta exportar el catálogo, comprobando la columna relativa a estos datos.

## Workaround

Ten en cuenta de antemano que las columnas vacías pueden significar que se han seleccionado todos los canales de venta.