---
title: 'Datos incorrectos en «pickupStoreInfo» tras la creación del pedido'
slug: datos-incorrectos-en-pickupstoreinfo-tras-la-creacion-del-pedido
status: PUBLISHED
createdAt: 2021-03-22T15:28:14.000Z
updatedAt: 2023-03-31T14:08:12.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-data-in-pickupstoreinfo-after-order-creation
locale: es
kiStatus: Fixed
internalReference: 347155
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunas ocasiones, cuando tenemos un artículo con opción de entrega y otro con opción de recogida, los datos de `pickupStoreInfo` se rellenan incorrectamente tras finalizar el pedido.

Hay que tener en cuenta que este caso es poco habitual, ya que no disponemos de más detalles, registros ni otros casos similares. Por lo tanto, no se puede llegar a una conclusión definitiva.

## Simulación

Dentro de la información del pedido, la información de la tienda de recogida está incompleta y contiene datos nulos.

## Workaround

provisional**
N/A