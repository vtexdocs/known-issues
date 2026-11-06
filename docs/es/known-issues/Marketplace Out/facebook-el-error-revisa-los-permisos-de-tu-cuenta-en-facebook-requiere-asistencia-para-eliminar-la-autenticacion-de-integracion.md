---
title: 'Facebook El error "Revisa los permisos de tu cuenta en Facebook" requiere asistencia para eliminar la autenticación de integración.'
slug: facebook-el-error-revisa-los-permisos-de-tu-cuenta-en-facebook-requiere-asistencia-para-eliminar-la-autenticacion-de-integracion
status: PUBLISHED
createdAt: 2026-11-06T15:09:21.000Z
updatedAt: 2026-11-06T15:09:21.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: facebook-review-your-account-permission-on-facebook-error-requires-support-to-remove-the-integration-authentication
locale: es
kiStatus: Backlog
internalReference: 1481964
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

El error «Revisa los permisos de tu cuenta en Facebook» se produce cuando hay un problema de autenticación con Facebook. En algunos casos, los SKU también muestran este error:

{"error":{"message":"(#200) Error de permisos","type":"OAuthException","code":200,

Para solucionarlo, se debe eliminar la autenticación de la integración, deshabilitar la aplicación en Facebook Business Extension (FBE) y, posteriormente, el vendedor debe repetir todo el proceso de autenticación. El comerciante no puede eliminar la autenticación por sí mismo, por lo que siempre se requiere un ticket de soporte. Cada vez que se repite el proceso de autenticación, se crea un nuevo catálogo.

## Simulación

1. La integración devuelve el error «Revisa los permisos de tu cuenta en Facebook».

2. En algunos casos, los SKU muestran el error `(#200) Error de permisos` (`OAuthException`, código 200).
3. El comerciante no puede eliminar la autenticación de la integración por sí mismo para volver a realizar el proceso.

![](https://vtexhelp.zendesk.com/guide-media/01HAZA5D67F68Z4C39ZF16BKEM)

![](https://vtexhelp.zendesk.com/guide-media/01HA5FQR9ZBH3ZE8SD7AC4MQYV)

## Workaround

1. Abra un ticket con el soporte de VTEX para eliminar la autenticación de la integración.

2. Desactive la aplicación en la extensión de negocios de Facebook (FBE).

3. Vuelva a realizar el proceso de autenticación.