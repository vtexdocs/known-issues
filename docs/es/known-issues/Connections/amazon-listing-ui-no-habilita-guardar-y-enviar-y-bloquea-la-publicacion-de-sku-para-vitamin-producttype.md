---
title: 'Amazon Listing UI no habilita "Guardar y Enviar" y bloquea la publicación de SKU para VITAMIN productType'
slug: amazon-listing-ui-no-habilita-guardar-y-enviar-y-bloquea-la-publicacion-de-sku-para-vitamin-producttype
status: PUBLISHED
createdAt: 2026-01-06T19:10:01.014Z
updatedAt: 2026-01-06T19:10:01.014Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-ui-doesnt-enable-save-and-send-and-blocks-sku-publication-for-vitamin-producttype
locale: es
kiStatus: Backlog
internalReference: 1347282
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


En la interfaz de usuario de Amazon Listing, los listados aparecen como "incompletos" y la acción "Guardar y enviar" no publica el SKU, incluso cuando todos los campos parecen rellenados. El síntoma visible es que el botón no está habilitado o, cuando se hace clic, no se envía nada, sin que se muestre ningún error de validación. El problema se ha identificado al publicar productos con productType "VITAMIN", donde el frontend no está enviando correctamente algunos atributos dentro de nutritional_info al backend/Amazon, lo que impide la creación/publicación del feed.


#### Simulación


Requisitos previos:

- Cuenta con integración de Amazon habilitada
- Un producto asignado a Amazon con productType establecido en VITAMIN y atributos nutricionales rellenados.

Pasos a seguir:
1) Acceda a Admin > Amazon Listing y abra el listado (ejemplo: /admin/amazon-listing/2564).
2) Rellene todos los campos requeridos en la interfaz de usuario, incluidos los campos nutricionales aplicables a VITAMIN.
3) Intente hacer clic en "Guardar y enviar".
4) Observe que:

- La IU puede mantener el estado como "Cadastro incompleto" (incompleto), y/o
- El botón "Guardar y enviar" no está habilitado o, si está habilitado y se hace clic en él, no se produce ninguna publicación ni se muestra ningún error explícito.
5) El análisis de ingeniería indica que el frontend no está enviando correctamente algunos atributos nutritional_info (sólo se observa con productType VITAMIN), lo que bloquea la publicación al enviar.

 ![](https://vtexhelp.zendesk.com/attachments/token/LoTVimTHn1TdZjtptWXaBAjE4/?name=image.png)

## Workaround


N/A


