---
title: 'Validación de archivos adjuntos solo en el marketplace al añadir un artículo de un vendedor que incluya archivos adjuntos'
slug: validacion-de-archivos-adjuntos-solo-en-el-marketplace-al-anadir-un-articulo-de-un-vendedor-que-incluya-archivos-adjuntos
status: PUBLISHED
createdAt: 2023-12-22T18:18:42.000Z
updatedAt: 2023-12-22T18:18:42.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: attachment-validation-only-in-the-marketplace-when-adding-an-item-from-a-seller-with-attachment
locale: es
kiStatus: Backlog
internalReference: 957343
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al añadir un artículo de un vendedor con un archivo adjunto en la misma solicitud de API, la validación del archivo adjunto se realiza únicamente en el marketplace.

**Escenario 1:**
Si el marketplace tiene el mismo nombre de archivo adjunto y las claves difieren de las del vendedor, aparecerá el mensaje de error «El archivo adjunto del artículo tiene un valor de clave no válido» y el artículo no se añadirá al carrito.

**Escenario 2:**
Si el marketplace no tiene el mismo archivo adjunto, se mostrará el mensaje de error «El nombre del archivo adjunto no es válido» y el artículo no se añadirá al carrito.

Este comportamiento se produce en ambas API para añadir artículos: Añadir artículos al carrito y Gestionar artículos del carrito.

## Simulación

- Configura el mismo archivo adjunto en el marketplace y en el vendedor con claves de campo diferentes;
- Asócialo a un artículo;
- Añade el artículo mediante Añadir artículos al carrito o Gestionar artículos del carrito, con archivos adjuntos.


- Configure un archivo adjunto en el vendedor y asócielo a un artículo;
- Añada el artículo mediante «Añadir artículos al carrito» o «Gestionar artículos del carrito», con archivos adjuntos.

## Workaround

- Añada primero el artículo y después el archivo adjunto en solicitudes diferentes. Para enviar el archivo adjunto, puede:
  - enviar los archivos adjuntos mediante «Gestionar artículos del carrito»;
  - enviar los archivos adjuntos mediante «Añadir un archivo adjunto a un artículo», por ejemplo:

    curl --location 'https://{accountName}.{environment}.com.br/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/attachments/{attachmentName}' \--header 'Content-Type: application/json' \--data '{  "content": { "key": "value"  },  "noSplitItem": true}'