---
title: 'Catalog no elimina los caracteres especiales al configurar el enlace de texto'
slug: catalog-no-elimina-los-caracteres-especiales-al-configurar-el-enlace-de-texto
status: PUBLISHED
createdAt: 2023-11-22T16:19:37.000Z
updatedAt: 2026-01-28T15:08:04.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-does-not-remove-special-characters-when-setting-up-the-text-link
locale: es
kiStatus: Backlog
internalReference: 940127
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Uno de los pasos para crear un producto consiste en introducir un slug que represente la URL de la página del producto. Si la URL contiene algún carácter especial, se generará una URL no válida, lo que podría provocar problemas al intentar acceder a la página del producto.
En otras palabras, el catálogo no elimina los caracteres especiales al configurar el enlace de texto, como © ℗ ® ™

## Simulación

Crea un enlace de producto con un carácter especial, por ejemplo, © ℗ ® ™. El catálogo no eliminará los caracteres especiales insertados, lo que provocará problemas en la visualización de la página del producto.

## Workaround

Evita utilizar caracteres especiales en el slug (URL) del producto, pero si se encuentra una URL con un carácter especial, edítala manualmente para eliminar dicho carácter.