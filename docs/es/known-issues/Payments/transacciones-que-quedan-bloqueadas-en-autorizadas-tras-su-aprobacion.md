---
title: 'Transacciones que quedan bloqueadas en «Autorizadas» tras su aprobación'
slug: transacciones-que-quedan-bloqueadas-en-autorizadas-tras-su-aprobacion
status: PUBLISHED
createdAt: 2025-12-26T17:49:30.000Z
updatedAt: 2026-05-28T19:55:32.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-after-approval
locale: es
kiStatus: Fixed
internalReference: 1344363
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Las transacciones pueden quedarse bloqueadas en el estado **Autorizada** incluso después de que todos los pagos se hayan autorizado correctamente, lo que impide la facturación y el desarrollo normal del pedido. El síntoma visible es que la transacción no pasa al estado **Aprobada** a pesar de que se hayan producido las aprobaciones, lo que suele ir acompañado de interacciones duplicadas o conflictivas de **TransactionWorkflowChangeStatus**.
La documentación oficial explica los diferentes estados de las transacciones con más detalle: Flujo de transacciones en pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos un comportamiento inesperado:
Atascado en **Autorizado**: después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado Aprobado, se desencadena un nuevo evento de cambio de estado, TransactionWorkFlowChangeStatus. Este evento actualiza incorrectamente el estado de nuevo a **Autorizado**. Aunque posteriormente se produzca otro evento TransactionWorkFlowChangeStatus - Aprobado, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado **Autorizado**, lo que impide que el pedido o la transacción avancen como se esperaba.

Para evitar este problema, es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, que solo confirma los cambios en la base de datos una vez completada cada solicitud. Por este motivo, los conectores de pago deben evitar realizar solicitudes POST (como /additional-data, /retry o /callback) durante el procesamiento de la autorización, ya que es posible que los datos esperados aún no se hayan guardado, lo que provocaría bloqueos o inconsistencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que iniciaron, ni dar por sentado que los datos están disponibles de inmediato en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar información de la transacción o del pago, esperar a que finalice el proceso de autorización antes de enviar callbacks y gestionar el procesamiento adicional de forma asíncrona una vez completada la solicitud inicial.
Al seguir este patrón, evitando llamadas circulares a la API, solicitudes simultáneas y devoluciones de llamada superpuestas, los conectores garantizan una integración estable y evitan problemas de coherencia de datos o de bloqueo.

## Simulación

No es posible simularlo.

## Workaround

Abre un ticket para el equipo de soporte técnico



%0A