---
title: Amazon Listing Atributo obligatorio no mostrado en la interfaz de usuario de Amazon Listing impide el envío de productos
slug: amazon-listing-atributo-obligatorio-no-mostrado-en-la-interfaz-de-usuario-de-amazon-listing-impide-el-envio-de-productos
status: PUBLISHED
createdAt: 2025-10-14T14:51:53.426Z
updatedAt: 2025-10-14T14:51:53.426Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-listing-required-attribute-not-rendered-in-amazon-listing-ui-prevents-product-submission
locale: es
kiStatus: Backlog
internalReference: 1307340
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Al intentar enviar un producto a Amazon a través del administrador de Amazon Listing, la interfaz de usuario muestra "Revise algunos atributos para que el carrito se envíe correctamente" pero no muestra el campo de atributo requerido, bloqueando el envío incluso cuando todos los campos visibles están rellenados. El síntoma visible es un error de validación persistente y, en algunos casos, un error genérico posterior vinculado a un 500. Los usuarios afectados son comerciantes que utilizan la interfaz de usuario de Amazon Listing en la que la validación del backend solicita un tipo de atributo que el frontend no puede procesar (por ejemplo, "color"), por lo que el comerciante no puede completar la asignación y continuar.


#### Simulación


(ejemplos citados por PS: /admin/amazon-listing/skuid


1. 1. Intente proceder con el envío; observe el mensaje que solicita revisar los atributos a pesar de que no hay nuevos campos obligatorios visibles en la interfaz de usuario.
2. En algunos casos, aparece un error genérico de la interfaz de usuario; las pruebas indican un 500 relacionado con la validación del esquema cuando la URL de una imagen o la carga útil de un atributo están mal formadas, pero el problema principal es que la interfaz de usuario no muestra un atributo obligatorio (por ejemplo, "color").
3.

3. Ingeniería ha validado que la respuesta del backend incluye un tipo de campo que el frontend no sabe cómo procesar, por lo que el comerciante no puede rellenarlo, lo que provoca el bloqueo.



 ![](https://vtexhelp.zendesk.com/attachments/token/J2hAuu3IyvsJ9roGagvoaLGLT/?name=image.png)


#### Workaround


N/A



