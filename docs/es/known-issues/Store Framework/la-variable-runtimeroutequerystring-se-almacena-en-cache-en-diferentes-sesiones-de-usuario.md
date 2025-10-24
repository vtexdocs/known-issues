---
title: 'La variable __RUNTIME__.route.queryString se almacena en caché en diferentes sesiones de usuario.'
slug: la-variable-runtimeroutequerystring-se-almacena-en-cache-en-diferentes-sesiones-de-usuario
status: PUBLISHED
createdAt: 2025-08-13T14:36:24.105Z
updatedAt: 2025-08-13T14:36:24.105Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: variable-runtimeroutequerystring-is-cached-across-different-user-sessions
locale: es
kiStatus: Backlog
internalReference: 1275673
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El servidor almacena en caché los parámetros de la cadena de consulta del objeto __RUNTIME__.route.queryString en diferentes sesiones de usuario. Esto puede provocar que la sesión de un usuario herede incorrectamente los datos de la cadena de consulta de la sesión de un usuario anterior.


#### Simulación


Este comportamiento puede reproducirse en aplicaciones que leen parámetros de cadenas de consulta de la variable `__RUNTIME__`.

1. Accede a una página de la tienda con una cadena de consulta específica en la máquina A. Por ejemplo: `https://www.examplestore.com/sale?targeting=affiliate_A`
2. La aplicación que se ejecuta en la página lee el parámetro `targeting` de `__RUNTIME__.route.queryString` e identifica correctamente `affiliate_A`.
3. En una máquina B completamente diferente (y una sesión nueva y limpia), accede a la _misma_ página de la tienda, pero **sin** la cadena de consulta. Por ejemplo: `https://www.examplestore.com/sale`.
4. La aplicación en la máquina B lee el parámetro `targeting` de `__RUNTIME__.route.queryString`.
5. **Comportamiento esperado:** El objeto `__RUNTIME__.route.queryString` debería estar vacío o no contener el parámetro `targeting`, ya que no estaba presente en la URL para esta sesión.
6. **Comportamiento real:** Debido al almacenamiento en caché del lado del servidor, el objeto `__RUNTIME__.route.queryString` todavía contiene `targeting=afiliado_A` de la sesión de la máquina A. La aplicación atribuye incorrectamente la sesión de la máquina B a `affiliate_A`.

## Workaround



No utilice el objeto `__RUNTIME__.route.queryString` para leer parámetros de cadenas de consulta dinámicas que se espera que varíen entre usuarios o sesiones (como identificadores de afiliado, campaña o usuario). Esta variable está sujeta a la caché de páginas del servidor y no es específica de la sesión.
Lo correcto y recomendable es leer los parámetros directamente de la URL.

- Para componentes del lado del cliente (React):** Utiliza APIs del navegador como `window.location.search` para obtener la cadena de consulta de la URL actual y analizarla.
- Para la renderización del lado del servidor (Node.js):** Accede a la cadena de consulta desde el contexto de solicitud (por ejemplo, `ctx.query`) en lugar del objeto `__RUNTIME__`.
Esto asegura que los datos son siempre específicos de la petición actual del usuario y no se ven afectados por la caché de una sesión anterior.



%0A