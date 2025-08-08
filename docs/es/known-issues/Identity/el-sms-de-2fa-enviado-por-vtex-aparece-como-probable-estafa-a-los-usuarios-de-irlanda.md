---
title: El SMS de 2FA enviado por VTEX aparece como "probable estafa" a los usuarios de Irlanda
slug: el-sms-de-2fa-enviado-por-vtex-aparece-como-probable-estafa-a-los-usuarios-de-irlanda
status: PUBLISHED
createdAt: 2025-08-08T21:09:46.316Z
updatedAt: 2025-08-08T21:09:46.316Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: 2fa-sms-sent-by-vtex-appears-as-likely-scam-to-users-in-ireland
locale: es
kiStatus: Backlog
internalReference: 1268097
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Los mensajes SMS 2FA de VTEX están marcados como "probable estafa" en Irlanda porque la normativa irlandesa exige que el ID del remitente esté registrado en ComReg, que es el regulador local de telecomunicaciones. Sin este registro, los remitentes de SMS corporativos no son reconocidos por los operadores de telefonía móvil locales, lo que da lugar a alertas automáticas de fraude para los usuarios finales y, en consecuencia, socava la confianza y la eficacia del proceso de autenticación. La responsabilidad de registrar el ID de remitente recae en los equipos reguladores o jurídicos, más que en los puramente técnicos o de ingeniería.


#### Simulación



- Configurar la autenticación 2FA por SMS para los usuarios de VTEX Admin con un número de teléfono en Irlanda;
- Solicitar un inicio de sesión 2FA;
- Observe que el SMS recibido será marcado por el proveedor local (operadores de telefonía móvil en Irlanda) como "probable estafa" debido a la ausencia del registro de ID de remitente de VTEX con ComReg.

## Workaround

 provisional
No hay ninguna solución disponible.



