---
title: 'Tiempo de espera para importar SKU y productos'
slug: tiempo-de-espera-para-importar-sku-y-productos
status: PUBLISHED
createdAt: 2025-10-16T20:44:02.726Z
updatedAt: 2025-10-16T20:44:02.726Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: skus-products-import-timeout
locale: es
kiStatus: Backlog
internalReference: 1201280
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Actualmente, el módulo de catálogo puede presentar un timeout en cualquiera de sus operaciones si la cantidad de datos utilizados es demasiado grande.

El módulo "Importar y Exportar" es una de ellas. Dependiendo de la cantidad de productos, skus y datos relacionados en las hojas importadas, también de la cantidad de datos asociados a estos, la operación puede tardar demasiado en procesarse (más de 50s) y eventualmente dar lugar a un error de timeout.


#### Simulación


Este problema es difícil de simular a menos que el usuario tenga una configuración de catálogo específica. Intente importar hojas grandes (más de 1k registros) para usuarios con un catálogo complejo, posiblemente, se enfrentarán al problema de tiempo de espera.

## Workaround


Divida sus datos en trozos más pequeños.



