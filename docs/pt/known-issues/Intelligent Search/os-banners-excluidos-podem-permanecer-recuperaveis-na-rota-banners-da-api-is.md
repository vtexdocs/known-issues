---
title: Os banners excluídos podem permanecer recuperáveis na rota Banners da API IS
slug: os-banners-excluidos-podem-permanecer-recuperaveis-na-rota-banners-da-api-is
status: PUBLISHED
createdAt: 2025-09-22T14:07:29.090Z
updatedAt: 2025-09-22T14:07:29.090Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banners-may-remain-retrievable-in-the-banners-route-of-is-api
locale: pt
kiStatus: Backlog
internalReference: 1295586
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os banners excluídos ainda podem ser recuperados na rota Banners na Intelligent Search API, mesmo que não sejam recuperados em **Admin > Banners**.
## Simulação


Siga as etapas a seguir para simular o cenário:

1. Execute a rota Get list of banners registered for query (Obter lista de banners registrados para consulta).
2. A rota recupera os banners relacionados a uma pesquisa/filtro.
3. Em **Admin > Banners**, pesquise um dos banners recuperados na API.
4. A pesquisa de banner não retornará nenhum resultado.


## Workaround


Abra um tíquete com a equipe de CX e inclua evidências para solicitar a exclusão completa do banner.



