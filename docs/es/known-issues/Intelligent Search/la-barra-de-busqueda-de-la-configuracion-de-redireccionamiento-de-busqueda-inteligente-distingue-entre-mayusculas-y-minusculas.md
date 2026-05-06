---
title: 'La barra de búsqueda de la configuración de redireccionamiento de búsqueda inteligente distingue entre mayúsculas y minúsculas'
slug: la-barra-de-busqueda-de-la-configuracion-de-redireccionamiento-de-busqueda-inteligente-distingue-entre-mayusculas-y-minusculas
status: PUBLISHED
createdAt: 2021-04-28T23:23:02.000Z
updatedAt: 2024-10-01T14:14:44.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: es
kiStatus: Fixed
internalReference: 361894
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

La página de configuración de «Redireccionamiento de búsqueda inteligente» cuenta con una barra de búsqueda para ayudar a encontrar ajustes de redireccionamiento específicos, pero distingue entre mayúsculas y minúsculas y solo encontrará los términos si coinciden exactamente.

## Simulación

Acceda a `/admin/search/redirects`.

Busque el nombre de una configuración, pero cambiando una letra a mayúscula. La búsqueda no arrojará ningún resultado.

## Workaround

Genere nombres de rutas con un patrón coherente: solo minúsculas, solo mayúsculas o en camel case.