---
title: O service worker não cria um escopo correto para armazenamentos com várias vinculações
slug: o-service-worker-nao-cria-um-escopo-correto-para-armazenamentos-com-varias-vinculacoes
status: PUBLISHED
createdAt: 2025-10-16T19:56:27.349Z
updatedAt: 2025-10-16T19:56:27.349Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: service-worker-does-not-create-a-correct-scope-for-multibinding-stores
locale: pt
kiStatus: Backlog
internalReference: 1146421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O KI Service Worker não consegue criar o escopo correto para lojas com várias vinculações. Ao gerar o escopo para criar a URL de acesso para o service worker, ele acaba criando um caminho duplicado, o que causa erros em funcionalidades que dependem do service worker.
## Simulação



1. Crie uma loja com várias vinculações (multibinding).
2. Configure o service worker para gerar a URL com escopo.
3. Observe que o service worker cria um caminho duplicado. Essa duplicação leva a erros ou a um comportamento inesperado nas partes do aplicativo que dependem do service worker.
## Workaround


Se o seu armazenamento multibinding não exigir um service worker, você poderá desativar o service worker como solução alternativa. Isso evitará a ocorrência do erro até que uma correção adequada seja implementada.



