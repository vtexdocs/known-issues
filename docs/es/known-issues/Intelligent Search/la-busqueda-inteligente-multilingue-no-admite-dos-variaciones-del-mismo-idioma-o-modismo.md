---
title: 'La búsqueda inteligente multilingüe no admite dos variaciones del mismo idioma o modismo.'
slug: la-busqueda-inteligente-multilingue-no-admite-dos-variaciones-del-mismo-idioma-o-modismo
status: PUBLISHED
createdAt: 2023-06-09T23:41:19.000Z
updatedAt: 2026-10-06T17:22:48.000Z
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

Cuando se utilizan varias configuraciones regionales en la cuenta, la traducción se realiza en función del idioma al que se refiere cada configuración regional.

Cuando se utilizan dos variantes regionales diferentes del mismo idioma (por ejemplo, `en-US` y `en-GB` o `en-CA`), las traducciones en la Búsqueda Inteligente no funcionan correctamente, ya que se consideran todas como el mismo idioma (`inglés`). Solo se utilizarán los valores de una de ellas (normalmente la primera).

Existen dos excepciones:

- `pt-BR` y `pt-PT`
- `es-ES` y `ca-ES`

## Simulación

Si tiene una lista de enlaces con varios idiomas e intenta usar la internacionalización para el mismo idioma raíz, no funcionará.

## Workaround

N/A