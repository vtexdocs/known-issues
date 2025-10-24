---
title: 'My Credits muestra el saldo del agente, no el del cliente, durante la suplantación de televenta'
slug: my-credits-muestra-el-saldo-del-agente-no-el-del-cliente-durante-la-suplantacion-de-televenta
status: PUBLISHED
createdAt: 2025-10-02T12:44:59.958Z
updatedAt: 2025-10-02T12:44:59.958Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-credits-displays-agents-balance-not-customers-during-telesales-impersonation
locale: es
kiStatus: Unknown
internalReference: 1301293
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando un usuario con el rol de Televentas suplanta a un cliente y navega a Mi Cuenta > Mis Créditos, el saldo mostrado corresponde al crédito propio del agente de televentas en lugar del crédito del cliente suplantado.

Este problema se produce específicamente en el flujo de suplantación de televenta y se ha reproducido internamente. El comportamiento se debe a que la aplicación Mis créditos obtiene el correo electrónico del usuario de televenta autenticado de la sesión en lugar de la identidad del cliente suplantado.

Como resultado, el saldo incorrecto puede mostrarse a los agentes y clientes durante las compras asistidas por televenta, creando confusión y riesgo de errores en los pedidos.

## Simulación


1) Inicie sesión como Usuario A (rol de televenta).
2) Hacerse pasar por el Usuario B a través de Televentas (convertirse en el Usuario B en el escaparate).
3) Vaya a Mi Cuenta > Mis Créditos mientras se hace pasar por el Usuario B.
4) Observe que el saldo mostrado coincide con el crédito del Usuario A (agente de televenta), no con el crédito del Usuario B.

## Workaround


Para los equipos operativos: evite comprobar los créditos a través del flujo de suplantación. En su lugar, confirme los saldos a través de herramientas de back-office o API en las que se pueda especificar el correo electrónico/cuenta de cliente correctos.

Para los implementadores: si personalizan el front-end, asegúrense de que cuando la suplantación esté activa, la API de crédito del cliente se consulte utilizando el correo electrónico del cliente suplantado mientras se autentica con la cookie de sesión del agente de televenta.


