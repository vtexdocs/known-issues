---
title: 'Magazine Luiza La integración no admite múltiples paquetes'
slug: magazine-luiza-la-integracion-no-admite-multiples-paquetes
status: PUBLISHED
createdAt: 2026-02-24T23:42:06.000Z
updatedAt: 2026-09-22T19:11:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-integration-not-support-multiple-packages
locale: es
kiStatus: Backlog
internalReference: 1369259
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los pedidos del **mercado de la Magazine Luiza** integrados en VTEX pueden dividirse en dos paquetes, lo que genera **dos facturas**. Sin embargo, Magalu actualmente solo acepta **una factura por pedido**.

Debido a esto, Magalu marca el pedido como **“Factura inválida”** y no procesa el pedido, incluso cuando ya aparece como entregado en VTEX.

En Bridge, el estado del pedido permanece como **“Facturado”** y el estado **Entregado** no se refleja correctamente.

![](https://vtexhelp.zendesk.com/attachments/token/sZfLKTWPRFsSIMFBZ2lO1LUz7/?name=image.png)

## Simulación

- Se recibe un pedido de Magalu que, al procesarse en VTEX, genera diferentes transportistas por artículo, lo que provoca que el pedido se divida en dos paquetes.

- Se emiten las facturas siguiendo el flujo estándar de VTEX, que genera dos facturas, una por cada paquete.

## Workaround

N/A