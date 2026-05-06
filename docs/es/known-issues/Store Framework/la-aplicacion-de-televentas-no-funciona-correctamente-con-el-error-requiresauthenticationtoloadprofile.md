---
title: 'La aplicación de televentas no funciona correctamente con el error «RequiresAuthenticationToLoadProfile»'
slug: la-aplicacion-de-televentas-no-funciona-correctamente-con-el-error-requiresauthenticationtoloadprofile
status: PUBLISHED
createdAt: 2023-04-26T17:20:41.000Z
updatedAt: 2023-04-26T17:32:27.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: telesales-app-not-working-properly-with-requiresauthenticationtoloadprofile
locale: es
kiStatus: Backlog
internalReference: 797651
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al utilizar el indicador RequiresAuthenticationToLoadProfile en las API de checkout con una aplicación de televentas para suplantar la identidad de los usuarios, no se envía ningún tipo de notificación al usuario si la suplantación se ha realizado con éxito, lo que provoca algunas inconsistencias en el flujo

## Simulación

Para la simulación, debe tener activada la opción RequiresAuthenticationToLoadProfile, lo que significa que debe utilizar un token autorizado para acceder a algunas API

También debe implementar la funcionalidad de televentas: https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R

https://developers.vtex.com/docs/guides/vtex-telemarketing

Después de eso, intenta suplantar a un usuario con un operador de centro de llamadas; verás algunas inconsistencias en la plataforma

## Workaround

En algunas partes del flujo, una actualización podría resolver el problema; otras funcionalidades no están preparadas para funcionar con RequiresAuthenticationToLoadProfile, por lo que, si la actualización no resuelve el problema, la única solución posible es desactivar el indicador