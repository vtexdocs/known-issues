---
title: 'El filtro de referencias recibidas no funciona con caracteres especiales'
slug: el-filtro-de-referencias-recibidas-no-funciona-con-caracteres-especiales
status: PUBLISHED
createdAt: 2023-11-29T17:58:07.000Z
updatedAt: 2023-11-29T17:58:07.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-filter-do-not-work-with-special-characters
locale: es
kiStatus: Backlog
internalReference: 944533
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al intentar filtrar los SKU en el módulo «SKU recibidos», el marketplace puede elegir filtrar por vendedor, categoría y/o marca.

Sin embargo, al seleccionar una marca que contiene caracteres especiales (como «&» o «+»), el resultado es que no hay ningún SKU en ese filtro, lo cual no es correcto.

## Simulación

1. Filtra por una de las opciones del módulo «SKU recibidos»;
2. Selecciona un valor con un carácter especial;
3. Comprueba que el resultado es que no hay SKU;
4. Ahora busca por el valor en el buscador y comprueba que, de hecho, sí hay algunos SKU.

## Workaround

No hay ninguna solución alternativa para arreglar el filtro, pero utilizar el buscador podría ofrecer un resultado similar al de los SKU.