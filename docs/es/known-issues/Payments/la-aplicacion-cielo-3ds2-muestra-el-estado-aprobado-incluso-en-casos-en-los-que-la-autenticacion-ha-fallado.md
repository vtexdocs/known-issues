---
title: 'La aplicación Cielo 3DS2 muestra el estado «aprobado» incluso en casos en los que la autenticación ha fallado.'
slug: la-aplicacion-cielo-3ds2-muestra-el-estado-aprobado-incluso-en-casos-en-los-que-la-autenticacion-ha-fallado
status: PUBLISHED
createdAt: 2023-05-05T14:48:42.000Z
updatedAt: 2023-05-05T14:48:42.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-cielo-3ds2-app-is-returning-an-approved-status-even-in-scenarios-when-the-authentication-has-failed
locale: es
kiStatus: Backlog
internalReference: 820060
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, nuestra aplicación de autenticación «cielo-authentication-app» v1.2.1 devuelve el estado «aprobado» en el paso final del flujo al llamar al paso de autorización que evalúa si la autenticación ha fallado o no. Sin embargo, la aplicación solo activa el paso de fallo cuando se produce un error en este paso. Como resultado, aunque el estado sea «fallido» en el paso anterior, pero no se produzca ningún error en el paso /authorize actual, el estado sigue considerándose «aprobado», lo que nos permite realizar una solicitud al adquirente. Este no es el comportamiento esperado, ya que en este escenario deberíamos denegar la autorización de pago y cambiar la transacción a «autorización denegada».

## Simulación

Realice un pedido con la aplicación activada y utilice una tarjeta válida que falle en el paso de inscripción. A continuación, puede consultar las herramientas de desarrollo y observar que, aunque la llamada a /authorization falle, el estado sigue enviándose como «aprobado».

## Workaround

N/A