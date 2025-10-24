---
title: 'Las traducciones del catálogo no se reflejan en el frontend'
slug: las-traducciones-del-catalogo-no-se-reflejan-en-el-frontend
status: PUBLISHED
createdAt: 2025-09-15T14:16:26.172Z
updatedAt: 2025-09-15T14:16:26.172Z
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


Cuando el comerciante realiza una acción en la aplicación Mensajes para que se traduzcan algunos datos del producto en el frontend, esta acción no se refleja realmente en el escaparate.

## Simulación



1. Realiza un cambio en la aplicación Mensajes;
2. Observa en el `IndexedInfo` que el campo `GenerateAndSaveTranslationsDocument` está configurado como `false`;
3. 3. No vuelva a indexar el producto;
4. 4. Compruebe que el cambio no se ha reflejado en el sitio web traducido.

## Workaround


Para forzar la reindexación de las traducciones de un producto, utilice la siguiente solicitud API:

    curl --request POST 'https://{accountName}.vtexcommercestable.com.br/api/notificator/changenotification/{productId}/translation' \--header 'VtexIdclientAutCookie: {VtexIdclientAutCookie}'



