---
title: 'O indexador de catálogo está gerando documentos de tradução inválidos'
slug: o-indexador-de-catalogo-esta-gerando-documentos-de-traducao-invalidos
status: PUBLISHED
createdAt: 2024-02-29T21:02:24.000Z
updatedAt: 2025-07-24T01:23:55.000Z
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

Ao indexar um produto com informações traduzidas, o aplicativo Mensagens é consultado. Essas solicitações devem levar menos de 3 segundos; quando demoram mais do que isso, a indexação falha e gera um documento de tradução inválido.

Esse cenário gerará erros no histórico de indexação com a mensagem “as traduções são menores que o contexto”.

## Simulação

Não há uma maneira fácil de reproduzir esse cenário, mas contas com muitos idiomas ou muitos campos para traduzir são mais suscetíveis a ele.

## Workaround

N/A