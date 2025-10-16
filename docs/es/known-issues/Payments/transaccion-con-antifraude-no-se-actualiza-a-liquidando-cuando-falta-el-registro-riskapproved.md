---
title: Transacción con antifraude no se actualiza a "liquidando" cuando falta el registro "riskApproved
slug: transaccion-con-antifraude-no-se-actualiza-a-liquidando-cuando-falta-el-registro-riskapproved
status: PUBLISHED
createdAt: 2025-10-16T20:38:23.971Z
updatedAt: 2025-10-16T20:38:23.971Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-with-antifraud-doesnt-update-to-settling-when-riskapproved-log-is-missing
locale: es
kiStatus: Backlog
internalReference: 1184723
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


A veces, cuando el proveedor antifraude aprueba la transacción, podemos ver que la pasarela recibe el mensaje de aprobado por antifraude, pero no actualiza la transacción al estado "riskApproved". Cuando esto ocurre, la transacción se queda atascada en Autorizada o Aprobada incluso después de que el proveedor de pagos realice la liquidación.


#### Simulación


No hay forma asertiva de reproducir este error, ya que es intermitente.

## Workaround


Abra un ticket a Soporte de Producto - Pagos, para proceder manualmente con el flujo de la transacción.


