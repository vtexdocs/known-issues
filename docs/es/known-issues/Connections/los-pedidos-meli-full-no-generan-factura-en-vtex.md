---
title: 'Los pedidos MELI FULL no generan factura en VTEX'
slug: los-pedidos-meli-full-no-generan-factura-en-vtex
status: PUBLISHED
createdAt: 2024-02-05T11:14:15.000Z
updatedAt: 2024-02-05T11:14:15.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-full-orders-not-creating-invoice-in-vtex
locale: es
kiStatus: Backlog
internalReference: 976614
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente tenemos un problema con los pedidos MELI FULL: si el pedido presenta algún error durante su creación en VTEX, como un error de SLA, falta de stock, etc., el proceso de creación de la factura en VTEX no se ejecuta. Básicamente, en estos casos no se genera el XML dentro de «embeddedInvoice» de OMS.

## Simulación

Si el pedido presenta algún error durante su creación, el XML no se colocará dentro de VTEX OMS.

## Workaround

provisional**
Para evitar este error, los pedidos no deben quedarse atascados en VTEX Bridge; para ello, configura siempre los SLA necesarios para evitar este error.