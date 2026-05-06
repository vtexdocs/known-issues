---
title: 'La API de la región devuelve una lista de vendedores debido a la caché'
slug: la-api-de-la-region-devuelve-una-lista-de-vendedores-debido-a-la-cache
status: PUBLISHED
createdAt: 2024-01-22T17:34:00.000Z
updatedAt: 2024-01-22T17:48:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: region-api-returns-seller-list-due-to-cache
locale: es
kiStatus: Backlog
internalReference: 969692
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se utiliza una estructura de subcuentas por región, si se utiliza la API «Obtener vendedores por región o dirección» en ambas cuentas para el mismo canal de ventas, y una de ellas no está disponible para ese canal de ventas, se devolverá una lista de vendedores debido a la caché.

## Simulación

- Crea una nueva tienda;
- Configura un canal de ventas diferente para la tienda;
- Utiliza la API «Obtener vendedores por región o dirección» en la tienda;
- Vuelve a utilizar la API para el mismo canal de ventas en la otra tienda.

## Workaround

N/A