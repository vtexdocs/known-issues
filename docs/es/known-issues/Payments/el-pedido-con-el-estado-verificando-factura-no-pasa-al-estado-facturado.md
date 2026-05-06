---
title: 'El pedido con el estado «Verificando factura» no pasa al estado «Facturado».'
slug: el-pedido-con-el-estado-verificando-factura-no-pasa-al-estado-facturado
status: PUBLISHED
createdAt: 2022-01-07T21:53:56.000Z
updatedAt: 2025-02-24T18:19:52.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-with-status-of-verifying-invoice-does-not-update-to-invoiced
locale: es
kiStatus: Backlog
internalReference: 500245
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

A veces, el valor total de la transacción ya se ha capturado, pero su estado no se actualiza a «liquidada» o «finalizada». Esto puede ocurrir cuando existe una discrepancia entre lo que el proveedor externo ha **capturado realmente** y lo que la pasarela ha registrado como **solicitado para su captura**. Esto impide que la transacción avance y que se facture el pedido. El pedido quedará bloqueado en «verificando factura».

## Simulación

No es posible simular este problema, pero podemos comprobar que existe consultando con la API `https://.myvtex.com/api/payments/pvt/transactions//settlements` la diferencia entre la matriz de solicitudes y la matriz de acciones.
Si hay una divergencia entre esos dos valores totales, entonces podemos confirmar la inconsistencia.

## Workaround

provisional**
Abre un ticket en Soporte de Producto - Pagos, para poder continuar manualmente con el flujo de la transacción.