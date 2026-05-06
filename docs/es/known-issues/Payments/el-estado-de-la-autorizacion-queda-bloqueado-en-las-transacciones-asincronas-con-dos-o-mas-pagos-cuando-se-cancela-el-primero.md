---
title: 'El estado de la autorización queda bloqueado en las transacciones asíncronas con dos o más pagos cuando se cancela el primero.'
slug: el-estado-de-la-autorizacion-queda-bloqueado-en-las-transacciones-asincronas-con-dos-o-mas-pagos-cuando-se-cancela-el-primero
status: PUBLISHED
createdAt: 2023-11-02T15:49:03.000Z
updatedAt: 2023-11-02T19:37:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: authorization-status-is-stuck-for-asynchronous-transactions-with-2-or-more-payments-when-the-first-one-is-canceled
locale: es
kiStatus: Backlog
internalReference: 929517
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando una transacción tiene varios pagos y se vuelve asíncrona debido al modo Sherlock o al modo Defensa, y si falla el primer intento de autorización de pago, esto puede provocar que los demás pagos queden bloqueados en el estado «Autorizado». Esto se debe a que se cancela toda la transacción, pero nuestro trabajador no lo detecta y continúa con un intento de autorización para el segundo pago. En consecuencia, el segundo pago no se puede cancelar, ya que la transacción ya ha sido cancelada y no permite una solicitud de cancelación.

## Simulación

Crea una transacción con dos pagos, en la que se active el modo Defensa o cualquier otra función que haga que la transacción sea asíncrona. A continuación, utiliza un conector de proveedor personalizado para rechazar el primer intento de autorización de pago mientras apruebas el otro.

## Workaround

N/A