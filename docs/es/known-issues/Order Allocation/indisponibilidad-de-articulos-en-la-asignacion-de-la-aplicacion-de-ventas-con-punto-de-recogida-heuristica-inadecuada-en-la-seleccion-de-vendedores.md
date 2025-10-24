---
title: 'Indisponibilidad de artículos en la asignación de la aplicación de ventas con punto de recogida (heurística inadecuada en la selección de vendedores)'
slug: indisponibilidad-de-articulos-en-la-asignacion-de-la-aplicacion-de-ventas-con-punto-de-recogida-heuristica-inadecuada-en-la-seleccion-de-vendedores
status: PUBLISHED
createdAt: 2025-10-16T20:58:15.147Z
updatedAt: 2025-10-16T20:58:15.147Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: item-unavailability-in-sales-app-allocation-with-pickup-point-inadequate-heuristic-in-selecting-sellers
locale: es
kiStatus: Backlog
internalReference: 1234534
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando se realiza un pedido a través de la Aplicación de Ventas, el sistema introduce la información `"checkedIn:true"` y registra/asocia el pedido con un punto de recogida, esto se realiza mediante la variable "`checkedInPickupPointId"`, a partir de este punto la etapa de asignación puede fallar para uno o varios artículos contenidos en el pedido, devolviendo `"unavailableItemFulfillment`" para el mismo.

Esto se debe a que la heurística de selección de vendedor utiliza inicialmente la dirección del punto de recogida para las estimaciones, pero en la siguiente etapa, durante el cumplimiento, puede utilizar la dirección del cliente dependiendo de la devolución en la solicitud, y como consecuencia el sistema no puede garantizar que todos los artículos puedan ser cumplidos por el vendedor o vendedores seleccionados en la primera etapa, lo que lleva a un fallo en la asignación de parte de los artículos - incluso cuando podrían ser cumplidos por otro vendedor adecuado, pero que no fue incluido en la etapa inicial de la heurística.

Tenga en cuenta que el error sólo se manifiesta en los flujos procedentes de la aplicación de ventas con registro en el punto de recogida.


#### Simulación


Este escenario puede no ser replicable debido a sus características, pero en algunos casos es posible seguir los siguientes pasos para replicarlo:

1-Montar un carrito a través de la App de Ventas , esto hará que el OrderForm tenga `"isCheckedIn: true"` y "`checkedInPickupPointId`" configurado.

2- Añade dos o más productos al carrito, asegurándote de que sólo una parte de ellos está disponible en el stock del punto de recogida elegido.

3-Vigila que al menos uno de los artículos devuelva un mensaje `"unavailableItemFulfillment`" al simular o cerrar el pedido.

## Workaround


Como workaround o solución definitiva, se recomienda evaluar la activación de "Delivery Promise (DP)" en la heurística para la cuenta afectada.



