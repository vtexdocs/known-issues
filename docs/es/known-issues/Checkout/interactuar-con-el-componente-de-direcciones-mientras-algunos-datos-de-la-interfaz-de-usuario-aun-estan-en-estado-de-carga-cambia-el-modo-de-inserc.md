---
title: 'Interactuar con el componente de direcciones mientras algunos datos de la interfaz de usuario aún están en estado de carga cambia el modo de inserción de direcciones.'
id: 7t3jzIpIppmZDAc9R2BgpS
status: PUBLISHED
createdAt: 2023-09-13T20:39:43.294Z
updatedAt: 2023-09-13T20:39:44.079Z
publishedAt: 2023-09-13T20:39:44.079Z
firstPublishedAt: 2023-09-13T20:39:44.079Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-address-component-while-some-data-on-the-ui-is-still-in-a-loading-state-changes-the-address-insertion-mode
locale: es
kiStatus: Backlog
internalReference: 423811
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el usuario elige cambiar su dirección mientras algunos datos respectivos todavía se están cargando en la página, el componente de dirección cambia de geolocalización al componente con un desplegable. Los datos pueden ser, por ejemplo, la selección de una tienda para recoger. Mientras los datos se cargan en la interfaz, el usuario hace clic en "cambiar dirección", con eso, la dirección de vuelta está en otro componente, no en el componente de geolocalización.


##

## Simulación



- Configurar una cuenta para utilizar geocoordenadas en el pago;
- Buscar una dirección en el paso de envío;
- Haga clic en Cambiar mientras se carga la página;
- El componente de la dirección cambiará y le pedirá que rellene la información de la dirección



## Workaround


N/A




