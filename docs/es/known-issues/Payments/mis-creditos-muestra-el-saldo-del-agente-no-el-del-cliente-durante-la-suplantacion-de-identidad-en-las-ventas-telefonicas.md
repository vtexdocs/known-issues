---
title: 'Mis créditos muestra el saldo del agente, no el del cliente, durante la suplantación de identidad en las ventas telefónicas.'
slug: mis-creditos-muestra-el-saldo-del-agente-no-el-del-cliente-durante-la-suplantacion-de-identidad-en-las-ventas-telefonicas
status: PUBLISHED
createdAt: 2026-02-12T18:02:34.709Z
updatedAt: 2026-02-12T18:02:34.709Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
locale: es
kiStatus: Backlog
internalReference: 1301293
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Cuando un usuario con el rol de televentas se hace pasar por un cliente y navega a Mi cuenta > Mis créditos, el saldo que se muestra corresponde al crédito del propio agente de televentas en lugar del crédito del cliente suplantado.

Este problema se produce específicamente en el flujo de suplantación de identidad de telesales y se ha reproducido internamente. El comportamiento se debe a que la aplicación Mis créditos obtiene el correo electrónico del usuario de telesales autenticado de la sesión en lugar de la identidad del cliente suplantado. Como resultado, es posible que se muestre un saldo incorrecto a los agentes y clientes durante las compras asistidas por telesales, lo que crea confusión y riesgo de errores en los pedidos.


#### Simulación

## Workaround

