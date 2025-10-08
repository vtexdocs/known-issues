---
title: Transacciones atascadas en Autorizado o Pendiente de autorización tras la aprobación
slug: transacciones-atascadas-en-autorizado-o-pendiente-de-autorizacion-tras-la-aprobacion
status: PUBLISHED
createdAt: 2025-10-08T16:24:46.897Z
updatedAt: 2025-10-08T16:24:46.897Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-or-pending-authorization-after-approval
locale: es
kiStatus: Backlog
internalReference: 1304667
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las transacciones pueden permanecer atascadas en Autorizado o Pendiente de Autorización incluso después de que todos los pagos se hayan autorizado correctamente, impidiendo la facturación y la progresión normal del pedido. El síntoma visible es que la transacción no avanza a Aprobado a pesar de que se han producido aprobaciones, a menudo acompañadas de registros de `TransactionWorkFlowChangeStatus` duplicados o conflictivos.
La documentación oficial explica con más detalle los distintos estados de las transacciones: Flujo de Transacciones en Pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos dos tipos de comportamientos inesperados:

1. **Atasco en Autorizado:** Después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado _Aprobado_, se activa un nuevo evento de estado de transición, `TransactionWorkFlowChangeStatus`. Este evento actualiza incorrectamente el estado a _Autorizado_. Aunque después se produce otro evento `TransactionWorkFlowChangeStatus - Approved`, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado _Authorized_, impidiendo que la orden o transacción progrese como se esperaba.
2.

**Atasco en Pendiente de Autorización:** A veces, la transacción se queda atascada en el estado _Pendiente de Autorización_, incluso cuando todos los pagos ya han sido autorizados.



Estos problemas suelen identificarse por registros de `TransactionWorkFlowChangeStatus` duplicados o contradictorios, como _Approved_ seguido de _Authorized_, o por la ausencia total del evento final _Approved_, lo que da lugar a un estado de transacción incoherente o congelado.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, comprometiendo los cambios en la base de datos sólo después de que se complete cada solicitud. Debido a esto, los conectores de pago deben evitar realizar solicitudes POST (como `/additional-data`, `/retry`, o `/callback`) durante el procesamiento de la autorización, ya que los datos esperados pueden no estar todavía almacenados, causando bloqueos o inconsistencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que inició, ni suponer que los datos están disponibles inmediatamente en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar información sobre transacciones o pagos, esperar a que finalice el proceso de autorización antes de enviar devoluciones de llamada y gestionar el procesamiento adicional de forma asíncrona una vez finalizada la solicitud inicial.
Siguiendo este patrón, y evitando las llamadas circulares a la API, las solicitudes concurrentes y las devoluciones de llamada solapadas, los conectores garantizan una integración estable y evitan problemas de coherencia o bloqueo de datos.

##

#### Simulación

## Workaround

