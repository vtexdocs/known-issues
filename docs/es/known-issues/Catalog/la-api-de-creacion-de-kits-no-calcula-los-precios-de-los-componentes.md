---
title: 'La API de creación de kits no calcula los precios de los componentes'
slug: la-api-de-creacion-de-kits-no-calcula-los-precios-de-los-componentes
status: PUBLISHED
createdAt: 2023-01-24T19:13:44.000Z
updatedAt: 2024-04-02T18:36:28.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-creation-api-is-not-calculating-component-prices
locale: es
kiStatus: Backlog
internalReference: 739693
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, la carga útil de la API del kit de inserción tiene un formato que solicita los componentes que lo componen, así como sus respectivas cantidades y precios.

El precio esperado de un KIT debería ser la suma ponderada de los precios de sus componentes multiplicada por las cantidades necesarias para componer el kit.

Por ejemplo, si tengo un KIT que es:

Componente (A) --> 10 $, 2 unidades
Componente (B) --> 25 $, 1 unidad

El precio del kit debería ser: 10*2 + 25 === 45.

Esto es lo que ocurre en la interfaz de usuario del kit SkuKit.aspx.

Sin embargo, la API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit no realiza estas actualizaciones de precio para los componentes distintos del primero que se añade.

## Simulación

Cree un kit utilizando la siguiente API con un componente con una cantidad de 2 o más https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit y, a continuación, compruebe su precio en la interfaz de usuario del módulo de precios.

## Workaround

Introduzca el precio final del kit directamente a través de la API de precios.