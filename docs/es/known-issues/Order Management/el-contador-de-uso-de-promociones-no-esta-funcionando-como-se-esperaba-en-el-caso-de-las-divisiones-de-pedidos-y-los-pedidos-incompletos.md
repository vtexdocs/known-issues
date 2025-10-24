---
title: 'El contador de uso de promociones no está funcionando como se esperaba en el caso de las divisiones de pedidos y los pedidos incompletos.'
slug: el-contador-de-uso-de-promociones-no-esta-funcionando-como-se-esperaba-en-el-caso-de-las-divisiones-de-pedidos-y-los-pedidos-incompletos
status: PUBLISHED
createdAt: 2025-09-10T13:46:43.208Z
updatedAt: 2025-09-10T13:46:43.208Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-promotion-usage-counter-is-not-working-as-expected-involving-order-splits-and-incomplete-orders
locale: es
kiStatus: Backlog
internalReference: 1289805
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Hemos identificado que el contador de uso de promociones no está funcionando como se esperaba, lo que provoca una pérdida de control sobre el número de veces que se aplica una promoción.
El problema surge porque actualmente el sistema de caja es el responsable de notificar el uso de las promociones, mientras que el sistema de gestión de pedidos (OMS) es el responsable de notificar las cancelaciones.
Esto debería reducir el recuento de utilizaciones. Sin embargo, estos sistemas envían notificaciones diferentes para pedidos incompletos, ya que no se notifica la cancelación del pedido, o cuando se divide un pedido. En este caso, el sistema de caja notifica cada pedido dividido, lo que provoca un mal funcionamiento del contador y la creación de más pedidos con la promoción aplicada de los previstos. Si uno de estos pedidos divididos se cancela, el OMS envía sólo una notificación de cancelación, provocando una discrepancia en el contador.


#### Simulación


Cree una promoción con un límite de uso específico.
Aplique la promoción a varios pedidos a través del sistema de caja.

Cancele algunos de estos pedidos a través de OMS.
Tenga en cuenta que el contador de uso de la promoción puede permitir la creación de más pedidos de lo esperado.

Actualmente, no siempre es posible reproducir este problema de forma consistente, ya que aún no se ha determinado la causa raíz exacta.

## Workaround


Por el momento no disponemos de una solución para esta situación.



