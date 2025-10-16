---
title: A API de pesquisa da Faststore considera o fuzzy como automático por padrão
slug: a-api-de-pesquisa-da-faststore-considera-o-fuzzy-como-automatico-por-padrao
status: PUBLISHED
createdAt: 2025-10-16T20:25:48.118Z
updatedAt: 2025-10-16T20:25:48.118Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considering-fuzzy-as-auto-as-default
locale: pt
kiStatus: Fixed
internalReference: 889321
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


No pacote @fatstore/api, para o resolvedor da Pesquisa Inteligente, estamos considerando o fuzzy como automático por padrão quando deveria ser 0. Isso está fazendo com que o comportamento do fuzzy seja aplicado, causando uma "falsa correspondência incorreta" nos resultados da pesquisa quando realmente temos uma correspondência exata com o termo pesquisado, mas exibimos mais resultados independentemente disso
## Simulação


## Workaround

