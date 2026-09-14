---
title: 'Valor incorrecto para priceDefinition en el orden de la cadena para un mercado multinivel.'
slug: valor-incorrecto-para-pricedefinition-en-el-orden-de-la-cadena-para-un-mercado-multinivel
status: PUBLISHED
createdAt: 2022-09-22T03:13:24.000Z
updatedAt: 2026-09-14T22:58:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-value-for-pricedefinition-in-the-chain-order-for-a-multilevel-marketplace
locale: es
kiStatus: Fixed
internalReference: 663203
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La propiedad "priceDefinition" para los pedidos en el nivel "chain" de un mercado multinivel no sigue el valor de "sellingPrice" como se espera. En su lugar, sigue el valor de "price".

## Simulación

Cree un pedido con un descuento aplicado desde la capa del mercado (nivel 1), en relación con la capa del vendedor (chain, nivel 2), en una relación multinivel. La capa de cumplimiento (nivel 3) mostrará los valores correctamente, pero la capa "chain" no.

## Workaround

Evite usar la propiedad "priceDefinition" en este tipo de pedidos y realice los cálculos utilizando las propiedades price, quantity, unitMultiplier y priceTag para evitar problemas con "sellingPrice", que no es un valor exacto.