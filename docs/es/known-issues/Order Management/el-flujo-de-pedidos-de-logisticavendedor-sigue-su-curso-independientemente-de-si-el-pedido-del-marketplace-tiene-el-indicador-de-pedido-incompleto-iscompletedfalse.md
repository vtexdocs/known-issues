---
title: 'El flujo de pedidos de logística/vendedor sigue su curso independientemente de si el pedido del Marketplace tiene el indicador de pedido incompleto (isCompleted=false)'
slug: el-flujo-de-pedidos-de-logisticavendedor-sigue-su-curso-independientemente-de-si-el-pedido-del-marketplace-tiene-el-indicador-de-pedido-incompleto-iscompletedfalse
status: PUBLISHED
createdAt: 2021-03-17T15:32:08.000Z
updatedAt: 2024-11-21T19:56:07.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-fulfillmentseller-order-flow-progresses-regardless-of-whether-it-has-the-incomplete-order-flag-iscompletedfalse-in-the-marketplace-order
locale: es
kiStatus: Backlog
internalReference: 345526
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los procesos de gestión de pedidos de VTEX, siempre tendremos dos pedidos y, en cierto modo, flujos de trabajo independientes: el pedido del **Marketplace** y el de **Fulfillment**.

En este caso, el problema surge cuando, por alguna razón, el pedido del **Marketplace** se marca como incompleto (`"isCompleted": false`), sin embargo, el pedido de **Fulfillment** se crea correctamente y permanece en el estado «**A la espera de autorización de cumplimiento**», y Fulfillment solo sale de este estado en dos situaciones: una es automática, que es la correcta, cuando el Marketplace recibe la notificación de pago y el propio Marketplace notifica el cumplimiento, lo que permite continuar el flujo; o bien, la propia cuenta puede hacerlo de forma deliberada, y es posible que no reciba el pago por el pedido que se va a entregar. Mientras que el comportamiento esperado es cancelar ambos pedidos.

Las acciones dentro del **pedido de Fulfillment**, como «Iniciar gestión» o enviar la notificación de factura sin consultar primero el estado del **pedido del Marketplace** (si está completo o no), pueden dar lugar a que el **flujo de trabajo de Fulfillment** continúe independientemente de que el pedido del **Marketplace** esté incompleto.

El principal problema es realizar el cumplimiento del pedido sin un pedido de Marketplace (principal) completo y, sin duda, sin un proceso de pago correcto.

## Simulación

No es un escenario que se pueda replicar; sin embargo, es posible validar la propiedad en el JSON del **pedido de Marketplace** `"isCompleted:"` si actualmente tiene el valor `false`, y el **pedido de cumplimiento (vendedor)** `"isCompleted:"` con el valor `true` y su flujo de trabajo permitiendo avanzar con el pedido.

Ejemplo de la propiedad `"isCompleted": false` del **pedido de Marketplace**:
 ![](https://vtexhelp.zendesk.com/attachments/token/61ctwev8pXI4WHheLVtfnD0Sq/?name=inline1159444440.png)

## Workaround

La idea es poder evitar que el flujo del pedido avance si el pedido de Marketplace está incompleto. La idea es bloquear cualquier acción para continuar con el pedido de Fulfillment y garantizar que se cancele, junto con el pago, si ambos están activos o no se han cancelado ya.

Por otro lado, la idea es que el cliente evite realizar cualquier acción sobre el pedido si el pedido de Marketplace se ha marcado como incompleto.%0A