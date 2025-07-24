---
title: 'Cambiar v1 El artículo desaparece de la interfaz de usuario después de ser facturado, escenario con promoción.'
id: 2OsJe5vLh2IsNUikT5VBrL
status: PUBLISHED
createdAt: 2024-08-13T13:11:12.493Z
updatedAt: 2024-09-03T15:09:08.208Z
publishedAt: 2024-09-03T15:09:08.208Z
firstPublishedAt: 2024-08-13T13:11:13.338Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-v1-item-disappears-from-ui-after-being-invoiced-scenario-with-promotion
locale: es
kiStatus: No Fix
internalReference: 1080187
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Hemos identificado un escenario en Change V1 en el que, tras aplicar una promoción de "compre 2 y obtenga un descuento en la segunda unidad", cuando facturamos uno de los artículos y el segundo se elimina a través de Change V1, la información sobre el producto que se facturó desaparece de la interfaz de usuario de pedidos, quedando únicamente la información sobre el artículo que se eliminó en Change V1.

Dado que Change V1 no utiliza el itemIndex, la validación se realiza por el id, lo que genera este comportamiento.

En este caso, tampoco tendremos la información sobre el artículo facturado en la API.


##

## Simulación


Para simular este escenario, es necesario crear una promoción del tipo "compre 2 y obtenga un descuento en la segunda unidad", luego facturar sólo uno de los artículos del pedido y eliminar el otro a través del cambio v1.
Se identificará el comportamiento descrito en este KI, es decir, el producto que se facturó no aparecerá en la UI de Pedidos.



## Workaround


Actualmente estamos desarrollando el cambio v2, en caso de que este escenario no ocurra, sugerimos migrar al cambio v2.





