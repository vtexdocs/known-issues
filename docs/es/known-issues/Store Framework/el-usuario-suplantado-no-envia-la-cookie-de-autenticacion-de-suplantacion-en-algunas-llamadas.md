---
title: 'El usuario suplantado no envía la cookie de autenticación de suplantación en algunas llamadas'
slug: el-usuario-suplantado-no-envia-la-cookie-de-autenticacion-de-suplantacion-en-algunas-llamadas
status: PUBLISHED
createdAt: 2023-04-13T21:23:52.000Z
updatedAt: 2023-04-13T21:23:52.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: impersonate-user-not-sending-impersonated-authentication-cookie-for-some-calls
locale: es
kiStatus: Backlog
internalReference: 790185
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se accede al sistema de telemarketing e intentas suplantar el acceso de un usuario que tiene acceso a una política comercial con restricciones, algunas capas de GraphQL no envían la cookie del usuario suplantado, lo que provoca una respuesta de acceso denegado por parte de las API

## Simulación

1. Crea un usuario administrador con acceso al centro de llamadas
2. Crea una política comercial (TP) con una restricción
3. Crea un usuario en la cuenta y concédele acceso a la condición de TP cerrada a través de los datos maestros.
4. Inicia sesión en la cuenta con el usuario del centro de llamadas creado en el paso 1.
5. Suplanta al usuario creado en el paso 3.
6. Comprueba cualquier PDP.

El comportamiento esperado no se encuentra en la página, debido a que la autenticación utilizada no permite acceder a la TP del usuario suplantado y no estamos enviando la sesión suplantada para algunas llamadas GraphQL.

## Workaround

1. Crea un usuario en la tienda con el mismo correo electrónico que el de acceso del administrador
2. Concede acceso a la condición TP al correo electrónico del administrador

Con esto, podrás acceder a las condiciones del usuario suplantado