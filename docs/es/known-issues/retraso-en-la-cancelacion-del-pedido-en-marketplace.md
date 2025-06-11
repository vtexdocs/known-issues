---
title: Retraso en la cancelación del pedido en Marketplace
slug: retraso-en-la-cancelacion-del-pedido-en-marketplace
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delay-in-canceling-the-order-in-marketplace
locale: es
kiStatus: Backlog
internalReference: 1242813
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Este KI describe el escenario en el que el Marketplace o Fulfillment solicita la cancelación de un pedido, esta cancelación es aceptada en fulfillment, sin embargo, tarda unos minutos en completarse en el Marketplace.
Esto ocurre porque, en el flujo de cancelación, hay múltiples escrituras del pedido en S3 (base de datos), cambiando el estado de "cancelado" a "cancelado" y otra información de cancelación.
De la forma en que está implementado el flujo de cancelación hoy en día, de forma asíncrona sin bloqueo, se pueden producir este tipo de comportamientos, e incluso puede haber inconsistencias en las interacciones del flujo de trabajo, donde puede pasar a "cancelado", pero luego volver a "cancelado" debido a la falta de bloqueo en las operaciones. En este caso, esto puede afectar al feed/hook, ya que habrá dos notificaciones del estado cancelado.

Este escenario no es un gran problema, porque hay reintentos en el flujo de trabajo que garantizan una cierta coherencia, sin embargo, puede tomar un tiempo, cerca de 15 minutos.


#### Simulación


No es posible simular esta situación, ya que no siempre se produce.

## Workaround


No disponemos de una solución para este caso, por lo que es necesario reintentar el flujo de trabajo para corregir el estado.



