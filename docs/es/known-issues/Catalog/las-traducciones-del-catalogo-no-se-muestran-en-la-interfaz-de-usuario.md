---
title: 'Las traducciones del catálogo no se muestran en la interfaz de usuario'
slug: las-traducciones-del-catalogo-no-se-muestran-en-la-interfaz-de-usuario
status: PUBLISHED
createdAt: 2023-07-13T22:42:58.000Z
updatedAt: 2025-10-31T21:49:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-translations-not-reflecting-on-the-frontend
locale: es
kiStatus: Backlog
internalReference: 861892
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando el comerciante realiza una acción en la aplicación «Mensajes» para que se traduzcan algunos datos de un producto en la interfaz de usuario, esta acción no se refleja realmente en la tienda online.

## Simulación

1. Realiza un cambio en la aplicación «Mensajes»;
2. Observa en `IndexedInfo` que el campo `GenerateAndSaveTranslationsDocument` está establecido en `false`;
3. No reindexe el producto;
4. Compruebe que el cambio no se ha reflejado en el sitio web traducido.

## Workaround

Para forzar la reindexación de las traducciones de un producto, utilice la siguiente solicitud de API:


    curl --request POST 'https://{accountName}.vtexcommercestable.com.br/api/notificator/changenotification/{productId}/translation' \--header 'VtexIdclientAutCookie: {VtexIdclientAutCookie}'