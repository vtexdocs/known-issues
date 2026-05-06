---
title: 'Tax Service no aplica las promociones de envío gratuito a los pedidos en los que se combinan varios artículos.'
slug: tax-service-no-aplica-las-promociones-de-envio-gratuito-a-los-pedidos-en-los-que-se-combinan-varios-articulos
status: PUBLISHED
createdAt: 2024-03-06T23:07:42.000Z
updatedAt: 2025-11-08T00:43:26.000Z
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

Al utilizar el servicio fiscal, si hay una promoción que divide los artículos —por ejemplo, una promoción «Más por menos» y una promoción de envío gratuito—, el envío gratuito no se aplica correctamente a todos los artículos de la solicitud del servicio fiscal, lo que provoca un cálculo erróneo e impide que se cree el pedido con el mensaje «No se ha podido crear el pedido solicitado. Inténtalo de nuevo».

## Simulación

- Configure el servicio fiscal;
- Cree una promoción «Más por menos» con el cumplimiento como origen del pedido y limite la promoción a una determinada cantidad de artículos;
- Cree una promoción de envío gratuito con el cumplimiento como origen del pedido;
- Llene el carrito e intente realizar el pedido.

## Workaround

N/A