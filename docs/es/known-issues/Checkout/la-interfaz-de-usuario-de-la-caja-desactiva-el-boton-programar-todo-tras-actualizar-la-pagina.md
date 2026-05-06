---
title: 'La interfaz de usuario de la caja desactiva el botón «Programar todo» tras actualizar la página'
slug: la-interfaz-de-usuario-de-la-caja-desactiva-el-boton-programar-todo-tras-actualizar-la-pagina
status: PUBLISHED
createdAt: 2023-04-04T21:08:40.000Z
updatedAt: 2023-04-06T17:51:27.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-unselects-the-schedule-all-toggle-after-refreshing-the-page
locale: es
kiStatus: Backlog
internalReference: 784693
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La interfaz de pago desactiva la opción «Programar todo» en el paso de envío tras actualizar la página, aunque la API siga seleccionada. Este comportamiento no tiene ninguna repercusión; el pedido tendrá seleccionada la entrega programada.

## Simulación

- Añade un artículo que tenga entrega programada y entrega normal;
- Selecciona la entrega programada, rellena toda la información y ve a «Pagos»;
- Vuelve a «Envío» y actualiza la página;
- La opción «Programar todo» aparecerá desactivada.

## Workaround

N/A