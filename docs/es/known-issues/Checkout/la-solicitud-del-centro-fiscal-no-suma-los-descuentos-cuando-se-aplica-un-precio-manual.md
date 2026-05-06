---
title: 'La solicitud del centro fiscal no suma los descuentos cuando se aplica un precio manual'
slug: la-solicitud-del-centro-fiscal-no-suma-los-descuentos-cuando-se-aplica-un-precio-manual
status: PUBLISHED
createdAt: 2023-11-08T18:07:07.000Z
updatedAt: 2023-11-08T18:07:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-hub-request-doesnt-sum-discounts-when-manual-price-is-applied
locale: es
kiStatus: Backlog
internalReference: 932667
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se aplica un precio manual a un artículo para reducir su precio, la solicitud del centro de impuestos no lo incluye en el cálculo y muestra los totales de descuento siempre como 0.

## Simulación

- Establece un precio manual inferior al precio actual de un artículo;
- La solicitud del centro de impuestos no incluirá el descuento en los totales.

## Workaround

N/A