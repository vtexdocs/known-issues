---
title: 'Transacciones que quedan bloqueadas en «Autorizadas» o «Pendientes de autorización» tras su aprobación'
slug: transacciones-que-quedan-bloqueadas-en-autorizadas-o-pendientes-de-autorizacion-tras-su-aprobacion
status: PUBLISHED
createdAt: 2025-10-08T19:24:00.000Z
updatedAt: 2026-05-28T19:54:27.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-or-pending-authorization-after-approval
locale: es
kiStatus: Fixed
internalReference: 1304667
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones pueden quedarse bloqueadas en el estado «Autorizada» o «Pendiente de autorización» incluso después de que todos los pagos se hayan autorizado correctamente, lo que impide la facturación y el desarrollo normal del pedido. El síntoma visible es que la transacción no avanza al estado «Aprobada» a pesar de que se hayan producido las aprobaciones, lo que suele ir acompañado de registros `TransactionWorkFlowChangeStatus` duplicados o contradictorios.
La documentación oficial explica los diferentes estados de las transacciones con más detalle: Flujo de transacciones en pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos dos tipos de comportamientos inesperados:

1. **Atascado en «Autorizado»:** Después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado «Aprobado», se activa un nuevo evento de cambio de estado, `TransactionWorkFlowChangeStatus`. Este evento actualiza incorrectamente el estado de nuevo a _Authorized_. Aunque posteriormente se produzca otro evento `TransactionWorkFlowChangeStatus - Approved`, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado _Authorized_, lo que impide que el pedido o la transacción avancen como se esperaba.
2. **Atascado en «Pending Authorization»:** A veces, la transacción se queda atascada en el estado _Pending Authorization_, incluso cuando todos los pagos ya han sido autorizados.

Estos problemas suelen identificarse por registros `TransactionWorkFlowChangeStatus` duplicados o conflictivos, como _Approved_ seguido de _Authorized_, o por la ausencia total del evento final _Approved_, lo que conduce a un estado de transacción inconsistente o congelado.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, y solo confirma los cambios en la base de datos una vez completada cada solicitud. Por ello, los conectores de pago deben evitar realizar solicitudes POST (como `/additional-data`, `/retry` o `/callback`) durante el procesamiento de la autorización, ya que es posible que los datos esperados aún no se hayan guardado, lo que provocaría bloqueos o inconsistencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que iniciaron, ni dar por sentado que los datos están disponibles de inmediato en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar información de la transacción o del pago, esperar a que finalice el proceso de autorización antes de enviar callbacks y gestionar el procesamiento adicional de forma asíncrona una vez completada la solicitud inicial.
Al seguir este patrón, evitando llamadas circulares a la API, solicitudes simultáneas y devoluciones de llamada superpuestas, los conectores garantizan una integración estable y evitan problemas de coherencia de datos o de bloqueo.

Además del comportamiento descrito anteriormente, este problema conocido principal se dividió posteriormente en dos problemas conocidos más específicos para delimitar mejor los flujos empresariales y técnicos y mejorar la priorización, tal y como se acordó en nuestro debate interno:

- **[KI] Transacciones atascadas en «Autorizadas» tras la aprobación** – Ticket de Zendesk **1344363**
https://vtexhelp.zendesk.com/agent/tickets/1344363
- **[KI] Transacciones atascadas en «Pendiente de autorización» tras la aprobación** – Ticket de Zendesk **1344365**
https://vtexhelp.zendesk.com/agent/tickets/1344365


Para obtener descripciones, síntomas, impacto, métricas y pasos de resolución de problemas actualizados, **utilice siempre los KI secundarios anteriores**.
Este KI principal se mantiene únicamente para el seguimiento histórico y la vinculación de escalaciones anteriores y **no** debe utilizarse como referencia principal en el futuro.

## Simulación

No es posible simularlo.

## Workaround

El equipo de soporte puede llamar a las API internas para hacer avanzar la transacción.


%0A