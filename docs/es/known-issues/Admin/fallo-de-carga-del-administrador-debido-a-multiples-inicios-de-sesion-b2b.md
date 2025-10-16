---
title: Fallo de carga del administrador debido a múltiples inicios de sesión B2B
slug: fallo-de-carga-del-administrador-debido-a-multiples-inicios-de-sesion-b2b
status: PUBLISHED
createdAt: 2025-10-16T20:51:41.555Z
updatedAt: 2025-10-16T20:51:41.555Z
contentType: knownIssue
productTeam: Admin
author: 2mXZkbi0oi061KicTExNjo
tag: Admin
slugEN: admin-loading-failure-due-to-multiple-b2b-logins
locale: es
kiStatus: Backlog
internalReference: 1221787
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario



Este problema se produce en cuentas configuradas para flujo B2B, cuando un mismo usuario accede a la webstore y al admin utilizando diferentes direcciones de correo electrónico (o incluso las mismas, en diferentes sesiones).
Como ambas interfaces comparten el mismo dominio base (`*.myvtex.com`), las cookies de autenticación guardadas por el navegador - especialmente la `VtexIdClientAutCookie` - entran en conflicto.
Durante la carga de algunas pantallas de administración, como el módulo Pedidos, el sistema utiliza testigos de sesión basados en estas cookies para validar los permisos. Cuando hay varios inicios de sesión activos en el mismo dominio, es posible que el token no coincida con la sesión esperada, lo que provoca un error 500 en las llamadas a la interfaz.
Este escenario es habitual, por ejemplo, cuando un usuario B2B inicia sesión en la tienda con un email personal y simultáneamente accede al admin con un email corporativo, la superposición de cookies provoca fallos de autenticación y bloquea la carga de partes de la UI.


#### Simulación




- Acceda a la tienda web identificándose con la dirección de correo electrónico `xxxx@example.com`,


- en otra pestaña, acceda al administrador identificándose con otra dirección de correo electrónico, por ejemplo `xxxx@othereExample.com`.


- Navegue hasta el módulo Pedidos en la administración.

- Tenga en cuenta que la carga de pedidos puede fallar, dando lugar a un error 500 debido a un conflicto de cookies de sesión.


## Workaround



Para solucionarlo, cierre la sesión en ambos entornos (webstore y admin) y vuelva a iniciarla utilizando la misma dirección de correo electrónico en ambos. Esto asegura que las cookies se sincronizan correctamente, eliminando el conflicto.



