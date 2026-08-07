---
title: 'Algumas páginas personalizadas não estão sendo retornadas na API de Rotas Personalizadas, o que causa a ausência de entradas no mapa do site.'
slug: algumas-paginas-personalizadas-nao-estao-sendo-retornadas-na-api-de-rotas-personalizadas-o-que-causa-a-ausencia-de-entradas-no-mapa-do-site
status: PUBLISHED
createdAt: 2025-11-05T20:23:46.000Z
updatedAt: 2026-08-07T16:55:08.000Z
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

Em lojas com um grande volume de rotas registradas no Rewriter, algumas páginas personalizadas não aparecem na resposta da API de Rotas Personalizadas (`/_v/public/sitemap/custom-routes`) e estão ausentes do sitemap gerado. O processo de geração tem um limite de varredura e pode ser interrompido antes de ler todas as rotas quando a conta possui um grande número de entradas desatualizadas/expiradas, fazendo com que algumas páginas válidas sejam ignoradas silenciosamente.

## Simulação

- Identificar uma conta com um grande volume de rotas registradas no Rewriter.

- Chamar a API de Rotas Personalizadas e confirmar que algumas páginas personalizadas conhecidas estão ausentes da resposta.

- Acessar o sitemap gerado para a loja e confirmar que as mesmas páginas também estão ausentes lá.

## Workaround

N/A