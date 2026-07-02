---
title: 'Método de redondeo inconsistente del conector DecidirV1 para los campos CSPTGRANDTOTALAMOUNT y CSITTOTALAMOUNT.'
slug: metodo-de-redondeo-inconsistente-del-conector-decidirv1-para-los-campos-csptgrandtotalamount-y-csittotalamount
status: PUBLISHED
createdAt: 2023-04-10T23:32:15.000Z
updatedAt: 2026-07-02T15:43:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: es
kiStatus: No Fix
internalReference: 787367
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al usar el conector DecidirV1 con productos cuyos precios tienen más de dos decimales, el total del pedido que se informa al sistema de prevención de fraude de Decidir no coincide con el valor real del pago. Esta discrepancia puede provocar fallos en la validación antifraude o inconsistencias entre el registro de la transacción y el importe cobrado.

## Simulación

1. Configure un producto con un precio unitario que contenga más de dos decimales (p. ej., $10.999).

2. Añada el producto al carrito y complete el proceso de compra con el conector DecidirV1.

3. Observe que el importe total de la transacción de Decidir difiere del total del carrito.

## Workaround

Evite configurar productos con precios que superen los dos decimales. Ajuste el catálogo para que todos los precios unitarios tengan un máximo de dos decimales y así evitar la discrepancia.