---
title: 'La creación de un canal de ventas regionalizado con una encuadernación ya utilizada no actualiza el saldo de existencias del artículo.'
slug: la-creacion-de-un-canal-de-ventas-regionalizado-con-una-encuadernacion-ya-utilizada-no-actualiza-el-saldo-de-existencias-del-articulo
status: PUBLISHED
createdAt: 2025-11-14T18:10:23.512Z
updatedAt: 2025-11-14T18:10:23.512Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: creating-a-regionalized-sales-channel-with-an-already-used-binding-does-not-update-the-items-stockbalance
locale: es
kiStatus: Backlog
internalReference: 1005112
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Para las cuentas regionalizadas el sistema de índices filtra por los canales de venta regionalizados el stockbalance que debe aparecer, para no mostrar vinculaciones de ventas que no están regionalizadas.

Si es necesario regionalizar un nuevo canal en una vinculación que ya está en producción, la indexación no se activará. Causando algunas inconsistencias en la disponibilidad de los productos.

## Simulación



1. Crear un canal de ventas regionalizado en una encuadernación de producción;
2. Compruebe si las existencias y la disponibilidad son coherentes con todos los productos.

## Workaround


Forzar un reindexado con stockSimulation. Actualizar stock por ejemplo.



