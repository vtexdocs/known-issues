---
title: 'Pagos duplicados con la misma información'
slug: pagos-duplicados-con-la-misma-informacion
status: PUBLISHED
createdAt: 2025-10-16T20:28:07.255Z
updatedAt: 2025-10-16T20:28:07.255Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duplicated-payments-with-the-same-information
locale: es
kiStatus: Backlog
internalReference: 1154246
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Pagos duplicados con la misma información enviados a la pasarela, provocando la cancelación de la transacción.

Es posible confirmar el escenario comprobando alguna información, como:


- El registro de errores devuelto en la transacción

Ej:

**PaymentGateway**
El valor de la transacción (111503.00) no es igual a la suma de pagos (223006.00).



-

Utilizando la API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, compruebe el número de objetos de la matriz transaction.payments. Si se encuentran dos objetos, este KI se ajusta al escenario.



#### Simulación


No es posible simular

## Workaround


No hay ninguna solución disponible.



