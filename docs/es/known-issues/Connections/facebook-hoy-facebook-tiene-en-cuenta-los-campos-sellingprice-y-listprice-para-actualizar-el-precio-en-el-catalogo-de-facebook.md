---
title: 'Facebook Hoy, Facebook tiene en cuenta los campos «sellingPrice» y «listPrice» para actualizar el precio en el catálogo de Facebook'
slug: facebook-hoy-facebook-tiene-en-cuenta-los-campos-sellingprice-y-listprice-para-actualizar-el-precio-en-el-catalogo-de-facebook
status: PUBLISHED
createdAt: 2023-10-24T13:15:07.000Z
updatedAt: 2024-04-03T12:40:57.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: facebook-today-facebook-looks-at-sellingprice-and-listprice-to-update-the-price-in-the-facebook-catalog
locale: es
kiStatus: Backlog
internalReference: 924411
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, Facebook tiene en cuenta el «sellingPrice» y el «listPrice» para actualizar el precio en el catálogo de Facebook.

## Simulación

El vendedor utiliza un «unitMultiplier» = 0,5

El proceso de pago realiza el siguiente cálculo cuando el artículo tiene un multiplicador unitario, por lo que sellingPrice = precio * unitMultiplier = 3999 * 0,5 = 1999,5. El redondeo del proceso de pago ignorará el decimal y considerará 1999

¿Cuál es el problema con este cálculo?
Cuando el vendedor utiliza 0,5, por ejemplo, en Facebook lo actualizamos como el precio de liquidación en Facebook.
2. Cuando el vendedor utiliza un multiplicador superior a 1,39, el precio entra dentro del precio promocional aunque sea superior al precio de catálogo

## Workaround

El vendedor utiliza unitMultiplier = 10000