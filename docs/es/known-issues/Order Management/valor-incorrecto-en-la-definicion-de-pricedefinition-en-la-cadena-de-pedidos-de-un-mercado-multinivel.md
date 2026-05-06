---
title: 'Valor incorrecto en la definición de «priceDefinition» en la cadena de pedidos de un mercado multinivel'
slug: valor-incorrecto-en-la-definicion-de-pricedefinition-en-la-cadena-de-pedidos-de-un-mercado-multinivel
status: PUBLISHED
createdAt: 2022-09-22T00:13:24.000Z
updatedAt: 2023-11-27T13:51:29.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-value-for-pricedefinition-in-the-chain-order-for-a-multilevel-marketplace
locale: es
kiStatus: Backlog
internalReference: 663203
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La propiedad «priceDefinition» de los pedidos en el nivel «cadena» de un mercado multinivel no sigue el valor de «sellingPrice» como cabría esperar. En su lugar, sigue el valor de la propiedad «price».

## Simulación

Crea un pedido con un descuento aplicado desde la capa del mercado (nivel 1), en relación con la capa del vendedor (cadena, nivel 2), en una relación multinivel. La capa de cumplimiento (nivel 3) mostrará los valores correctamente, pero la «cadena» no lo hará.

## Workaround

Evita utilizar la propiedad «priceDefinition» en este tipo de pedidos y realiza los cálculos utilizando las propiedades price, quantity, unitMultiplier y priceTag, para evitar problemas con el «sellingPrice», que no es un valor preciso.