---
title: 'A Pesquisa explicada retorna resultados da localidade principal em vez da localidade secundária selecionada.'
slug: a-pesquisa-explicada-retorna-resultados-da-localidade-principal-em-vez-da-localidade-secundaria-selecionada
status: PUBLISHED
createdAt: 2026-03-10T14:17:01.154Z
updatedAt: 2026-03-10T14:17:01.154Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: explained-search-returns-results-from-main-locale-instead-of-selected-secondary-locale
locale: pt
kiStatus: Backlog
internalReference: 1376133
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em **Admin > Loja virtual > Pesquisa inteligente > Pesquisa explicada**, o resultado da pesquisa recupera produtos da localidade principal em vez da localidade secundária quando a localidade secundária é selecionada.

## Simulação

1. No Admin da VTEX, acesse **Loja virtual > Pesquisa inteligente > Pesquisa explicada**.
2. No seletor **Localidade** da **Pesquisa explicada**, selecione a localidade secundária (por exemplo, `es-AR`). 3. Pesquise um termo que tenha: - Produtos indexados e visíveis em ambas as localidades, mas - Diferenças claras entre as localidades (por exemplo, nomes traduzidos).
4. Observe que o resultado da pesquisa recupera produtos do idioma principal (`en-US`), mesmo que o **idioma secundário** (`es-AR`) esteja selecionado na Pesquisa explicada.

## Workaround

N/A