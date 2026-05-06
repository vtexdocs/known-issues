---
title: 'La vista previa del envío muestra el código postal de recogida cuando el paquete se divide entre recogida y envío'
slug: la-vista-previa-del-envio-muestra-el-codigo-postal-de-recogida-cuando-el-paquete-se-divide-entre-recogida-y-envio
status: PUBLISHED
createdAt: 2023-11-17T14:18:54.000Z
updatedAt: 2024-06-26T20:36:26.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-shows-pickup-postal-code-for-shipping-when-there-is-package-split-for-pickup-and-shipping
locale: es
kiStatus: Backlog
internalReference: 938124
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la vista previa del envío, al seleccionar la recogida en tienda, pero no todos los artículos están disponibles para esa recogida, la dirección que se muestra para el envío es la de la tienda elegida, y no es posible cambiarla. Sin embargo, en el formulario de pedido, la dirección seleccionada para el envío es la correcta.

## Simulación

- Añade artículos al carrito, de los cuales al menos uno no esté disponible para su recogida;
- Añade un código postal al carrito;
- Cambia a la opción de recogida en tienda;
- El código postal que se muestra para el envío corresponde a la tienda de recogida elegida.

## Workaround

Cambia el código postal en el paso de envío.