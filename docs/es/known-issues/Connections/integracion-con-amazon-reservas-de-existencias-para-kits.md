---
title: 'Integración con Amazon: reservas de existencias para KITS'
slug: integracion-con-amazon-reservas-de-existencias-para-kits
status: PUBLISHED
createdAt: 2023-05-22T14:28:36.000Z
updatedAt: 2023-09-27T14:37:12.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-integration-stock-reservations-for-kits
locale: es
kiStatus: Fixed
internalReference: 829583
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente tenemos un problema con la reserva de stock en la integración con Amazon. Lo que ocurre es que, antes de crear el pedido, realizamos una reserva de stock, y con los artículos que son kits se produce un error en la reserva; sin embargo, cuando se crea el pedido, el stock se reserva sin ningún problema.

## Simulación

Esto solo se aplica a los KITS en la integración con Amazon y, al realizar la reserva de stock en el menú «Pedidos» del puente, aparece una advertencia:

Error en la reserva del pedido: SLA no disponible

## Workaround

provisional**

Una vez creado el pedido, el stock se reserva correctamente.