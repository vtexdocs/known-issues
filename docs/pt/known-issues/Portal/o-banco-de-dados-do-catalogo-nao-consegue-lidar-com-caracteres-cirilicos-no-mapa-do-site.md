---
title: 'O banco de dados do catálogo não consegue lidar com caracteres cirílicos no mapa do site.'
slug: o-banco-de-dados-do-catalogo-nao-consegue-lidar-com-caracteres-cirilicos-no-mapa-do-site
status: PUBLISHED
createdAt: 2022-12-13T20:06:46.000Z
updatedAt: 2026-08-14T23:25:14.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: catalog-database-cannot-handle-cyrillic-characters-on-sitemap
locale: pt
kiStatus: Fixed
internalReference: 715686
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, o banco de dados do catálogo não consegue lidar com caracteres cirílicos e alguns caracteres do alfabeto romeno. Como resultado, links de texto e URLs são gerados incorretamente, afetando o mapa do site, o tipo de página, os títulos das tags, o caminho de navegação, etc.

## Simulação

1. Crie uma categoria com um caractere cirílico.
2. Verifique o mapa do site acessando `https://.myvtex.com/sitemap.xml`.
3. Verifique o mapa do site da categoria e observe que a categoria criada em (1) não será processada.

## Workaround

Abra um chamado e a equipe de produto ajustará a biblioteca do banco de dados da conta.