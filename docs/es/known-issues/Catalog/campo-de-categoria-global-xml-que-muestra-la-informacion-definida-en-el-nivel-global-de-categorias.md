---
title: 'Campo de categoría global XML que muestra la información definida en el nivel global de categorías.'
slug: campo-de-categoria-global-xml-que-muestra-la-informacion-definida-en-el-nivel-global-de-categorias
status: PUBLISHED
createdAt: 2020-08-26T19:55:27.000Z
updatedAt: 2024-01-23T15:31:56.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-global-category-field-showing-the-information-defined-on-category-global-level
locale: es
kiStatus: No Fix
internalReference: 282231
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

En los archivos XML, el campo «Categoría global» muestra la información de la categoría global definida en el nivel de categoría y no en el nivel de producto (debería darse prioridad al nivel de producto).

## Simulación

- Utilice un producto con una categoría global definida en el producto y una categoría global diferente definida en el nivel de categoría;
- Cree un archivo XML y utilice el campo «Categoría global»;
- Compruebe que el producto aparece en el XML con la categoría global definida en el nivel de categoría.

## Workaround

No hay ninguna solución alternativa.