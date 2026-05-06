---
title: 'La tabla de tallas de MELI no funciona con las tallas que incluyen letras'
slug: la-tabla-de-tallas-de-meli-no-funciona-con-las-tallas-que-incluyen-letras
status: PUBLISHED
createdAt: 2023-07-24T12:04:04.000Z
updatedAt: 2023-09-12T15:04:30.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-size-chart-not-working-for-sizes-with-letters
locale: es
kiStatus: Fixed
internalReference: 867262
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, nuestra función de tabla de tallas MELI no funciona con tallas que incluyen letras, por ejemplo:

Talla = «P», «M», «G».

## Simulación

En la pantalla del mapeador, vemos que la función de tabla de tallas está disponible para la integración MELI. Por lo tanto, si los vendedores asignan una talla con valores en forma de letras, no funcionará y aparecerá un mensaje de error en el producto puente como se muestra a continuación:

«El valor del atributo SIZE no es válido: P. Este valor debe coincidir con el de la tabla de tallas.»

## Workaround

Actualmente, las tallas funcionan con números, por lo que los vendedores pueden utilizar números en lugar de letras.