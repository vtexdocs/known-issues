---
title: 'La exportación de la tabla de precios calculados no incluye todas las referencias'
slug: la-exportacion-de-la-tabla-de-precios-calculados-no-incluye-todas-las-referencias
status: PUBLISHED
createdAt: 2022-12-23T13:40:41.000Z
updatedAt: 2024-12-19T13:57:35.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: calculated-price-table-export-not-bringing-all-skus
locale: es
kiStatus: Backlog
internalReference: 722005
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al exportar la tabla de precios calculados desde la interfaz de usuario del módulo de precios, no todos los SKU se incluyen de forma sistemática en el archivo exportado. El número de filas de la hoja de cálculo exportada puede variar de una exportación a otra, lo que a veces da lugar a un número de SKU inferior al esperado.

## Simulación

Este problema es intermitente, pero se puede observar de la siguiente manera:

1. Accede a la interfaz de usuario del módulo de precios.
2. Asegúrese de que no se haya aplicado ningún filtro.
3. Exporte la tabla de precios calculados.
4. Compare el número de filas de la hoja de cálculo exportada.
5. Repita el proceso de exportación varias veces. En algunos intentos, la hoja de cálculo puede tener menos filas que en exportaciones anteriores.

## Workaround

provisional**
Para garantizar resultados precisos:

- Exporte la tabla de precios calculados varias veces y compare las hojas de cálculo para verificar el número de filas de la tabla de precios.
- Utilice la exportación con el mayor número de filas como referencia para la tabla de precios calculados completa.