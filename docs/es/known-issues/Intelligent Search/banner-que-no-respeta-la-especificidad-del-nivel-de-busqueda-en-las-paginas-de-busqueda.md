---
title: 'Banner que no respeta la especificidad del nivel de búsqueda en las páginas de búsqueda.'
slug: banner-que-no-respeta-la-especificidad-del-nivel-de-busqueda-en-las-paginas-de-busqueda
status: PUBLISHED
createdAt: 2022-04-26T17:24:55.000Z
updatedAt: 2026-09-22T15:45:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: banner-not-respecting-the-specificity-of-the-search-level-in-search-pages
locale: es
kiStatus: Backlog
internalReference: 566809
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Si tenemos un banner para un departamento y otro para una categoría dentro de ese departamento, la consulta del banner no respetará la especificidad del árbol de categorías; siempre obtendrá el primero que aparezca en la API.

Esto se aplica a todo el árbol de categorías o niveles de especificación.

## Simulación

- Vaya a **Administración > Tienda > Banners**.

- Cree un banner para un departamento (debe crearse primero).

- Cree un banner para una categoría dentro de ese departamento.

- Vaya a la página de la categoría (sitio del cliente).

- Se compararán ambos y se mostrará el primero.

## Workaround

Cree los banners en este orden: primero el más específico, al final el más genérico.

Ejemplo de orden:

1. Banners de subcategoría
2. Banners de categoría
3. Banners de departamento

Alternativa: si los banners ya existen en el orden incorrecto, desactívelos y vuelva a activarlos en el mismo orden (subcategoría, luego categoría, luego departamento). Esto coloca los banners genéricos al final de la respuesta de la API.

curl --location 'https://{accountName}.vtexcommercestable.com.br/api/intelligent-search/v1/banners/{facets}?query={query}' \