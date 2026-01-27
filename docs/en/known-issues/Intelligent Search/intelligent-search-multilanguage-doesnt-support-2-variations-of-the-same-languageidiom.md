---
title: "Intelligent Search multilanguage doesn't support 2 variations of the same language/idiom"
slug: intelligent-search-multilanguage-doesnt-support-2-variations-of-the-same-languageidiom
status: PUBLISHED
createdAt: 2026-01-27T16:36:38.727Z
updatedAt: 2026-01-27T16:36:38.727Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-multilanguage-doesnt-support-2-variations-of-the-same-languageidiom
locale: en
kiStatus: Backlog
internalReference: 841704
---

## Summary


When we use more than one locale in the account, the translation will be done based on the language in which the locale refers, and if we use more than one locale in the account, the translation will be done based on the language in which the locale refers.

When two different locale variations of the same language are used (i.e. `en-US` and `en-GB` or `en-CA`), the translations in Intelligent Search won't work properly because we will consider all of them as the same language (`english`). Only values for one of them (usually the one that comes first) will be used.

There are only two exceptions:

- `pt-BR` and `pt-PT`
- `es-ES` and `ca-ES`


#### Simulation


If you have a Binding list with multiple languages and try to use internationalization for the same root language, it will not work.


#### Workaround


N/A



