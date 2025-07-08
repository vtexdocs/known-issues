---
title: Solicitud de preanálisis enviada varias veces
slug: solicitud-de-preanalisis-enviada-varias-veces
status: PUBLISHED
createdAt: 2025-07-08T17:20:32.855Z
updatedAt: 2025-07-08T17:20:32.855Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: preanalysis-request-sent-multiple-times
locale: es
kiStatus: Backlog
internalReference: 1256754
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


La pasarela de pago de VTEX envía la misma solicitud de preanálisis al proveedor antifraude una segunda vez, incluso cuando la primera llamada fue satisfactoria.

No se espera que la pasarela envíe múltiples solicitudes de preanálisis, ya que esto puede hacer que el proceso de análisis del fraude dure más de lo necesario. Sin embargo, según nuestro protocolo, el proveedor antifraude debe estar preparado para gestionar múltiples solicitudes.

La solicitud duplicada puede verse en los registros de interacciones:
`Provider Owner Account is Request HTTP POST to /pre-analysis`.


#### Simulación


No es posible simular


#### Workaround


N/A



