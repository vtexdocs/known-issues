---
title: 'Las transacciones con 2 pagos con tarjeta de crédito se bloquean cuando se producen varios intentos de liquidación en el modo de captura total.'
slug: las-transacciones-con-2-pagos-con-tarjeta-de-credito-se-bloquean-cuando-se-producen-varios-intentos-de-liquidacion-en-el-modo-de-captura-total
status: PUBLISHED
createdAt: 2026-07-20T20:37:30.000Z
updatedAt: 2026-07-20T20:37:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-2-credit-card-payments-stuck-when-multiple-settlement-attempts-occur-in-total-capture-mode
locale: es
kiStatus: Backlog
internalReference: 1436981
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones pueden quedarse atascadas en «Aprobada» o «En liquidación», sin avanzar al estado final de «Finalizada» o «Cancelada», cuando se cumplen las siguientes condiciones:

- La transacción contiene dos pagos con tarjeta de crédito diferentes;

- Los pagos se procesan bajo el modelo de liquidación total;

- Los pagos reciben más de un intento de liquidación, no activado por la liquidación automática.

El primer intento de liquidación liquida el importe total de la transacción en ambos pagos. Los intentos posteriores no fallan visiblemente, pero como no queda ningún valor por capturar, el flujo de la transacción permanece bloqueado.

## Simulación

No es posible realizar una simulación.

## Workaround

No hay solución alternativa disponible.