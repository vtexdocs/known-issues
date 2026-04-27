---
title: 'A indexação de produtos pode apresentar um grande atraso no Histórico de indexação'
slug: a-indexacao-de-produtos-pode-apresentar-um-grande-atraso-no-historico-de-indexacao
status: PUBLISHED
createdAt: 2026-04-27T16:51:45.662Z
updatedAt: 2026-04-27T16:51:45.662Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: product-indexing-may-show-a-high-delay-in-indexing-history
locale: pt
kiStatus: Backlog
internalReference: 1398224
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página **Histórico de indexação** no Admin pode apresentar um grande atraso na indexação de alguns produtos.

Esse comportamento pode ocorrer mesmo que o produto já tenha sido indexado corretamente e esteja atualizado na pesquisa e na loja virtual.

## Simulação

1. No VTEX Admin, acesse a página **Histórico de indexação** para indexação de pesquisa/catálogo.
2. Procure um produto cuja linha apresente um valor de atraso elevado na lista do Histórico de indexação.
 3. Ao abrir os detalhes da indexação, a indexação fica parada por muitas horas.

Para verificar se o produto está atualizado na busca e na loja virtual:

1. Abra a página de detalhes do produto (PDP) do produto afetado.
2. Compare as informações esperadas com as informações da PDP.

## Workaround

N/A