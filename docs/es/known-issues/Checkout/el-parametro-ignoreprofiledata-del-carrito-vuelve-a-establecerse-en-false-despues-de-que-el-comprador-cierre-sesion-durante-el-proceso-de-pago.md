---
title: 'El parámetro «ignoreProfileData» del carrito vuelve a establecerse en «false» después de que el comprador cierre sesión durante el proceso de pago'
slug: el-parametro-ignoreprofiledata-del-carrito-vuelve-a-establecerse-en-false-despues-de-que-el-comprador-cierre-sesion-durante-el-proceso-de-pago
status: PUBLISHED
createdAt: 2026-05-04T21:58:41.956Z
updatedAt: 2026-05-04T21:58:41.956Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-parameter-ignoreprofiledata-reverted-to-false-after-shopper-signs-out-in-checkout
locale: es
kiStatus: Backlog
internalReference: 1401421
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En las tiendas con la configuración del formulario de pedido `"ignoreProfileData": true`, al cerrar sesión tras introducir el correo electrónico mediante el botón «¿No eres tú? Cerrar sesión», el parámetro del carrito `ignoreProfileData` vuelve a `false`.

Esto hace que a cualquier usuario posterior con un correo electrónico reconocido se le rellenen automáticamente sus datos personales, a pesar del valor `"ignoreProfileData": true` de la configuración del formulario de pedido.

 ![](https://vtexhelp.zendesk.com/attachments/token/4vrwdjRkpyimh29VJjzy22IES/?name=image.png)

## Simulación

- Crea un carrito en una tienda con la configuración de OrderForm `"ignoreProfileData": true`;
- Procede al pago e introduce un correo electrónico que pertenezca a un perfil completo;
- Al reconocer el correo electrónico, los datos del comprador no se rellenarán;
- Cierra la sesión con el botón «¿No eres tú? Cerrar sesión»;
- El parámetro específico del carrito «ignoreProfileData» volverá a ser «false»;
- Al introducir cualquier correo electrónico con un perfil completo, se rellenarán los datos del comprador.

## Workaround

N/A