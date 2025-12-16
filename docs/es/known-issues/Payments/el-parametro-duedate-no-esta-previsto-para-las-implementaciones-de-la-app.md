---
title: 'el parámetro dueDate no está previsto para las implementaciones de la APP'
slug: el-parametro-duedate-no-esta-previsto-para-las-implementaciones-de-la-app
status: PUBLISHED
createdAt: 2025-12-16T13:55:41.422Z
updatedAt: 2025-12-16T13:55:41.422Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duedate-parameter-is-not-expected-for-ppp-implementations
locale: es
kiStatus: Backlog
internalReference: 1340572
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


No se espera que las respuestas a VTEX de los Conectores de Pago creados de acuerdo con el Protocolo de Proveedor de Pago (PPP) incluyan el parámetro `dueDate` ya que este parámetro no está definido en la API de Detalles de Pago.

Esto puede dar lugar a información incorrecta o imprecisa en otros flujos que dependen de esta información.

## Simulación


El problema no es fácil de simular, pero puede observarse en cualquier transacción de un conector que utilice el protocolo de proveedor de pagos.

## Workaround


N/A



