---
title: 'La función «addToCart» no funciona correctamente con los archivos adjuntos y los archivos adjuntos de los componentes de las opciones de montaje'
slug: la-funcion-addtocart-no-funciona-correctamente-con-los-archivos-adjuntos-y-los-archivos-adjuntos-de-los-componentes-de-las-opciones-de-montaje
status: PUBLISHED
createdAt: 2023-05-23T15:40:20.000Z
updatedAt: 2023-05-23T15:40:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-function-doesnt-work-correctly-with-attachments-and-assembly-options-components-attachment
locale: es
kiStatus: Backlog
internalReference: 830495
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función `addToCart` no funciona correctamente cuando un producto tiene configuradas opciones de montaje y accesorios, y uno de los componentes de las opciones de montaje también tiene accesorios. Solo se añadirá al carrito el accesorio de ese componente.

## Simulación

- Configure un accesorio para un producto;
- Configure opciones de montaje para el mismo producto en el que uno de los componentes tenga accesorios;
- Añada el producto al carrito, seleccionando los accesorios del producto y del componente;
- Acceda a la caja y compruebe que el accesorio del producto no se ha añadido.

## Workaround

provisional**
N/A