---
title: 'Falta la dirección de facturación en la integración de MELI'
slug: falta-la-direccion-de-facturacion-en-la-integracion-de-meli
status: PUBLISHED
createdAt: 2023-03-15T13:06:28.000Z
updatedAt: 2023-03-15T13:06:28.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-integration-missing-billingaddress
locale: es
kiStatus: Backlog
internalReference: 771418
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, en nuestra integración nativa con Mercado Livre, no estamos incluyendo la dirección de facturación (BillingAddress) facilitada por MELI. Algunos vendedores necesitan esa información en la API «GET Order» de OMS para poder enviar los valores correctos a MELI en el proceso de facturación.

## Simulación

En la API «GET Order» de OMS, actualmente solo se incluye la «shippingAddress» (dirección de envío), y no la «BillingAddress» (dirección de facturación); esto se puede ver en la API «GET Order».

## Workaround

n/a