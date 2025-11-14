---
title: 'Transacciones con el conector TNSPay denegadas por error: Tarjeta no REGISTRADA en 3DS'
slug: transacciones-con-el-conector-tnspay-denegadas-por-error-tarjeta-no-registrada-en-3ds
status: PUBLISHED
createdAt: 2025-11-14T19:34:40.016Z
updatedAt: 2025-11-14T19:34:40.016Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-the-tnspay-connector-being-denied-by-error-card-not-enrolled-in-3ds
locale: es
kiStatus: Backlog
internalReference: 541687
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Por defecto se cancelan y enviamos dos Solicitudes de Autorización 3Ds, y todavía no ha recibido la respuesta de la Solicitud de Autorización.
La segunda respuesta sólo aparece cuando ya ha entrado en el flujo de cancelación.

El problema se debe a una condición de carrera, y esto hace que los campos de pago sean incoherentes.
Al principio del proceso, el primer registro es

`Autorizar usando 3DS dadas las configuraciones 3DS: siempre MinimumValue`

El método de autorización fue llamado 2 veces en 2 segundos.


#### Simulación


No se puede simular

## Workaround


No hay solución