---
title: 'Al cambiar de modo de editor html en la descripción del producto se eliminan las etiquetas <p>.'
slug: al-cambiar-de-modo-de-editor-html-en-la-descripcion-del-producto-se-eliminan-las-etiquetas-p
status: PUBLISHED
createdAt: 2025-10-16T20:46:48.637Z
updatedAt: 2025-10-16T20:46:48.637Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: switching-from-html-editor-mode-in-product-description-removes-p-tags
locale: es
kiStatus: Backlog
internalReference: 1208549
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, en el nuevo editor de descripción de catálogo para productos, si cambia la vista del modo normal a HTML, podrá ver todas las etiquetas que el formato HTML actual está utilizando en el texto.

Si inserta manualmente una etiqueta de apertura y cierre de párrafo <p></p> en el editor y vuelve al modo normal, estas etiquetas se eliminarán automáticamente y no se creará ningún párrafo.


#### Simulación


1 - en una descripción de producto con más de 2 párrafos, cambie al modo editor HTML disponible pulsando el botón </> en la parte inferior

 ![](https://vtexhelp.zendesk.com/attachments/token/4WtexfuFAhq9kNA6yCac7kXeS/?name=image.png)

2 - añada manualmente un conjunto de etiquetas <p> </p>.

3 - volver al modo normal

4 - cambiar de nuevo al modo HTML, las etiquetas <p> ya no estarán presentes

## Workaround


Utilice el antiguo editor de texto del catálogo o no cambie al modo de edición HTML cuando edite las descripciones de los productos.

O

Cree descripciones de productos a través de hojas/API



