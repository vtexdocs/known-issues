---
title: 'Transacción bloqueada en estado autorizado o pendiente de autorización después de haber sido aprobada'
slug: transaccion-bloqueada-en-estado-autorizado-o-pendiente-de-autorizacion-despues-de-haber-sido-aprobada
status: PUBLISHED
createdAt: 2025-11-17T17:57:31.563Z
updatedAt: 2025-11-17T17:57:31.563Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-authorized-or-pending-authorization-status-after-being-approved
locale: es
kiStatus: Fixed
internalReference: 1037765
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En un flujo de transacción estándar, una vez que todos los pagos se han autorizado correctamente, se espera que la transacción cambie su estado a _Aprobado_.
En la documentación oficial se explican con más detalle los diferentes estados de las transacciones: Flujo de Transacciones en Pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos dos tipos de comportamientos inesperados:

1. **Atasco en Autorizado:** Después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado _Aprobado_, se activa un nuevo evento de estado de transición, `TransactionWorkFlowChangeStatus`. Este evento actualiza incorrectamente el estado a _Autorizado_. Aunque después se produce otro evento `TransactionWorkFlowChangeStatus - Approved`, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado _Authorized_, impidiendo que la orden o transacción progrese como se esperaba.
2.

**Atasco en Pendiente de Autorización:** A veces, la transacción se queda atascada en el estado _Pendiente de Autorización_, incluso cuando todos los pagos ya han sido autorizados.



Estos problemas suelen identificarse por registros de `TransactionWorkFlowChangeStatus` duplicados o contradictorios, como _Approved_ seguido de _Authorized_, o por la ausencia total del evento final _Approved_, lo que da lugar a un estado de transacción incoherente o congelado.

En septiembre de 2025, realizamos una operación en la pasarela VTEX para garantizar la coherencia del estado, lo que redujo el número de casos en un 97%. Sin embargo, este problema puede seguir produciéndose debido a un uso inadecuado de los conectores de pago.
Se ha abierto una nueva incidencia conocida para realizar un seguimiento de estos casos recientes, donde también puede encontrar más detalles sobre las mejores prácticas que deberían aplicar los conectores:

https://newhelp.vtex.com/en/known-issues/transactions-stuck-in-authorized-or-pending-authorization-after-approval?utm_source=old_portal&utm_medium=redirect&utm_campaign=portal_transition


#### Simulación

## Workaround

