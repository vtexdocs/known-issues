---
title: 'Checkout permite añadir cantidades de SKU por encima del stock disponible cuando la simulación de vendedor externo devuelve 0 como cantidad'
slug: checkout-permite-anadir-cantidades-de-sku-por-encima-del-stock-disponible-cuando-la-simulacion-de-vendedor-externo-devuelve-0-como-cantidad
status: PUBLISHED
createdAt: 2025-10-31T18:42:25.512Z
updatedAt: 2025-10-31T18:42:25.512Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-adding-sku-quantities-above-available-stock-when-external-seller-simulation-returns-0-as-quantity
locale: es
kiStatus: Backlog
internalReference: 1316990
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un vendedor externo devuelve la cantidad 0 en la carga útil de la simulación, el sistema de pago procede como si cualquier cantidad solicitada estuviera disponible. El síntoma visible es que los carros y las simulaciones aceptan cantidades superiores a las existencias reales de la SKU (por ejemplo, añadiendo 20 o 30 unidades cuando sólo hay 4 disponibles).

Esto afecta a los escenarios de mercado con vendedores externos cuyo punto final de simulación responde con 0 en lugar de la cantidad solicitada o la cantidad con límite de existencias.

Sin embargo, si el saldo de existencias y la cantidad se envían como 0, nuestra API devuelve "sin existencias".

## Simulación



- Requisitos previos: Una cuenta integrada con un vendedor externo cuyo punto final de simulación devuelva sistemáticamente 0 para el campo de cantidad, independientemente de la cantidad o las existencias solicitadas.
- Llame a la API de simulación de pago con un artículo del vendedor externo, solicitando una cantidad superior a las existencias reales del vendedor. Observe que la simulación acepta la cantidad solicitada en lugar de limitarla al nivel de existencias.


## Workaround


Pida al vendedor externo que ajuste su respuesta de simulación. El vendedor debe devolver la cantidad exacta solicitada sólo cuando sea igual o inferior al stock actual del producto.



