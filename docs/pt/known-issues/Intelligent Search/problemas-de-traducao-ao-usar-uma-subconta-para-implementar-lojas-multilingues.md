---
title: 'Problemas de tradução ao usar uma subconta para implementar lojas multilíngues'
slug: problemas-de-traducao-ao-usar-uma-subconta-para-implementar-lojas-multilingues
status: PUBLISHED
createdAt: 2023-06-21T20:36:21.000Z
updatedAt: 2024-02-29T15:19:24.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: translation-issues-when-using-a-subaccount-to-implement-multilanguage-stores
locale: pt
kiStatus: Backlog
internalReference: 848524
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A indexação unificada do catálogo considera apenas as traduções das mensagens da conta principal, mesmo quando se utiliza uma arquitetura de subcontas para implementar lojas internacionais.

Isso resulta em traduções diferentes na página de pesquisa e na página do produto, uma vez que o conteúdo da página de pesquisa se baseia apenas nas traduções recuperadas pelo indexador do catálogo.

## Simulação

- Crie uma subconta e implemente lojas internacionais;
- Traduza o conteúdo do catálogo na subconta;
- Compare a página de pesquisa e a página do produto; elas terão traduções diferentes.

## Workaround

Defina os idiomas adicionais (vinculações e conteúdo das mensagens) na conta principal, replicando as traduções da subconta também na conta principal.