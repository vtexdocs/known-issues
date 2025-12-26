---
title: 'Transacciones atascadas en Pendiente de autorización tras la aprobación'
slug: transacciones-atascadas-en-pendiente-de-autorizacion-tras-la-aprobacion
status: PUBLISHED
createdAt: 2025-12-26T14:54:04.028Z
updatedAt: 2025-12-26T14:54:04.028Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-pending-authorization-after-approval
locale: es
kiStatus: Backlog
internalReference: 1344365
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las transacciones pueden permanecer atascadas en **Autorización Pendiente** incluso después de que todos los pagos hayan sido autorizados con éxito, impidiendo la facturación y la progresión normal del pedido. El síntoma visible es que la transacción no avanza a Aprobado a pesar de que se han producido las aprobaciones, a menudo acompañado de registros de TransactionWorkFlowChangeStatus duplicados o conflictivos.
La documentación oficial explica con más detalle los distintos estados de las transacciones: Flujo de Transacciones en Pagos.

La transacción se queda atascada en el estado **Pendiente de Autorización**, incluso cuando todos los pagos ya han sido autorizados.

Este problema puede identificarse a menudo por registros de TransactionWorkFlowChangeStatus duplicados o contradictorios, como Aprobado seguido de **Pendiente de autorización**, o por la ausencia total del evento Aprobado final, lo que da lugar a un estado de transacción incoherente o congelado.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, comprometiendo los cambios en la base de datos sólo después de que se complete cada solicitud. Por este motivo, los conectores de pago deben evitar realizar solicitudes POST (como /additional-data, /retry o /callback) durante el procesamiento de la autorización, ya que los datos esperados podrían no estar aún almacenados, lo que provocaría bloqueos o incoherencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que inició, ni suponer que los datos están disponibles inmediatamente en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar información sobre transacciones o pagos, esperar a que finalice el proceso de autorización antes de enviar devoluciones de llamada y gestionar el procesamiento adicional de forma asíncrona una vez finalizada la solicitud inicial.
Siguiendo este patrón, y evitando las llamadas circulares a la API, las solicitudes concurrentes y las devoluciones de llamada solapadas, los conectores garantizan una integración estable y evitan problemas de coherencia o bloqueo de datos.


## Simulación


No es posible simular.

## Workaround


Abra un ticket para el equipo de soporte de Produtc



%0A