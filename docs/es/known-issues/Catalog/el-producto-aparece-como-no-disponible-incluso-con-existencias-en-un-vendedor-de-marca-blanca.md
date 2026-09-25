---
title: 'El producto aparece como no disponible incluso con existencias en un vendedor de marca blanca.'
slug: el-producto-aparece-como-no-disponible-incluso-con-existencias-en-un-vendedor-de-marca-blanca
status: PUBLISHED
createdAt: 2021-07-30T17:20:12.000Z
updatedAt: 2026-09-25T16:20:59.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-returning-as-unavailable-even-with-stock-in-a-whitelabel-seller
locale: es
kiStatus: Fixed
internalReference: 404499
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Para las tiendas que utilizan el CMS heredado (Portal) o la API de búsqueda de catálogo, si un producto está agotado en el marketplace y solo está disponible en un vendedor de marca blanca, y si el producto no está configurado como "Mostrar agotado", se considerará no disponible. La página de detalles del producto (PDP) se comportará como una página de error 404; además, no se devolverá en la API.

Este escenario también afecta a la PDP de las tiendas que utilizan el marco de trabajo VTEX IO Store, que se basa en la API de búsqueda de catálogo.

Esto no ocurre con la Búsqueda Inteligente, que ofrece soporte completo para este escenario al usar la regionalización de búsqueda.

## Simulación

- Registre el stock solo en una cuenta de franquicia.

- Desactive la opción "Mostrar agotado".

- La PDP debería comportarse como si el producto no estuviera disponible.

## Workaround

Habilite la opción "Mostrar agotado" en la cuenta del marketplace o utilice la Búsqueda Inteligente.