---
title: 'Si se interactúa con el campo de dirección mientras algunos datos de la interfaz de usuario aún se están cargando, se cambia el modo de introducción de la dirección'
slug: si-se-interactua-con-el-campo-de-direccion-mientras-algunos-datos-de-la-interfaz-de-usuario-aun-se-estan-cargando-se-cambia-el-modo-de-introduccion-de-la-direccion
status: PUBLISHED
createdAt: 2021-09-01T20:36:31.000Z
updatedAt: 2023-09-13T20:39:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-address-component-while-some-data-on-the-ui-is-still-in-a-loading-state-changes-the-address-insertion-mode
locale: es
kiStatus: Backlog
internalReference: 423811
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el usuario decide cambiar su dirección mientras algunos datos relacionados aún se están cargando en la página, el componente de dirección pasa de la geolocalización a un componente con un menú desplegable. Estos datos pueden ser, por ejemplo, la selección de una tienda para recoger el pedido. Mientras los datos se cargan en la interfaz, el usuario hace clic en «cambiar dirección»; al hacerlo, la dirección de devolución aparece en otro componente, no en el de geolocalización.

## Simulación

- Configura una cuenta para utilizar coordenadas geográficas al finalizar la compra;
- Busca una dirección en el paso de envío;
- Haz clic en «Cambiar» mientras se carga la página;
- El componente de dirección cambiará y te pedirá que rellenes la información de la dirección

## Workaround

N/A