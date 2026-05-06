---
title: 'La interfaz de usuario muestra puntos de recogida duplicados cuando un artículo para entregar se encuentra entre artículos para recoger'
slug: la-interfaz-de-usuario-muestra-puntos-de-recogida-duplicados-cuando-un-articulo-para-entregar-se-encuentra-entre-articulos-para-recoger
status: PUBLISHED
createdAt: 2023-09-25T13:50:14.000Z
updatedAt: 2023-10-18T14:35:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-shows-duplicated-pickup-points-when-an-item-for-delivery-is-between-items-for-pickup
locale: es
kiStatus: Backlog
internalReference: 906549
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En un carrito con al menos tres productos, en el que el orden de los artículos es: el primero para recoger, el segundo para entrega a domicilio y el tercero para recoger, la interfaz de usuario mostrará el punto de recogida duplicado. Esto ocurre porque la API agrupa el primer y el tercer artículo, ya que comparten el mismo SLA.

Es posible pasar al paso de pago y finalizar la compra.

## Simulación

- Añadir un artículo al carrito para recoger;
- Añadir un artículo al carrito para entrega a domicilio;
- Añadir otro artículo al carrito para recoger;
- En el paso de envío, la recogida aparecerá duplicada

## Workaround

provisional**
N/A