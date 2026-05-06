---
title: 'El producto aparece como agotado aunque haya existencias en un vendedor de marca blanca'
slug: el-producto-aparece-como-agotado-aunque-haya-existencias-en-un-vendedor-de-marca-blanca
status: PUBLISHED
createdAt: 2021-07-30T17:20:12.000Z
updatedAt: 2025-11-26T23:42:16.000Z
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

En el caso de las tiendas que utilizan el CMS heredado (Portal) o la API de búsqueda en el catálogo, si un producto está agotado en el marketplace y solo está disponible en un vendedor de marca blanca, y si el producto no está configurado como «mostrar agotado», se considerará no disponible. La página de detalles del producto (PDP) se comportará como una página 404; además, no se devolverá en la API.

Este escenario también afecta a la página de detalles del producto (PDP) de las tiendas que utilizan el VTEX IO Store Framework, que se basa en la API de búsqueda de catálogo.

Esto no ocurre con la Búsqueda Inteligente, que ofrece compatibilidad total con este escenario cuando se utiliza la regionalización de la búsqueda.

## Simulación

- Registra el stock únicamente en una cuenta de franquicia.
- Desactive la opción «Mostrar agotado».
- La página de detalles del producto (PDP) debería comportarse como si el producto no estuviera disponible.

## Workaround

provisional**
Active la opción «Mostrar agotado» en la cuenta del marketplace.