---
title: 'A exportação de pedidos com uma média superior a 200 produtos pode causar um tempo limite no processo de geração do arquivo'
slug: a-exportacao-de-pedidos-com-uma-media-superior-a-200-produtos-pode-causar-um-tempo-limite-no-processo-de-geracao-do-arquivo
status: PUBLISHED
createdAt: 2022-11-22T21:40:26.000Z
updatedAt: 2025-02-27T19:09:24.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: exporting-orders-with-an-average-of-more-than-200-products-can-give-a-timeout-in-the-file-generation-process
locale: pt
kiStatus: No Fix
internalReference: 702933
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A exportação de produtos é geralmente realizada para uma série de pedidos com base em filtros definidos pelo lojista, gerando assim um documento com todos os pedidos e dividindo cada SKU em uma linha independente.

Neste caso, **o problema foi causado por uma loja que possui vários pedidos com mais de 200 SKUs por pedido**. No fluxo de geração do arquivo, esses pedidos, juntos, geram um tempo limite no processamento das informações, uma vez que o objeto de cada solicitação é muito grande e, consequentemente, problemas na geração do arquivo.

## Simulação

1. Tente criar um filtro na lista de pedidos **que inclua vários pedidos com mais de 200 SKUs**.
2. Solicite a exportação do documento
3. É possível que o erro apareça:
  1. Você deve abrir o inspetor do navegador e procurar os eventos de processamento de exportação "**inprogress**"
  2. Pesquise nos logs com o **ID de processamento** desses eventos
  3. O erro indica que a tarefa foi cancelada: "`Erro, "report_process", exception_message="Uma tarefa foi cancelada." `"

## Workaround

Nesses casos, recomenda-se segmentar a exportação de pedidos; ou seja, para os pedidos com mais de 200 SKUs, é melhor exportá-los individualmente.

Por outro lado, é importante validar a arquitetura do catálogo, já que não é comum ter pedidos com mais de 200 SKUs.