---
title: 'La búsqueda inteligente multilingüe no admite dos variantes del mismo idioma o dialecto.'
slug: la-busqueda-inteligente-multilingue-no-admite-dos-variantes-del-mismo-idioma-o-dialecto
status: PUBLISHED
createdAt: 2026-01-27T16:36:55.142Z
updatedAt: 2026-01-27T16:36:55.142Z
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

 Cuando utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que hace referencia la configuración regional, y si utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que hace referencia la configuración regional.

Cuando se utilizan dos variaciones de configuración regional diferentes del mismo idioma (por ejemplo, `en-US` y `en-GB` o `en-CA`), las traducciones en la búsqueda inteligente no funcionarán correctamente, ya que consideraremos que todas ellas pertenecen al mismo idioma (`inglés`). Solo se utilizarán los valores de una de ellas (normalmente la que aparece en primer lugar).

Solo hay dos excepciones: - «pt-BR» y «pt-PT» - «es-ES» y «ca-ES» #### Simulación

## Workaround

