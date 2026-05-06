---
title: 'El portal no borra las cookies cuando el cliente cierra la sesión al finalizar la compra'
slug: el-portal-no-borra-las-cookies-cuando-el-cliente-cierra-la-sesion-al-finalizar-la-compra
status: PUBLISHED
createdAt: 2021-08-23T15:40:35.000Z
updatedAt: 2025-05-16T23:06:55.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-doesnt-delete-cookies-when-client-logout-at-checkout
locale: es
kiStatus: No Fix
internalReference: 417322
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En la caja de una tienda, existe la opción de cerrar sesión.

Lamentablemente, la solicitud enviada a la aplicación del portal no elimina las cookies del usuario, que permanecen en el formulario de pedido junto con el correo electrónico del cliente, por lo que este no puede cerrar sesión mediante esta opción. Este comportamiento se produce en tiendas que utilizan una solución de tienda online distinta de «Legacy CMS Portal».

## Simulación

1. Acceda al sitio web de la tienda (`www.store.com`) e inicie sesión en «Mi cuenta» utilizando el correo electrónico y el código;
2. Una vez que haya iniciado sesión, cree un carrito y vaya a la caja;
3. Complete el paso «Perfil» y vaya a «Envío»; a continuación, intente cerrar la sesión desde el enlace «No soy yo, finalizar sesión».

La caja realiza la solicitud de forma normal, enviando la solicitud junto con el `orderFormId`.

Sin embargo, la aplicación del portal no elimina la cookie de este usuario y, por lo tanto, devuelve el mismo usuario. El correo electrónico se mantiene en el formulario de pedido y, en consecuencia, no se cierra la sesión.

## Workaround

Abre un ticket con VTEX solicitando que se habilite el cierre de sesión con el ID de VTEX.