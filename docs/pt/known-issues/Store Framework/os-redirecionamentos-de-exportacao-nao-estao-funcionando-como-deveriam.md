---
title: 'Os redirecionamentos de exportação não estão funcionando como deveriam'
slug: os-redirecionamentos-de-exportacao-nao-estao-funcionando-como-deveriam
status: PUBLISHED
createdAt: 2022-03-08T15:01:23.000Z
updatedAt: 2024-01-29T18:39:50.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: export-redirects-not-working-as-intended
locale: pt
kiStatus: Backlog
internalReference: 537962
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar exportar o redirecionamento, seja pelo terminal ou pela página no CMS, são gerados arquivos de tamanhos diferentes, com possíveis resultados distintos em seu conteúdo. Esse não é o comportamento esperado, uma vez que não foram feitas alterações nos redirecionamentos que pudessem explicar essas diferenças.

## Simulação

(Terminal) Siga as etapas da documentação: https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-managing-url-redirects

Verifique os arquivos retornados e você poderá observar, em alguns casos, a diferença entre os dois arquivos extraídos.

(IU de administração) Vá para Admin > CMS > Redirecionamentos, alterne entre as páginas na paginação e clique em exportar; você verá as diferenças nos arquivos retornados.

## Workaround

N/A