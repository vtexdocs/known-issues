---
title: Incomplete billingAddress despite isBillingAddressDifferent: false
slug: incomplete-billingaddress-despite-isbillingaddressdifferent-false
status: PUBLISHED
createdAt: 2025-10-16T19:27:01.562Z
updatedAt: 2025-10-16T19:27:01.562Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: escalation-incomplete-billingaddress-despite-isbillingaddressdifferent-false
locale: es
kiStatus: Backlog
internalReference: 1252301
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El campo `billingAddress` está incompleto, faltan campos como `street`, `number`, `neighborhood` y `postalCode`. En algunos casos poco claros, incluso cuando el campo `isBillingAddressDifferent` está a `false` (indicando que la `billingAddress` debe ser la misma que la `shippingAddress`), la `billingAddress` acaba siendo diferente, y a menudo una versión incompleta de la `shippingAddress`.


#### Simulación


Este problema no se puede reproducir de forma fiable.


## Workaround


No se conoce ninguna solución.



