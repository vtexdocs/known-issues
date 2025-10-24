---
title: 'Problemas de navegación desde el menú MiCuenta'
slug: problemas-de-navegacion-desde-el-menu-micuenta
status: PUBLISHED
createdAt: 2025-10-16T20:47:03.319Z
updatedAt: 2025-10-16T20:47:03.319Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: navigation-issues-from-the-myaccount-menu
locale: es
kiStatus: Backlog
internalReference: 1209822
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


El VTEX Login App tiene una característica llamada accountOptionLinks, que permite poner enlaces personalizados de redirección a las secciones de myaccount dentro del popover de login. Estos enlaces se muestran una vez que el usuario ha iniciado sesión en la tienda virtual. Ejemplo:

 ![](https://vtexhelp.zendesk.com/attachments/token/zosxLBGZVqOL0xNQkPDEfheBO/?name=image.png)

Sin embargo, la navegación desde estos enlaces emergentes de inicio de sesión no funciona. Después de hacer clic, la URL cambia en la barra de direcciones del navegador, pero la página no se muestra. Por otro lado, la navegación desde cualquier otra página a 'myaccount' funciona correctamente.

## Simulación



-

Inicie sesión en una tienda web que tenga la función `accountOptionLinks`. Ej:



 ![](https://vtexhelp.zendesk.com/attachments/token/JdhPUya3LJeKRpxwhzfvEA9d3/?name=image.png)

- En la esquina superior derecha, haz clic en el icono del nombre de usuario/avatar, aparecerá una ventana emergente. A continuación, haz clic en una de las opciones del menú de redirección (en el ejemplo de abajo "pedidos"), verás que la URL del navegador cambiará, pero la página no.

 ![](https://vtexhelp.zendesk.com/attachments/token/plTb6qntOS6aZTxUIdMMfiEaK/?name=image.png)

## Workaround


No hay ninguna solución disponible.


