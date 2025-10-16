---
title: KIt Price Deletion no funciona
slug: kit-price-deletion-no-funciona
status: PUBLISHED
createdAt: 2025-10-16T20:54:28.585Z
updatedAt: 2025-10-16T20:54:28.585Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-price-deletion-not-working
locale: es
kiStatus: Backlog
internalReference: 1234002
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, cuando se intenta eliminar un precio fijo que pertenece a un kit (paquete) en la administración de precios, el proceso no funciona.


#### Simulación


1 - Para un artículo que es un skukit (el padre, que se compone de 1+ componentes) intente acceder a su UI de administración de precios --> https://.myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10

2 - Intenta borrar un precio fijo que pertenezca a dicho artículo --> no pasará nada

## Workaround


Eliminar dichos precios a través de la API



