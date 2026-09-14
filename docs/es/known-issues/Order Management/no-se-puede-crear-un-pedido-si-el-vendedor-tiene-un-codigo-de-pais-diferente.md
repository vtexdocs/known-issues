---
title: 'No se puede crear un pedido si el vendedor tiene un código de país diferente.'
slug: no-se-puede-crear-un-pedido-si-el-vendedor-tiene-un-codigo-de-pais-diferente
status: PUBLISHED
createdAt: 2023-03-03T16:02:05.000Z
updatedAt: 2026-09-14T22:50:19.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-cannot-be-created-when-seller-has-a-different-country-code
locale: es
kiStatus: Backlog
internalReference: 763955
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un marketplace, si un vendedor tiene configurado un código de país diferente, el servicio de logística considerará el código de país del vendedor al procesar el pedido. Esto puede generar un error si el código de país del vendedor define campos obligatorios distintos a los del marketplace.

## Simulación

- Cree un vendedor con un código de país diferente;

- Añada artículos del vendedor a su carrito;

- Finalice la compra; recibirá un mensaje de error y el pedido no se procesará.

## Workaround

Configure el mismo código de país para el vendedor.