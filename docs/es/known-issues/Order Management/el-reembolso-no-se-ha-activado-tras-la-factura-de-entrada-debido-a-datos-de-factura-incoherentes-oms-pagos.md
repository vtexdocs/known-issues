---
title: 'El reembolso no se ha activado tras la factura de entrada debido a datos de factura incoherentes (OMS ↔ Pagos).'
slug: el-reembolso-no-se-ha-activado-tras-la-factura-de-entrada-debido-a-datos-de-factura-incoherentes-oms-pagos
status: PUBLISHED
createdAt: 2026-01-15T12:30:46.155Z
updatedAt: 2026-01-15T12:30:46.155Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-not-triggered-after-input-invoice-due-to-inconsistent-invoicedata-oms-payments
locale: es
kiStatus: Backlog
internalReference: 1351358
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Tras un reembolso satisfactorio, es posible que los datos de la factura del pedido no se actualicen si falla el paso sincrónico posterior al reembolso (por ejemplo, un error de almacenamiento). Cuando se añade posteriormente una nueva factura de entrada (de devolución), SOS calcula los reembolsos pendientes utilizando los datos obsoletos de la factura y vuelve a intentar el reembolso anterior en lugar del nuevo. El síntoma visible es: la factura de entrada aparece en Interacciones del pedido, pero no se crea ninguna interacción de «Pago de reembolso» y no se envía ningún reembolso al conector. #### Simulación

## Workaround

