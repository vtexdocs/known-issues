---
title: 'La vista previa del envío se repite cuando un artículo tiene varias opciones de entrega y el precio del flete cambia entre simulaciones.'
slug: la-vista-previa-del-envio-se-repite-cuando-un-articulo-tiene-varias-opciones-de-entrega-y-el-precio-del-flete-cambia-entre-simulaciones
status: PUBLISHED
createdAt: 2026-08-14T22:40:27.000Z
updatedAt: 2026-08-14T22:40:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-loops-when-an-item-has-multiple-delivery-options-and-the-freight-price-changes-between-simulations
locale: es
kiStatus: Backlog
internalReference: 1448353
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La vista previa del envío entra en un bucle infinito de solicitudes inmediatamente después de que se carga el código postal en el formulario de pedido. Dado que Lean Shipping selecciona automáticamente la opción más económica, guarda el nuevo SLA mediante `shippingData`. El total del pedido cambia, se vuelve a enviar `paymentData` para sincronizar el importe y el formulario de pedido resultante activa una nueva

## Simulación

que apunta al SLA más económico.

Como el precio del flete varía para el mismo SLA según el tamaño del paquete, la interfaz de pago nunca selecciona el SLA más económico.

## **Simulación**
El carrito debe contener:

- Más de un artículo
- Varios vendedores, especialmente uno por cada artículo
- Las empresas de transporte de cada vendedor ofrecen precios más bajos para paquetes grandes. (Por ejemplo, la empresa de transporte "rápido" del vendedor X tiene un precio bajo para entregar un paquete de 3 artículos, pero un precio más alto para un paquete de un solo artículo).

## Workaround

N/A