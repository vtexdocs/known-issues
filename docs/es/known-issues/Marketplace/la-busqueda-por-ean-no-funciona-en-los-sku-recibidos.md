---
title: 'La búsqueda por EAN no funciona en los SKU recibidos'
slug: la-busqueda-por-ean-no-funciona-en-los-sku-recibidos
status: PUBLISHED
createdAt: 2022-01-26T16:22:22.000Z
updatedAt: 2024-01-25T16:18:32.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: search-by-ean-not-working-on-received-skus
locale: es
kiStatus: Fixed
internalReference: 510907
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La función de búsqueda de SKU recibidos permite al marketplace buscar un producto o SKU según los siguientes criterios:
- Nombre del SKU;
- ID;
- EAN.

Actualmente, la búsqueda por EAN no funciona como se esperaba, ya que no ofrece ningún resultado.

## Simulación

Intente encontrar un SKU buscándolo mediante su EAN.
El resultado debería ser el SKU en lugar de un espacio en blanco.

## Workaround

Utilice los otros criterios de búsqueda, como el nombre del SKU o el ID.