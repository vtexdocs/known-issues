---
title: 'Amazon La interfaz de usuario de Listing no habilita «Guardar y enviar» y bloquea la publicación de SKU para el tipo de producto VITAMIN.'
slug: amazon-la-interfaz-de-usuario-de-listing-no-habilita-guardar-y-enviar-y-bloquea-la-publicacion-de-sku-para-el-tipo-de-producto-vitamin
status: PUBLISHED
createdAt: 2026-02-04T17:26:32.918Z
updatedAt: 2026-02-04T17:26:32.918Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-ui-doesnt-enable-save-and-send-and-blocks-sku-publication-for-vitamin-producttype
locale: es
kiStatus: Fixed
internalReference: 1347282
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

 Corrección implementada en producción. Visualmente, el cambio principal es la aparición del botón **«Añadir vitaminas y minerales»**, que permite insertar un nuevo bloque con los campos relacionados.
**Nota:** puede ser necesario limpiar los datos de SKU si el usuario encuentra nuevos problemas al rellenar la información. En la interfaz de usuario de Amazon Listing, los listados aparecen como «incompletos» y la acción «Guardar y enviar» no publica el SKU, incluso cuando todos los campos parecen estar rellenados. El síntoma visible es que el botón no está habilitado o, al hacer clic en él, no se envía nada, sin que se muestre ningún error de validación. El problema se ha identificado al publicar productos con el tipo de producto «VITAMIN», en los que la interfaz no envía correctamente algunos atributos dentro de nutritional_info al backend/Amazon, lo que impide la creación/publicación del feed. #### Simulación

## Workaround

