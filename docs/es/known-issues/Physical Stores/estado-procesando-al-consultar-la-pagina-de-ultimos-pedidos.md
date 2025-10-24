---
title: 'Estado "Procesando" al consultar la página de últimos pedidos'
slug: estado-procesando-al-consultar-la-pagina-de-ultimos-pedidos
status: PUBLISHED
createdAt: 2025-10-16T20:43:31.387Z
updatedAt: 2025-10-16T20:43:31.387Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: processing-status-when-checking-last-orders-page
locale: es
kiStatus: Backlog
internalReference: 1199998
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


A veces, cuando el agente vendedor comprueba el estado del pedido justo después de realizarlo, puede encontrarse el estado "Procesando", aunque la venta se haya realizado inicialmente con éxito en la caja.

Esto sólo es un problema de sincronización en la página de "últimos pedidos". El pedido se realiza correctamente y la transacción se procesa.

## Simulación


1- Realizar un pedido
2- Cierra la página de pedidos realizados y ve rápidamente a la página de últimos pedidos.
3- Comprueba los diferentes estados desde la página de pedidos realizados.

## Workaround


No existe ninguna solución.



