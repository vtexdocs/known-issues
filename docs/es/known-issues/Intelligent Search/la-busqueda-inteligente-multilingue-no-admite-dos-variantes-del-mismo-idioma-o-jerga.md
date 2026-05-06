---
title: 'La búsqueda inteligente multilingüe no admite dos variantes del mismo idioma o jerga.'
slug: la-busqueda-inteligente-multilingue-no-admite-dos-variantes-del-mismo-idioma-o-jerga
status: PUBLISHED
createdAt: 2023-06-09T23:41:19.000Z
updatedAt: 2026-01-27T19:36:01.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-multilanguage-doesnt-support-2-variations-of-the-same-languageidiom
locale: es
kiStatus: Backlog
internalReference: 841704
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Cuando se utiliza más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que haga referencia dicha configuración regional; si se utiliza más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que haga referencia dicha configuración regional.

Cuando se utilizan dos variantes de configuración regional diferentes del mismo idioma (por ejemplo, `en-US` y `en-GB` o `en-CA`), las traducciones en la Búsqueda inteligente no funcionarán correctamente porque las consideraremos todas como el mismo idioma (`english`). Solo se utilizarán los valores de una de ellas (normalmente la que aparece primero).

Solo hay dos excepciones:

- `pt-BR` y `pt-PT`
- `es-ES` y `ca-ES`

## Simulación

Si tienes una lista de enlaces con varios idiomas e intentas utilizar la internacionalización para el mismo idioma raíz, no funcionará.

## Workaround

N/A