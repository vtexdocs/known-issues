---
title: 'Reembolso limitado incorrectamente debido a un recibo duplicado por una condición de carrera (factura OMS/reembolsos)'
slug: reembolso-limitado-incorrectamente-debido-a-un-recibo-duplicado-por-una-condicion-de-carrera-factura-omsreembolsos
status: PUBLISHED
createdAt: 2026-03-19T14:06:02.955Z
updatedAt: 2026-03-19T14:06:02.955Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-limited-incorrectly-due-to-duplicated-receipt-from-race-condition-oms-invoicerestutions
locale: es
kiStatus: Backlog
internalReference: 1380918
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al emitir un reembolso a través de la entrada de facturas de OMS con restituciones, algunos pedidos se bloquean con el error: «`No se puede utilizar la restitución para reembolsar más de xxx`», aunque la transacción de pago siga mostrando un saldo reembolsable superior. El síntoma visible es un límite de reembolso inferior al esperado calculado en el pedido. En el caso investigado, el equipo de ingeniería identificó un recibo duplicado guardado en el JSON del pedido, causado por una condición de carrera en un proceso que recupera recibos, lo que reduce la cantidad reembolsable percibida por el sistema. Afecta a los comerciantes que realizan reembolsos a través de restituciones de OMS en pedidos en los que el proceso de recuperación de recibos compite con la persistencia normal de los recibos.

## Simulación

No se conoce ninguna forma de replicar este escenario.

## Workaround

provisional**

-

Abre un ticket a PS para eliminar el recibo duplicado del JSON del pedido, de modo que el saldo reembolsable se recalcule correctamente. Esto no se puede solucionar a través de Admin ni de las API públicas.




- Si se requiere un reembolso urgente antes de la corrección de PS:
  -

Realiza el reembolso restante directamente en el panel de control de la pasarela de pago para reembolsar al comprador y añade una nota interna en el pedido para su conciliación. Ten en cuenta que esto no ajustará los saldos reembolsables de OMS y deberá regularizarse tras la corrección de Ingeniería.



- Si sospechas que se da este caso:
  - Compara los totales reembolsados de la pasarela con la suma de los recibos registrados en el pedido; busca importes duplicados para el mismo evento. Facilita a PS las marcas de tiempo, el JSON del pedido y la carga útil de entrada de la factura con error.