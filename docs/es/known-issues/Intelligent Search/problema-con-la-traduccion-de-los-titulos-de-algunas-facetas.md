---
title: 'Problema con la traducción de los títulos de algunas facetas'
slug: problema-con-la-traduccion-de-los-titulos-de-algunas-facetas
status: PUBLISHED
createdAt: 2023-03-22T19:26:13.000Z
updatedAt: 2023-10-27T00:50:55.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: issue-on-translating-titles-for-some-facets
locale: es
kiStatus: Fixed
internalReference: 776353
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Hay algunos casos en los que el título de la página es incorrecto en tiendas multilingües, concretamente en páginas como las de categorías, subcategorías y marcas, donde la ruta contiene un valor y, al consultar el título de la página, este tiene un nombre diferente que no coincide con lo esperado.

## Simulación

Comprueba la ruta que se está montando y comprueba también si la tienda es multilingüe; si esto no coincide con la ruta y las traducciones respectivas, se trata de un error.

## Workaround

provisional**
N/A