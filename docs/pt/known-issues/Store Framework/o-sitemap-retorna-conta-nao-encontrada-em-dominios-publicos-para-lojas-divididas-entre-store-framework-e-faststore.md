---
title: 'O Sitemap retorna "Conta não encontrada" em domínios públicos para lojas divididas entre Store Framework e FastStore.'
slug: o-sitemap-retorna-conta-nao-encontrada-em-dominios-publicos-para-lojas-divididas-entre-store-framework-e-faststore
status: PUBLISHED
createdAt: 2026-08-24T17:38:37.000Z
updatedAt: 2026-08-24T17:38:37.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: sitemap-returns-account-not-found-on-public-domains-for-stores-split-between-store-framework-and-faststore
locale: pt
kiStatus: Backlog
internalReference: 1451253
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Lojas com divisão de tráfego ativa entre VTEX IO e FastStore não conseguem exibir o arquivo `/sitemap.xml` em seus domínios públicos (apex e `www`) — o erro retornado é `400 – Conta não encontrada`. Domínios internos (`{account}.myvtex.com`, `{account}.vtexcommercestable.com.br`) funcionam corretamente para a mesma conta. A equipe de engenharia confirmou que o design de divisão atual é incompatível com a exibição do sitemap nessas lojas.

## Simulação

- Crie uma loja com divisão de tráfego ativa entre IO e FastStore (qualquer porcentagem).

- Solicite `https://{public-custom-domain}/sitemap.xml` (apex e/ou `www`).

- Observe o erro `400 Bad Request`, com o corpo da requisição contendo a mensagem "Conta não encontrada".

- Compare com a mesma conta em:
- `https://{account}.vtexcommercestable.com.br/sitemap.xml` → funciona (200)

- `https://{account}.myvtex.com/sitemap.xml` → funciona (200)

## Workaround

N/A