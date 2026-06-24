---
title: 'El botón de publicación no responde de forma intermitente en la creación/actualización de productos en el Portal del vendedor.'
slug: el-boton-de-publicacion-no-responde-de-forma-intermitente-en-la-creacionactualizacion-de-productos-en-el-portal-del-vendedor
status: PUBLISHED
createdAt: 2026-03-25T20:02:23.000Z
updatedAt: 2026-06-24T20:19:58.000Z
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

En algunas cuentas del Portal del Vendedor, al hacer clic en el botón "Publicar" durante la creación o actualización de un producto, de forma intermitente no sucede nada y no aparece la ventana emergente de confirmación. En ocasiones, la ventana emergente aparece, pero el botón "Actualizar" no realiza ninguna acción. Los escenarios afectados incluyen la creación de nuevos productos y la actualización de los existentes a través del Portal del Vendedor.

## Simulación

1) Abra el Portal del Vendedor y comience a crear un nuevo producto o abra uno existente para editarlo. Utilice datos de producto típicos;

2) Haga clic en el botón "Publicar". Observe que, de forma intermitente, no se abre la ventana emergente de confirmación y no se muestra ningún error en la interfaz de usuario;

3) Revise la pestaña "Red" de las Herramientas para desarrolladores del navegador (F12); no se registraron las funciones `createProduct` ni `updateProduct` en los registros.

## Workaround

Registre el producto a través de la API del Portal del Vendedor.