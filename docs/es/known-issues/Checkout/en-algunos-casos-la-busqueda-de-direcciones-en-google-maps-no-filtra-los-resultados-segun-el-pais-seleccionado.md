---
title: 'En algunos casos, la búsqueda de direcciones en Google Maps no filtra los resultados según el país seleccionado'
slug: en-algunos-casos-la-busqueda-de-direcciones-en-google-maps-no-filtra-los-resultados-segun-el-pais-seleccionado
status: PUBLISHED
createdAt: 2023-01-04T20:57:51.000Z
updatedAt: 2023-01-04T21:02:40.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: google-maps-address-search-not-filtering-by-the-selected-country-in-some-scenarios
locale: es
kiStatus: Backlog
internalReference: 727408
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las búsquedas de direcciones en Google Maps para países que no cuentan con normas internas específicas no se filtran para mostrar únicamente los resultados de ese país concreto.

## Simulación

Tomando a Panamá como ejemplo de un país que cumple esta condición interna, al estar en el modo de geolocalización y buscar «calle», el componente muestra direcciones de España en lugar de filtrar estrictamente los resultados a direcciones de Panamá.

## Workaround

provisional**
N/A