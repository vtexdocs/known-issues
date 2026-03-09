---
title: 'Transacciones bloqueadas en «Autorización pendiente» tras su aprobación'
slug: transacciones-bloqueadas-en-autorizacion-pendiente-tras-su-aprobacion
status: PUBLISHED
createdAt: 2026-03-09T12:53:17.098Z
updatedAt: 2026-03-09T12:53:17.098Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-after-approval
locale: es
kiStatus: Fixed
internalReference: 1344365
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones pueden permanecer bloqueadas en **Autorización pendiente** incluso después de que todos los pagos se hayan autorizado correctamente, lo que impide la facturación y el progreso normal del pedido. El síntoma visible es que la transacción no avanza a Aprobada a pesar de que se han producido aprobaciones, lo que a menudo va acompañado de registros duplicados o conflictivos de TransactionWorkFlowChangeStatus. La documentación oficial explica los diferentes estados de las transacciones con más detalle: Flujo de transacciones en los pagos.

La transacción se queda atascada en el estado **Pendiente de autorización**, incluso cuando todos los pagos ya han sido autorizados. Estos problemas a menudo pueden identificarse por registros duplicados o conflictivos de TransactionWorkFlowChangeStatus, como Aprobado seguido de **Pendiente de autorización**, o la ausencia total del evento final Aprobado, lo que conduce a un estado de transacción inconsistente o congelado.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, que solo confirma los cambios en la base de datos una vez completada cada solicitud. Por este motivo, los conectores de pago deben evitar realizar solicitudes POST (como /additional-data, /retry o /callback) durante el procesamiento de la autorización, ya que es posible que los datos esperados aún no se hayan conservado, lo que provocaría bloqueos o incoherencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que iniciaron, ni dar por sentado que los datos están disponibles inmediatamente en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar la información de la transacción o del pago, esperar a que finalice el proceso de autorización antes de enviar las devoluciones de llamada y gestionar el procesamiento adicional de forma asíncrona una vez completada la solicitud inicial.
Siguiendo este patrón, evitando llamadas API circulares, solicitudes concurrentes y devoluciones de llamada superpuestas, los conectores garantizan una integración estable y evitan problemas de coherencia o bloqueo de datos.

## Simulación

No es posible simularlo.

## Workaround

Abra un ticket para el equipo de soporte técnico %0A