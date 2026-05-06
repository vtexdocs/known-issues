---
title: 'El conector AdyenV1 no envía el campo «pspReference» en algunas operaciones, lo que provoca un error'
slug: el-conector-adyenv1-no-envia-el-campo-pspreference-en-algunas-operaciones-lo-que-provoca-un-error
status: PUBLISHED
createdAt: 2023-02-23T13:51:46.000Z
updatedAt: 2023-05-11T16:44:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: adyenv1-connector-is-not-sending-pspreference-on-some-operations-and-thus-causing-error
locale: es
kiStatus: Backlog
internalReference: 758411
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunas operaciones, el conector nativo AdyenV1 no envía el código `pspsReference` a Adyen. Dado que este campo es obligatorio para esta integración, recibimos una respuesta de error cuando falta.

Se está investigando el motivo de la ausencia de este campo.

## Simulación

Realiza un pedido con el conector de Adyen e intenta cancelarlo.

## Workaround

provisional**
N/A.