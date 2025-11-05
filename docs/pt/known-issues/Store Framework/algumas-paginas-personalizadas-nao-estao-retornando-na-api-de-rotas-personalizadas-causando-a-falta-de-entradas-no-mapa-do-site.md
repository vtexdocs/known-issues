---
title: 'Algumas páginas personalizadas não estão retornando na API de rotas personalizadas, causando a falta de entradas no mapa do site.'
slug: algumas-paginas-personalizadas-nao-estao-retornando-na-api-de-rotas-personalizadas-causando-a-falta-de-entradas-no-mapa-do-site
status: PUBLISHED
createdAt: 2025-11-05T17:24:25.207Z
updatedAt: 2025-11-05T17:24:25.207Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: some-custom-pages-are-not-returning-in-custom-routes-api-causing-missing-entries-in-the-sitemap
locale: pt
kiStatus: Backlog
internalReference: 1319581
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em lojas com um grande número de páginas personalizadas, algumas delas não aparecem na API de rotas personalizadas, o que impede que sejam incluídas no mapa do site da loja.
## Simulação



- Identifique uma conta que tenha um grande volume de rotas personalizadas.
- Faça uma chamada para a API de rotas personalizadas para listar as rotas.
- Verifique a resposta e observe que algumas páginas personalizadas criadas não estão listadas no retorno.
- Acesse o novo mapa do site gerado para a loja.
- Verifique se as páginas ausentes na resposta da API também não estão presentes no mapa do site
## Workaround


N/A



