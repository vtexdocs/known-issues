---
title: 'Os campos de tradução da categoria estão sendo sobrescritos no GraphQL do catálogo'
slug: os-campos-de-traducao-da-categoria-estao-sendo-sobrescritos-no-graphql-do-catalogo
status: PUBLISHED
createdAt: 2026-03-20T00:25:34.398Z
updatedAt: 2026-03-20T00:25:34.398Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: category-translation-fields-being-overwritten-on-catalog-graphql
locale: pt
kiStatus: Backlog
internalReference: 654896
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao traduzir conteúdo usando o aplicativo catalog-graphql ou a tradução do catálogo, campos como nome, título ou descrição estão sendo sobrescritos. Esse comportamento ocorre apenas quando a configuração da categoria no idioma de base apresenta valores idênticos para qualquer um desses campos.

## Simulação

- Verifique a configuração da categoria no painel de administração do catálogo
- Verifique se pelo menos dois dos seguintes campos têm valores idênticos na configuração do idioma base: “Nome”, “Título da página da categoria (Título da tag)”, “Descrição da categoria (Descrição da meta tag)”
- Siga a documentação: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

## Workaround

Para evitar o comportamento de sobrescrita, certifique-se de que a configuração da categoria base (no idioma padrão da conta) tenha valores distintos para todos os três campos: Nome, Título da página da categoria (Título da tag) e Descrição da categoria (Descrição da meta tag).