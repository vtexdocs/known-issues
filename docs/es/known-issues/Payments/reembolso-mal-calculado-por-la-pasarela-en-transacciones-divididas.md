---
title: 'Reembolso mal calculado por la pasarela en transacciones divididas'
slug: reembolso-mal-calculado-por-la-pasarela-en-transacciones-divididas
status: PUBLISHED
createdAt: 2025-11-14T19:31:04.813Z
updatedAt: 2025-11-14T19:31:04.813Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: refund-miscalculated-by-gateway-in-split-transactions
locale: es
kiStatus: Backlog
internalReference: 1196767
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las solicitudes de reembolso de la pasarela sólo tienen el valor del importe de la comisión, aunque la solicitud del sistema de gestión de pedidos se haya enviado con el valor total.

Para identificar este problema conocido debe Verificar el valor total solicitado en los pedidos y compararlo con el calculado, y solicitado por la pasarela al proveedor. A continuación, compruebe si el valor es diferente entre ellos, el mismo importe de la comisión está en el objeto del destinatario.


#### Simulación

## Workaround

