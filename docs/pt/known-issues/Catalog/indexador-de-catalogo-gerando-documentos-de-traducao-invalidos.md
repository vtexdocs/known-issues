---
title: Indexador de catálogo gerando documentos de tradução inválidos
slug: indexador-de-catalogo-gerando-documentos-de-traducao-invalidos
status: PUBLISHED
createdAt: 2025-07-23T22:24:27.696Z
updatedAt: 2025-07-23T22:24:27.696Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-indexer-generating-invalid-translation-documents
locale: pt
kiStatus: No Fix
internalReference: 991494
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao indexar um produto com informações traduzidas, o aplicativo Messages é consultado. Essas solicitações devem ter menos de 3s e, quando demoram mais do que isso, a indexação falha e gera um documento de tradução inválido.

Esse cenário gerará erros no histórico de indexação com a mensagem "translations is smaller than context".

## Simulação


Não há uma maneira fácil de reproduzir esse cenário, mas as contas com muitos idiomas ou muitos campos para traduzir são mais suscetíveis a esse cenário.


## Workaround


N/A

