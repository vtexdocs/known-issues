---
title: "Cuando settleId se envía como null y el código como 'refund-manually' nuestra pasarela realiza un doble reembolso."
id: 2PdRRjHDODY2Tk0VItO4Fo
status: PUBLISHED
createdAt: 2022-07-11T17:37:43.961Z
updatedAt: 2024-02-16T20:28:17.704Z
publishedAt: 2024-02-16T20:28:17.704Z
firstPublishedAt: 2022-07-11T17:37:44.954Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: when-settleid-is-sent-as-null-and-code-as-refundmanually-our-gateway-performs-a-double-refund
locale: es
kiStatus: No Fix
internalReference: 615050
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La documentación de la APP indica que cuando el proceso de reembolso no ha funcionado, el proveedor debe responder con un `null` a este campo, y también cuando el reembolso debe realizarse manualmente, el campo de código debe tener el valor "refund-manually".

El problema es que cada uno de ellos desencadena un reembolso, haciendo que se duplique.



## Simulación


Enviar code="refund-manually" y settled=null en la respuesta de liquidación con PPP.



## Workaround


No envíe "reembolso-manual" en el campo de código, sino que envíe simplemente lo establecido como nulo.

