---
title: 'Producto devuelto como no disponible incluso con stock en un vendedor de marca blanca'
slug: producto-devuelto-como-no-disponible-incluso-con-stock-en-un-vendedor-de-marca-blanca
status: PUBLISHED
createdAt: 2025-11-26T20:40:33.870Z
updatedAt: 2025-11-26T20:40:33.870Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: es
kiStatus: No Fix
internalReference: 404499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Para las tiendas que utilizan el CMS heredado (Portal) o mientras utilizan la API de búsqueda en el catálogo, si un producto está agotado en el mercado y sólo está disponible en un vendedor de marca blanca, y si el producto no está configurado como "mostrar agotado", se considerará no disponible. La PDP se comportará como una página 404; además, no se devolverá en la API.

Este escenario también afecta a la PDP de las tiendas que utilizan el VTEX IO Store Framework, que se basan en la API de búsqueda de catálogo.

Esto no ocurre con la Búsqueda Inteligente, que proporciona soporte completo para este escenario cuando se utiliza la regionalización de búsqueda.


#### Simulación



- Registrar existencias sólo en una cuenta de franquicia.
- Desactivar la bandera "Mostrar fuera de stock".
-

El PDP debe comportarse como si el producto no estuviera disponible.


## Workaround


Habilitar "Mostrar fuera de stock" en la cuenta de mercado.


