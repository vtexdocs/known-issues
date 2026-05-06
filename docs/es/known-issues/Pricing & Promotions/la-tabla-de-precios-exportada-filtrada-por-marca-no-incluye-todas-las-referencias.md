---
title: 'La tabla de precios exportada filtrada por marca no incluye todas las referencias'
slug: la-tabla-de-precios-exportada-filtrada-por-marca-no-incluye-todas-las-referencias
status: PUBLISHED
createdAt: 2022-06-07T19:29:26.000Z
updatedAt: 2022-12-12T14:48:47.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: exported-price-table-filtered-by-brand-does-not-bring-all-the-skus
locale: es
kiStatus: Fixed
internalReference: 594075
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al exportar la tabla de precios filtrada por marca para obtener un resultado más específico, la hoja de cálculo que recibe el cliente está incompleta.

Solo se exportan los SKU con precio que aparecen en la primera página (cuando la configuración de la página está establecida en un máximo de 20 resultados).
 ![](https://vtexhelp.zendesk.com/attachments/token/Yfc9U3wsVoOTEIsYsxInZAVcn/?name=image.png)

## Simulación

1. Ve a la Lista de precios de la cuenta;
2. Filtra los resultados por una marca específica (y actualiza la página).
3. Exporta la «Tabla de precios base» o la «Tabla de precios fijos».
4. Comprueba si faltan referencias.

## Workaround

Otra forma de obtener la información de precios de una referencia es utilizando la API: https://developers.vtex.com/vtex-rest-api/reference/getprice