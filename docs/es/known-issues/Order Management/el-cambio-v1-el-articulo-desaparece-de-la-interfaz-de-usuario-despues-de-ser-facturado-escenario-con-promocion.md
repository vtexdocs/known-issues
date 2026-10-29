---
title: 'El cambio v1 El artículo desaparece de la interfaz de usuario después de ser facturado, escenario con promoción.'
slug: el-cambio-v1-el-articulo-desaparece-de-la-interfaz-de-usuario-despues-de-ser-facturado-escenario-con-promocion
status: PUBLISHED
createdAt: 2024-08-13T16:10:56.000Z
updatedAt: 2026-10-29T22:29:15.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-v1-item-disappears-from-ui-after-being-invoiced-scenario-with-promotion
locale: es
kiStatus: Fixed
internalReference: 1080187
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Identificamos un escenario en Change V1 donde, tras aplicar la promoción "Compra 2 y obtén un descuento en la segunda unidad", al facturar uno de los artículos y eliminar el segundo mediante Change V1, la información del producto facturado desaparece de la interfaz de pedidos, quedando solo la información del artículo eliminado.

Dado que Change V1 no utiliza el itemIndex, la validación se realiza mediante el ID, lo que genera este comportamiento.

En este caso, tampoco tendremos la información del artículo facturado en la API.

## Simulación

Para simular este escenario, debe crear una promoción del tipo "Compra 2 y obtén un descuento en la segunda unidad", facturar solo uno de los artículos del pedido y eliminar el otro mediante Change V1.

Se observará el comportamiento descrito en este informe de conocimiento: el producto facturado no aparecerá en la interfaz de pedidos.

## Workaround

Actualmente estamos desarrollando Change V2. Si este escenario no se presenta, sugerimos migrar a Change V2.