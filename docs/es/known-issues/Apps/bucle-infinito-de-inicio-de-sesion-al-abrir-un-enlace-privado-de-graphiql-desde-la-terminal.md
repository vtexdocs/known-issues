---
title: 'Bucle infinito de inicio de sesión al abrir un enlace privado de GraphiQL desde la terminal.'
slug: bucle-infinito-de-inicio-de-sesion-al-abrir-un-enlace-privado-de-graphiql-desde-la-terminal
status: PUBLISHED
createdAt: 2026-06-09T22:02:59.000Z
updatedAt: 2026-08-12T15:31:07.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: infinite-login-loop-when-opening-private-graphiql-link-from-terminal
locale: es
kiStatus: Backlog
internalReference: 1418910
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Los desarrolladores no pueden abrir el IDE GraphiQL privado generado por el enlace vtex en los espacios de trabajo de desarrollo de VTEX IO. En lugar de cargar el IDE, el navegador entra en un bucle infinito de inicio de sesión con el ID de VTEX y nunca completa la autenticación. Esto afecta a las rutas GraphiQL privadas de las aplicaciones vinculadas en varias cuentas/espacios de trabajo que los desarrolladores utilizan para probar consultas.

## Simulación

1) Vincule una aplicación GraphQL a un espacio de trabajo de desarrollo (por ejemplo, vendor-invite-graphql o instore-chk-graphql).

2) Abra la URL GraphiQL privada que aparece en la salida de la terminal.

3) Observe que la página redirige al punto final de inicio de sesión (/_v/auth-server/v1/login?ReturnUrl=...) y, tras iniciar sesión (por ejemplo, con Google), regresa a una página que solicita iniciar sesión de nuevo, lo que provoca un bucle infinito.

## Workaround

Utiliza el IDE GraphQL de administración para la aplicación vinculada en lugar de la ruta privada GraphiQL.

Accede a la URL del IDE GraphQL de administración y selecciona tu aplicación vinculada en el menú desplegable.