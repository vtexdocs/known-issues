---
title: 'Bucle infinito de inicio de sesión al abrir un enlace privado de GraphiQL desde el terminal'
slug: bucle-infinito-de-inicio-de-sesion-al-abrir-un-enlace-privado-de-graphiql-desde-el-terminal
status: PUBLISHED
createdAt: 2026-06-09T22:02:59.000Z
updatedAt: 2026-06-09T22:02:59.000Z
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

Los desarrolladores no pueden abrir el IDE privado de GraphiQL generado por el enlace vtex en los espacios de trabajo de desarrollo de VTEX IO. En lugar de cargar el IDE, el navegador entra en un bucle infinito de inicio de sesión con el ID de VTEX y nunca completa la autenticación. Esto afecta a las rutas privadas de GraphiQL para las aplicaciones vinculadas en múltiples cuentas/espacios de trabajo que utilizan los desarrolladores para probar consultas.

## Simulación

1) Vincula una aplicación GraphQL a un espacio de trabajo de desarrollo (por ejemplo, vendor-invite-graphql o instore-chk-graphql).
2) Abre la URL privada de GraphiQL desde la salida del terminal.
3) Observe que la página redirige al punto final de inicio de sesión (/_v/auth-server/v1/login?ReturnUrl=...) y, tras iniciar sesión (por ejemplo, con Google), vuelve a una página que solicita el inicio de sesión de nuevo, lo que da lugar a un bucle infinito.

## Workaround

Utilice el IDE de GraphQL de administración para la aplicación vinculada en lugar de la ruta privada de GraphiQL.
Acceda a la URL del IDE de GraphQL de administración y seleccione su aplicación vinculada en el menú desplegable.