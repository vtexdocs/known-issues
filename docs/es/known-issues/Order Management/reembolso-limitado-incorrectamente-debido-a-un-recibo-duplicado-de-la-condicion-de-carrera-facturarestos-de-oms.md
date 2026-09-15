---
title: 'Reembolso limitado incorrectamente debido a un recibo duplicado de la condición de carrera (factura/restos de OMS)'
slug: reembolso-limitado-incorrectamente-debido-a-un-recibo-duplicado-de-la-condicion-de-carrera-facturarestos-de-oms
status: PUBLISHED
createdAt: 2026-03-19T17:05:01.000Z
updatedAt: 2026-09-15T21:02:31.000Z
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

Al emitir un reembolso mediante la entrada de facturas de OMS con restituciones, algunos pedidos se bloquean con el error: «No se puede utilizar el reembolso de restitución superior a xxx», aunque la transacción de pago aún muestre un saldo reembolsable mayor. El síntoma visible es un límite de reembolso calculado para el pedido inferior al esperado. En el caso investigado, el equipo de ingeniería identificó un recibo duplicado guardado en el JSON del pedido, causado por una condición de carrera en un proceso de recuperación de recibos, lo que reduce el importe reembolsable percibido por el sistema. Esto afecta a los comercios que realizan reembolsos mediante restituciones de OMS en pedidos donde el proceso de recuperación de recibos entra en conflicto con la persistencia normal de recibos.

Esta misma causa raíz también bloquea la modificación de pedidos (ChangeOrderV2) al eliminar o disminuir un artículo en un pedido de Marketplace. En lugar del error de restitución mencionado anteriormente, se muestra como `SOSValidationException` **CHK0034** («El valor del cambio excede el precio del pedido») en PATCH `…/orders/{orderId}/changes`. Esto se confirma mediante un rastreo de pila real en `ParticipantsEnricher.MergeWithParticipantPreviewsAsync`, que ejecuta el mismo cálculo del saldo de reembolso mientras propaga el cambio al participante de Marketplace.

## Simulación

No se conoce ninguna forma de replicar este escenario a demanda, ya que depende de una condición de carrera entre el proceso de recuperación de recibos y la persistencia del recibo de reembolso real, que solo se manifiesta en momentos específicos.

## Workaround

- Abra un ticket con PS para eliminar el recibo duplicado del JSON del pedido y así recalcular correctamente el saldo reembolsable. Esto no se puede solucionar mediante el panel de administración ni las API públicas. Se ha confirmado su eficacia también para el activador ChangeOrderV2: tras la eliminación, los tipos de restitución volvieron a su valor correcto y se desbloqueó la eliminación del artículo.

- Si se requiere un reembolso urgente antes de la corrección de PS:

- Realice el reembolso restante directamente en el panel de la pasarela de pago para reembolsar al comprador y añada una nota interna al pedido para su conciliación. Tenga en cuenta que esto no ajustará los saldos reembolsables de OMS y deberá regularizarse tras la corrección del equipo de ingeniería.

- Si sospecha que se trata de este escenario:

- Compare los totales reembolsados ​​de la pasarela con la suma de los recibos registrados en el pedido; busque importes duplicados para el mismo evento. Proporcione a PS las marcas de tiempo, el JSON del pedido y la carga útil de entrada de la factura que falla (o la carga útil de ChangeOrderV2 que falla, si el activador es la eliminación de un artículo).