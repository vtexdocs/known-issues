---
title: 'El botón «Publicar» no responde de forma intermitente al crear o actualizar productos en el Portal del vendedor'
slug: el-boton-publicar-no-responde-de-forma-intermitente-al-crear-o-actualizar-productos-en-el-portal-del-vendedor
status: PUBLISHED
createdAt: 2026-03-25T17:03:32.388Z
updatedAt: 2026-03-25T17:03:32.388Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: publish-button-intermittently-unresponsive-in-seller-portal-product-creationupdate
locale: es
kiStatus: Backlog
internalReference: 1383511
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En algunas cuentas del Portal del vendedor, al hacer clic en el botón «Publicar» durante la creación o actualización de un producto, en ocasiones no ocurre nada y no aparece la ventana emergente de confirmación. A veces, la ventana emergente sí aparece, pero el botón «Actualizar» que aparece a continuación no realiza ninguna acción. El problema se reproduce en varios vendedores y navegadores, pero no de forma determinista, y parece estar relacionado con un flujo de interfaz de usuario en el que se envía el cambio, pero la interfaz se bloquea. Los casos afectados incluyen la creación de nuevos productos y la actualización de los existentes a través del Portal del vendedor.

## Simulación

1) Abre el Portal del vendedor y empieza a crear un nuevo producto o abre un producto existente para editarlo. Utiliza datos de producto típicos;
2) Haga clic en el botón «Publicar». Observe que, de forma intermitente, la ventana modal de confirmación no se abre y no se muestra ningún error en la interfaz de usuario;
3) Compruebe la pestaña «Red» de las Herramientas de desarrollo del navegador (F12); en los registros no se han ejecutado las funciones `createProduct` ni `updateProduct`.

## Workaround

Registre el producto a través de la API del Portal del vendedor.