---
title: 'Transacciones bloqueadas en «Autorizado» o «Autorización pendiente» tras su aprobación.'
slug: transacciones-bloqueadas-en-autorizado-o-autorizacion-pendiente-tras-su-aprobacion
status: PUBLISHED
createdAt: 2026-01-12T21:00:24.586Z
updatedAt: 2026-01-12T21:00:24.586Z
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

 Las transacciones pueden permanecer bloqueadas en «Autorizada» o «Pendiente de autorización» incluso después de que todos los pagos se hayan autorizado correctamente, lo que impide la facturación y el progreso normal del pedido. El síntoma visible es que la transacción no avanza a «Aprobada» a pesar de que se han producido aprobaciones, lo que a menudo va acompañado de registros duplicados o conflictivos de «TransactionWorkFlowChangeStatus».
La documentación oficial explica con más detalle los diferentes estados de las transacciones: Flujo de transacciones en los pagos. Sin embargo, en las transacciones afectadas por este problema, observamos dos tipos de comportamientos inesperados: 1. **Atascado en Autorizado:** Después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado _Aprobado_, se activa un nuevo evento de estado de transición, `TransactionWorkFlowChangeStatus`. Este evento actualiza incorrectamente el estado de nuevo a _Autorizado_. Aunque posteriormente se produce otro evento `TransactionWorkFlowChangeStatus - Aprobado`, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado _Autorizado_, lo que impide que el pedido o la transacción avancen como se esperaba. 2.

**Atascado en autorización pendiente:** A veces, la transacción se queda atascada en el estado «Pending Authorization» (Autorización pendiente), incluso cuando todos los pagos ya han sido autorizados. Estos problemas a menudo se pueden identificar por registros duplicados o conflictivos de «TransactionWorkFlowChangeStatus», como «Approved» seguido de «Authorized», o la falta total del evento final «Approved», lo que conduce a un estado de transacción inconsistente o congelado.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, que solo confirma los cambios en la base de datos una vez completada cada solicitud. Por este motivo, los conectores de pago deben evitar realizar solicitudes POST (como «/additional-data», «/retry» o «/callback») durante el procesamiento de la autorización, ya que es posible que los datos esperados aún no se hayan conservado, lo que provocaría bloqueos o incoherencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que iniciaron, ni dar por sentado que los datos están disponibles inmediatamente en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar la información de la transacción o del pago, esperar a que finalice el proceso de autorización antes de enviar las devoluciones de llamada y gestionar el procesamiento adicional de forma asíncrona una vez completada la solicitud inicial.
Al seguir este patrón, evitando llamadas API circulares, solicitudes simultáneas y devoluciones de llamada superpuestas, los conectores garantizan una integración estable y evitan problemas de coherencia o bloqueo de datos. Además del comportamiento descrito anteriormente, este problema conocido principal se dividió posteriormente en dos KI más específicos para delimitar mejor los flujos comerciales y técnicos y mejorar la priorización, tal y como se acordó en nuestra discusión interna:

- **[KI] Transacciones bloqueadas en «Autorizado» después de la aprobación** – Ticket de Zendesk **1344363** https://vtexhelp.zendesk.com/agent/tickets/1344363
- **[KI] Transacciones bloqueadas en Pendiente de autorización tras la aprobación** – Ticket de Zendesk **1344365** https://vtexhelp.zendesk.com/agent/tickets/1344365 Para obtener descripciones, síntomas, impacto, métricas y pasos de resolución de problemas actualizados, **utilice siempre los KI secundarios anteriores**.
Este KI principal se mantiene solo para el seguimiento histórico y la vinculación de escalaciones anteriores y **no** debe utilizarse como referencia principal en el futuro. #### Simulación

## Workaround

