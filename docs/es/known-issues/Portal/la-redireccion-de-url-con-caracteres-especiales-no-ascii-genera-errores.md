---
title: 'La redirección de URL con caracteres especiales no ASCII genera errores'
slug: la-redireccion-de-url-con-caracteres-especiales-no-ascii-genera-errores
status: PUBLISHED
createdAt: 2021-10-26T15:52:00.000Z
updatedAt: 2023-02-10T13:05:07.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: url-redirect-with-special-characters-non-ascii-return-errors
locale: es
kiStatus: Backlog
internalReference: 457047
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si creamos una redirección con caracteres especiales, por ejemplo `/televisão`, no funcionará y aparecerá el siguiente error:

 Enlace: account.vtexcommercestable.com.br/televisão Error: La respuesta del servidor de origen ha devuelto caracteres de encabezado no válidos

## Simulación

- Crea una redirección 301 en el CMS, por ejemplo, de `/` a `/televisão`
- Comprueba el cuerpo de la respuesta;

## Workaround

No utilices caracteres especiales en la redirección.