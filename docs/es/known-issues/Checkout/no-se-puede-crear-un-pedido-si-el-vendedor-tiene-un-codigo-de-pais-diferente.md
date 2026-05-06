---
title: 'No se puede crear un pedido si el vendedor tiene un código de país diferente'
slug: no-se-puede-crear-un-pedido-si-el-vendedor-tiene-un-codigo-de-pais-diferente
status: PUBLISHED
createdAt: 2023-03-03T13:02:05.000Z
updatedAt: 2023-03-03T14:09:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: order-cannot-be-created-when-seller-has-a-different-country-code
locale: es
kiStatus: Backlog
internalReference: 763955
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un marketplace, cuando hay un vendedor configurado con un código de país diferente, el servicio de gestión de pedidos tendrá en cuenta el código de país del vendedor al realizar el pedido. Puede generarse un error si el código de país del vendedor define campos obligatorios distintos a los del marketplace.

## Simulación

- Disponer de un vendedor con un código de país diferente;
- Crear un carrito con artículos de ese vendedor;
- Finalizar la compra; aparecerá un mensaje de error y el pedido no se realizará.

## Workaround

Configurar el mismo código de país en el vendedor.