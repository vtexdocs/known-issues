---
title: 'La interfaz de usuario muestra un precio de envío incorrecto cuando los paquetes se dividen para su entrega programada'
slug: la-interfaz-de-usuario-muestra-un-precio-de-envio-incorrecto-cuando-los-paquetes-se-dividen-para-su-entrega-programada
status: PUBLISHED
createdAt: 2023-03-20T14:59:34.000Z
updatedAt: 2023-03-20T14:59:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-wrongly-displaying-the-shipping-price-when-packages-are-split-for-scheduled-delivery
locale: es
kiStatus: Backlog
internalReference: 774155
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se divide un paquete para una entrega programada, es posible que el precio de uno de los paquetes sea incorrecto en la interfaz de usuario, pero los precios serán correctos en la API.

## Simulación

- Añade 2 artículos con entrega programada y de diferentes transportistas;
- Selecciona las franjas horarias de entrega para ambos paquetes;
- Verás que la suma que se muestra en la interfaz de usuario no coincide con el totalizador de gastos de envío.

## Workaround

provisional**
N/A