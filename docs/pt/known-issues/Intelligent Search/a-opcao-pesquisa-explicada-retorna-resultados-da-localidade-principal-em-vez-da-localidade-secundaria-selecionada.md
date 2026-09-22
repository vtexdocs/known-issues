---
title: 'A opção "Pesquisa explicada" retorna resultados da localidade principal em vez da localidade secundária selecionada.'
slug: a-opcao-pesquisa-explicada-retorna-resultados-da-localidade-principal-em-vez-da-localidade-secundaria-selecionada
status: PUBLISHED
createdAt: 2026-03-10T17:16:30.000Z
updatedAt: 2026-09-22T16:51:07.000Z
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

Em **Administração > Loja Virtual > Busca Inteligente > Busca Explicada**, o resultado da busca recupera produtos do idioma principal em vez do idioma secundário quando este é selecionado.

## Simulação

1. Na Administração do VTEX, acesse **Loja Virtual > Busca Inteligente > Busca Explicada**.

2. No seletor de **Idioma** da **Busca Explicada**, selecione o idioma secundário (por exemplo, `es-AR`).

3. Busque um termo que tenha:

- Produtos indexados e visíveis em ambos os idiomas, mas

- Diferenças claras entre os idiomas (por exemplo, nomes traduzidos).

4. Observe que o resultado da busca recupera produtos do idioma principal (`en-US`), mesmo que o **idioma secundário** (`es-AR`) esteja selecionado na Busca Explicada.

## Workaround

N/A