---
title: 'Si la primera dirección de la lista de direcciones está incompleta, no se rellenan los datos del perfil ni de envío al finalizar la compra'
slug: si-la-primera-direccion-de-la-lista-de-direcciones-esta-incompleta-no-se-rellenan-los-datos-del-perfil-ni-de-envio-al-finalizar-la-compra
status: PUBLISHED
createdAt: 2021-05-11T15:02:30.000Z
updatedAt: 2024-01-03T20:49:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: first-address-in-the-address-list-incomplete-does-not-fill-the-profileshipping-data-at-checkout
locale: es
kiStatus: Backlog
internalReference: 366975
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando un usuario tiene más de una dirección en su perfil y la primera dirección de la lista está incompleta, independientemente de si las demás son válidas, el proceso de pago no rellena automáticamente los datos del perfil o de envío tras introducir el correo electrónico.

## Simulación

- Añade 2 direcciones a un perfil, de las cuales la primera está incompleta;
- Crea un carrito y añade el correo electrónico;
- No se rellenan los datos del perfil ni de la dirección.

## Workaround

Elimina la dirección incompleta del perfil a través de Datos maestros