---
title: 'Tarjeta regalo: no devuelve los campos «caption» y «relationName» cuando realizamos una solicitud GET.'
slug: tarjeta-regalo-no-devuelve-los-campos-caption-y-relationname-cuando-realizamos-una-solicitud-get
status: PUBLISHED
createdAt: 2021-09-10T18:55:39.000Z
updatedAt: 2023-06-23T19:33:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-it-does-not-return-fields-caption-and-relationname-when-we-make-a-get-request
locale: es
kiStatus: Backlog
internalReference: 428725
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se ejecuta el método GET para una tarjeta regalo existente, no devuelve los campos «caption» ni «relationName», aunque estos parámetros tengan valor.

## Simulación

Realice una solicitud GET en la API:  https://developers.vtex.com/vtex-rest-api/reference/gift-card#getgiftcardbyid

## Workaround

N/A