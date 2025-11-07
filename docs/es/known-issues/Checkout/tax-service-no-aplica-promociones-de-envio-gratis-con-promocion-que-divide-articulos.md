---
title: 'Tax Service no aplica promociones de envío gratis con promoción que divide artículos'
slug: tax-service-no-aplica-promociones-de-envio-gratis-con-promocion-que-divide-articulos
status: PUBLISHED
createdAt: 2025-11-07T21:44:07.252Z
updatedAt: 2025-11-07T21:44:07.252Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-doesnt-apply-free-shipping-promotions-with-promotion-that-splits-items
locale: es
kiStatus: Backlog
internalReference: 995527
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al utilizar el servicio de impuestos, si hay una promoción que divide artículos, por ejemplo, una promoción Más por Menos y una promoción de envío gratuito, el envío gratuito no se aplica correctamente para todos los artículos en la solicitud del servicio de impuestos, lo que provoca un cálculo incorrecto y evita que el pedido se cree con el mensaje "No se ha podido crear el pedido solicitado. Por favor, inténtelo de nuevo".


#### Simulación



- Configure el Servicio de Impuestos;
- Cree una promoción Más por menos con cumplimiento como origen del pedido y limite la promoción a una determinada cantidad de artículos;
- Cree una promoción de envío gratuito con cumplimiento como origen del pedido;
- Montar un carrito e intentar realizar el pedido.

## Workaround


N/A


