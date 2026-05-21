---
title: 'Las búsquedas en el historial de autocompletado con el carácter «/» están provocando errores en la página de resultados de búsqueda'
slug: las-busquedas-en-el-historial-de-autocompletado-con-el-caracter-estan-provocando-errores-en-la-pagina-de-resultados-de-busqueda
status: PUBLISHED
createdAt: 2026-05-12T21:29:15.000Z
updatedAt: 2026-05-21T17:19:46.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: autocomplete-history-searches-with-the-character-are-breaking-the-search-result-page
locale: es
kiStatus: Fixed
internalReference: 1405490
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Al realizar búsquedas en tiendas de Store Framework, el componente de autocompletado puede almacenar el historial de búsqueda de la sesión del usuario. Si el usuario ha buscado anteriormente términos que contenían el carácter «/» y vuelve a buscarlos utilizando la lista del historial de autocompletado, la búsqueda no codificará el término de búsqueda en URL y devolverá un resultado diferente al buscado o mostrará una página de búsqueda vacía.

## Simulación

1. Busque productos en una tienda de Store Framework con términos que contengan el carácter «/». Por ejemplo: `zapatos azules 1/2`.
2. Compruebe que el resultado es el esperado según lo buscado y que la URL codifica el carácter «/».
3. Vuelve a la página de inicio (o simplemente borra el texto buscado de la barra de búsqueda). Aparecerá el historial de autocompletado con el término de búsqueda que contiene el carácter «/».
4. Haz clic en él para volver a buscar el término. La página de resultados puede mostrar resultados fuera de contexto o una página de búsqueda vacía.

## Workaround

N/A