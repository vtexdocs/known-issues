---
title: 'El dominio del cliente no aparece en la pantalla del IdP'
slug: el-dominio-del-cliente-no-aparece-en-la-pantalla-del-idp
status: PUBLISHED
createdAt: 2025-10-16T19:27:49.135Z
updatedAt: 2025-10-16T19:27:49.135Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: customer-domain-not-displayed-on-the-idp-screen
locale: es
kiStatus: Backlog
internalReference: 1250421
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En la autenticación OAuth, el usuario es redirigido a una URL por el IdP después de iniciar sesión. Algunos proveedores muestran el dominio de esa URL en la página de login, y a veces los clientes prefieren mostrar su propio dominio en esta página (especialmente el mensaje de Google "para continuar a {dominio}"). Si el dominio tiene una ruta raíz, como "dominio.com/es" por ejemplo, debido a que esta ruta raíz es diferente de `/` el dominio del cliente no se muestra, mostrándose en su lugar un dominio VTEX como vtexcommercestable.com.br, por ejemplo.


#### Simulación


A continuación los pasos para simular el problema:

- Elige una cuenta con una ruta raíz de dominio diferente de `/` (`/en`, `/es`, `/pt` son buenos ejemplos);
- Establece el atributo `usesOwnDomain` a true para la cuenta;
- El dominio debe estar incluido en las URI de confianza del proveedor;
- Accede a la tienda web y elige iniciar sesión con este proveedor (Google por ejemplo), verás que el dominio no se mostrará en la página de inicio de sesión del proveedor.

## Workaround


No hay ninguna solución disponible.



