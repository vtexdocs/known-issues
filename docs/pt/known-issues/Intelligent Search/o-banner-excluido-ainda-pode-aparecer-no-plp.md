---
title: O banner excluído ainda pode aparecer no PLP
slug: o-banner-excluido-ainda-pode-aparecer-no-plp
status: PUBLISHED
createdAt: 2025-09-22T17:21:59.764Z
updatedAt: 2025-09-22T17:21:59.764Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: deleted-banner-may-still-appear-on-plp
locale: pt
kiStatus: Backlog
internalReference: 1295586
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O banner excluído ainda pode aparecer no PLP e ser recuperado na rota Banners na API de pesquisa inteligente, mesmo que não apareça mais em **Admin > Banners****.
## Simulação


Siga as etapas a seguir para simular o cenário:

1. Execute a rota Obter lista de banners registrados para consulta usando uma pesquisa/filtro que corresponda ao banner excluído_._
2. A rota recupera o banner.
3. Em **Admin > Banners**, pesquise o banner recuperado na API.
4. A pesquisa do banner não retorna nenhum resultado
## Workaround


Abra um tíquete com a equipe de CX e inclua evidências para solicitar a exclusão completa do banner.



