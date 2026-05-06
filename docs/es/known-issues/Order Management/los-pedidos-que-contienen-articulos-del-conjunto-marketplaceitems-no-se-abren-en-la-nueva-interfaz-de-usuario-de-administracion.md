---
title: 'Los pedidos que contienen artículos del conjunto «MarketplaceItems» no se abren en la nueva interfaz de usuario de administración'
slug: los-pedidos-que-contienen-articulos-del-conjunto-marketplaceitems-no-se-abren-en-la-nueva-interfaz-de-usuario-de-administracion
status: PUBLISHED
createdAt: 2022-09-13T03:01:48.000Z
updatedAt: 2023-09-28T15:01:03.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-with-items-on-array-marketplaceitems-is-not-opening-on-new-ui-admin
locale: es
kiStatus: Fixed
internalReference: 656821
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Algunos pedidos tienen la matriz «marketplace Items» con más artículos que la matriz «items» del pedido JSON. Esta configuración es normal y se aplica, por ejemplo, a las «listas de regalos de boda».
Sin embargo, la nueva interfaz de usuario no está preparada para gestionar este tipo de pedidos con artículos en «marketplace Items» y la página se bloquea con un mensaje de error:


«Lo sentimos, se ha producido un error por nuestra parte.
Inténtalo de nuevo o actualiza la página.
Volver a la lista»

## Simulación

Crea un pedido con el catálogo utilizando la matriz «marketplace Items»; después, puedes intentar ver el pedido en la interfaz de usuario de administración. La interfaz de usuario se bloqueará y mostrará un mensaje de error.

## Workaround

Utiliza la interfaz de usuario antigua para abrir ese pedido.