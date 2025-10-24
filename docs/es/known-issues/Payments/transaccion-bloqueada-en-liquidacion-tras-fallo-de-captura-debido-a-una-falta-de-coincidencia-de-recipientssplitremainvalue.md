---
title: 'Transacción bloqueada en Liquidación tras fallo de Captura debido a una falta de coincidencia de recipientsSplitRemainValue.'
slug: transaccion-bloqueada-en-liquidacion-tras-fallo-de-captura-debido-a-una-falta-de-coincidencia-de-recipientssplitremainvalue
status: PUBLISHED
createdAt: 2025-09-22T18:20:42.115Z
updatedAt: 2025-09-22T18:20:42.115Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-settling-after-capture-fails-due-to-recipientssplitremainvalue-mismatch
locale: es
kiStatus: Unknown
internalReference: 1295769
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


**Síntoma:** Tras una captura parcial seguida de una cancelación parcial y un reembolso, la transacción permanece en "liquidación" en VTEX.
Mientras que la pasarela puede mostrar el cargo como "capturado/pagado" en una vista consolidada, en VTEX el punto final `/settlements` sólo refleja la captura parcial y el reembolso.
Los intentos de captura posteriores fallan debido a una incoherencia en el cálculo de `recipientsSplitRemainValue`.

El campo de datos adicional `recipientsSplitRemainValue` almacenado para la transacción tiene un importe de división divergente para uno o más destinatarios. Esta divergencia hace que fallen las validaciones de liquidación e impide que VTEX complete el importe de captura restante.


#### Simulación


1. Asegurarse de que la cuenta está habilitada bajo la bandera de característica `can-retain-settlement.jsonnet`.
2. Cree una nueva transacción en la cuenta.
3. Realice una **captura parcial** de la transacción.
4. Anular parte del importe capturado previamente.
5. Reintegrar el importe cancelado.
6. Intentar capturar el importe restante de la operación.

## Workaround


N/A.



