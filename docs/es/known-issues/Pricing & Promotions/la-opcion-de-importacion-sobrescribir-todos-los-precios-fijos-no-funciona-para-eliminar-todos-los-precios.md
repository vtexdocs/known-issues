---
title: 'La opción de importación "Sobrescribir todos los precios fijos" no funciona para eliminar todos los precios.'
slug: la-opcion-de-importacion-sobrescribir-todos-los-precios-fijos-no-funciona-para-eliminar-todos-los-precios
status: PUBLISHED
createdAt: 2026-07-29T22:31:52.000Z
updatedAt: 2026-07-29T22:31:52.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: overwrite-all-fixed-prices-import-option-does-not-function-to-delete-all-prices
locale: es
kiStatus: Backlog
internalReference: 1441146
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, en la importación de precios, la opción "Sobrescribir todos los precios fijos" no elimina todos los precios. Es necesario especificar al menos una línea de precio fijo por SKU para que el sistema pueda reconocerlo y eliminar todos los demás precios, excepto el especificado.

## Simulación

Pruebe a importar una tabla de precios fijos con la opción "Sobrescribir precios fijos" y solo un SKU. Ningún otro SKU verá sus precios eliminados, por lo que no funciona como una "eliminación masiva de precios fijos".

En cambio, la función de eliminación funciona como se indica a continuación:

![](https://vtexhelp.zendesk.com/attachments/token/Z6DNEJ5tdFTb3eLBfcEoBsnJq/?name=image.png)

## Workaround

Crea una tabla de precios "basura" para establecer precios fijos ficticios. De esta forma, se informará una línea por SKU y se eliminarán todas las demás tablas de precios válidas.