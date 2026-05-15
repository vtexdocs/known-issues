---
title: 'El componente «Marcador de mapa» del formulario de direcciones no actualiza la dirección completa'
slug: el-componente-marcador-de-mapa-del-formulario-de-direcciones-no-actualiza-la-direccion-completa
status: PUBLISHED
createdAt: 2026-05-15T19:44:34.000Z
updatedAt: 2026-05-15T19:44:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-forms-map-marker-component-does-not-update-the-complete-address
locale: es
kiStatus: Backlog
internalReference: 1407777
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar editar una dirección en «Mi cuenta» mediante el componente de marcador de mapa de `vtex.address-form`, solo se actualizan el código postal y las coordenadas geográficas.

## Simulación

- En una tienda que utilice la geolocalización y el tema nativo de VTEX, ve a la página «Mi cuenta»
- Ve a la página «Direcciones», que utiliza componentes `vtex.address-form`
- Intenta editar una dirección registrada previamente utilizando el componente de marcador de mapa


Al mover el componente, solo se modificarán las variables del código postal y la geolocalización de la dirección, a pesar de que la API de Google devuelve más campos.

## Workaround

Edita los demás campos de la dirección manualmente.