---
title: 'Las tiendas heredadas redirigen a una categoría vacía cuando solo hay productos similares'
slug: las-tiendas-heredadas-redirigen-a-una-categoria-vacia-cuando-solo-hay-productos-similares
status: PUBLISHED
createdAt: 2026-05-28T20:25:12.000Z
updatedAt: 2026-06-02T22:20:31.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-stores-redirect-to-empty-category-when-there-are-only-similars
locale: es
kiStatus: Backlog
internalReference: 1413684
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, existe la opción de registrar una categoría similar en el módulo del catálogo, lo que hará que los productos de dicha categoría también se muestren en los resultados de búsqueda de la primera.

Sin embargo, si la categoría principal no tiene productos disponibles, el sistema redirige al usuario a una página de «no encontrado» antes de entrar en la lógica de recuperar los artículos similares; por lo tanto, nunca se cargan los productos similares.

## Simulación

1 - En una categoría sin artículos disponibles ni visibles, registra una categoría similar con artículos activos y visibles.
2 - Intenta cargar la primera categoría; no se mostrará nada.
3 - Añade al menos un artículo visible en la primera categoría; se mostrarán todos.

## Workaround

Añade al menos un artículo, aunque esté configurado como «mostrar si no está disponible», en la categoría principal.