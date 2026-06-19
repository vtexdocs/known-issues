---
title: 'Pago «NULL» al convertir las reglas de pago durante el proceso de creación de la transacción'
slug: pago-null-al-convertir-las-reglas-de-pago-durante-el-proceso-de-creacion-de-la-transaccion
status: PUBLISHED
createdAt: 2026-06-19T17:42:12.000Z
updatedAt: 2026-06-19T17:42:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: null-payment-when-converting-payment-rules-during-the-transaction-creation-process
locale: es
kiStatus: Backlog
internalReference: 1424049
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

De forma intermitente, el sistema encargado de devolver los _paymentSystems_ disponibles de los comerciantes puede omitir una o más opciones y registrar un error del tipo «Conversión de reglas del sistema de pago: pago NULL» durante la creación del pago, lo que provoca que las transacciones fallen con mensajes como `«La configuración del conector no es válida… El PaymentSystemId encontrado en la mejor opción no se ha encontrado en la configuración de la regla del sistema de pago para el comerciante.»`

El síntoma visible es que los pedidos quedan incompletos y los errores se concentran en intervalos de tiempo cortos.

## Simulación

No es posible simularlo.

## Workaround

provisional**
No hay ninguna solución provisional disponible.