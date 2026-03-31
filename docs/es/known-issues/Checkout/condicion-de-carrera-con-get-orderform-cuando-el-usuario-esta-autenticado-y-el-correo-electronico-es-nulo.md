---
title: 'Condición de carrera con GET OrderForm cuando el usuario está autenticado y el correo electrónico es nulo'
slug: condicion-de-carrera-con-get-orderform-cuando-el-usuario-esta-autenticado-y-el-correo-electronico-es-nulo
status: PUBLISHED
createdAt: 2026-03-31T19:07:13.179Z
updatedAt: 2026-03-31T19:07:13.179Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: race-condition-with-get-orderform-when-user-is-authenticated-and-email-is-null
locale: es
kiStatus: Backlog
internalReference: 1386397
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La solicitud GET OrderForm puede ejecutarse simultáneamente con otras solicitudes de actualización de orderForm. Si, al realizar la solicitud, el usuario está autenticado y el campo `email` de orderForm es `null`, la solicitud GET OrderForm cargará los datos del perfil del usuario en orderForm, lo que puede generar un conflicto con el resultado de otras solicitudes simultáneas.

En particular, cuando la solicitud GET se ejecuta simultáneamente con una solicitud POST `/attachments/clientProfileData` y finaliza después de esta, los datos `clientProfileData` pasados en la solicitud de adjuntos pueden sobrescribirse y prevalecerán los datos del perfil del usuario cargados por la solicitud GET.

## Simulación

No hay una forma sencilla de simular este problema, pero debería producirse si:


1. El usuario está autenticado y el campo `email` del orderForm es `null`
2. Se realiza una solicitud POST a `/attachments/clientProfileData` pasando datos diferentes a los del perfil del usuario
3.

Se realiza una solicitud GET de orderForm _**antes**_ y finaliza _**después**_ de que haya finalizado la solicitud POST a `/attachments/clientProfileData`



Una vez finalizadas ambas solicitudes, `clientProfileData` debería ser el del perfil del usuario y no el pasado en la solicitud POST a `/attachments/clientProfileData`

## Workaround

N/A