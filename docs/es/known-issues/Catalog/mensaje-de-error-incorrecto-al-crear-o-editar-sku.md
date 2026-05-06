---
title: 'Mensaje de error incorrecto al crear o editar SKU'
slug: mensaje-de-error-incorrecto-al-crear-o-editar-sku
status: PUBLISHED
createdAt: 2023-03-20T22:49:59.000Z
updatedAt: 2025-12-05T23:27:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-message-error-when-creatingediting-skus
locale: es
kiStatus: Backlog
internalReference: 774518
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para crear o editar una SKU es necesario rellenar los campos obligatorios, como el peso del envío, la altura, la anchura y la longitud. Sin embargo, si dejamos alguno de estos campos sin un valor válido y guardamos la SKU, Admin muestra un mensaje de error sobre las especificaciones, aunque no haya ningún campo obligatorio que rellenar.

## Simulación

- Vaya al módulo Catálogo
- Añada un nuevo producto y guárdelo para crear un nuevo SKU
- Rellene todos los campos, excepto la información de envío, que es obligatoria
- Guarde el SKU y observe que aparecerán dos mensajes: «Parámetros no válidos» y «Especificaciones no introducidas. Compruebe la pestaña»

## Workaround

No hay ninguna solución alternativa