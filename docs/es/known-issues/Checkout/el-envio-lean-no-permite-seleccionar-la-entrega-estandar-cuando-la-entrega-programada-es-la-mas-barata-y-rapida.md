---
title: 'El envío «Lean» no permite seleccionar la entrega estándar cuando la entrega programada es la más barata y rápida'
slug: el-envio-lean-no-permite-seleccionar-la-entrega-estandar-cuando-la-entrega-programada-es-la-mas-barata-y-rapida
status: PUBLISHED
createdAt: 2023-06-12T12:40:04.000Z
updatedAt: 2023-06-12T12:40:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-doesnt-allow-selecting-regular-delivery-when-scheduled-delivery-is-the-cheapest-and-fastest
locale: es
kiStatus: Backlog
internalReference: 842018
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los carritos en los que hay una entrega programada y una entrega normal, y la opción «Envío optimizado» está activada; si la opción más barata y rápida es la entrega programada, la interfaz de usuario mostrará el botón de selección como de costumbre, pero al desmarcarlo no ocurrirá nada y la entrega programada seguirá seleccionada.

## Simulación

- Registra una entrega programada y una entrega normal;
- Asegúrate de que la entrega programada sea la más barata y rápida de las dos;
- Activa Lean Shipping;
- En el paso de envío, selecciona la entrega programada y deselecciónala; no cambiará nada.

## Workaround

Desactiva Lean Shipping.