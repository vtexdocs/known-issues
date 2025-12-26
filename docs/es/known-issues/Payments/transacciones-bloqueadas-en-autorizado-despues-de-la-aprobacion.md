---
title: 'Transacciones bloqueadas en Autorizado después de la aprobación'
slug: transacciones-bloqueadas-en-autorizado-despues-de-la-aprobacion
status: PUBLISHED
createdAt: 2025-12-26T14:50:01.178Z
updatedAt: 2025-12-26T14:50:01.178Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-stuck-in-authorized-after-approval
locale: es
kiStatus: Backlog
internalReference: 1344363
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Las transacciones pueden permanecer atascadas en **Autorizado** incluso después de que todos los pagos se hayan autorizado correctamente, impidiendo la facturación y la progresión normal del pedido. El síntoma visible es que la transacción no avanza a Aprobado a pesar de que se han producido aprobaciones, a menudo acompañadas de interacciones TransactionWorkFlowChangeStatus duplicadas o conflictivas.
La documentación oficial explica con más detalle los diferentes estados de las transacciones: Flujo de Transacciones en Pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos un comportamiento inesperado:
Atascado en **Autorizado**: Después de que todos los pagos hayan sido aprobados (autorizados) y la transacción ya haya pasado al estado Aprobado, se activa un nuevo evento de estado de transición, TransactionWorkFlowChangeStatus. Este evento actualiza incorrectamente el estado de nuevo a **Autorizado**. Aunque después se produce otro evento TransactionWorkFlowChangeStatus - Approved, la actualización final del estado no se registra correctamente en la transacción. Como resultado, la transacción permanece atascada en el estado **Authorized**, impidiendo que la orden o transacción progrese como se esperaba.

Para evitar este problema es importante saber que la pasarela de pago VTEX utiliza un modelo de datos en memoria, comprometiendo los cambios a la base de datos sólo después de que cada solicitud se complete. Por este motivo, los conectores de pago deben evitar realizar solicitudes POST (como /additional-data, /retry o /callback) durante el procesamiento de la autorización, ya que los datos esperados podrían no estar aún almacenados, lo que provocaría bloqueos o incoherencias.
Los conectores no deben volver a llamar a la pasarela durante el mismo flujo que inició, ni suponer que los datos están disponibles inmediatamente en la base de datos. En su lugar, deben utilizar solicitudes GET para recuperar información sobre transacciones o pagos, esperar a que finalice el proceso de autorización antes de enviar devoluciones de llamada y gestionar el procesamiento adicional de forma asíncrona una vez finalizada la solicitud inicial.
Siguiendo este patrón, y evitando las llamadas circulares a la API, las solicitudes concurrentes y las devoluciones de llamada solapadas, los conectores garantizan una integración estable y evitan problemas de coherencia o bloqueo de datos.


## Simulación


No es posible simular.

## Workaround


Abra un ticket para el equipo de soporte de Produtc



%0A