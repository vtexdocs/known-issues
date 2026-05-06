---
title: 'A modificação de preços por meio da rota de preços de postagem de compatibilidade está causando perda de dados'
slug: a-modificacao-de-precos-por-meio-da-rota-de-precos-de-postagem-de-compatibilidade-esta-causando-perda-de-dados
status: PUBLISHED
createdAt: 2021-12-14T18:46:33.000Z
updatedAt: 2024-12-19T19:49:50.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-modification-via-compatibility-post-prices-route-is-losing-data
locale: pt
kiStatus: No Fix
internalReference: 487698
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos um problema com a rota de publicação de preços de compatibilidade. Quando várias solicitações de atualização de preços são enviadas em um curto intervalo de tempo, o sistema pode não processar o preço mais atualizado. Isso pode resultar na aplicação de preços desatualizados ou incorretos.

## Simulação

1. Use a rota de publicação de preços de compatibilidade para enviar um lote de atualizações de preços.
2. Monitore o processo usando os logs de auditoria para verificar se todas as atualizações foram aplicadas corretamente.
3. Repita o teste com lotes de tamanhos diferentes e intervalos variáveis entre as solicitações. Observe que o problema não ocorre de forma consistente em todos os testes.

## Workaround

- Mude para o uso das APIs de Preços V2, que não apresentam esse problema.
- Distribua as solicitações de maneira mais uniforme, introduzindo atrasos, como esperar pelo menos 30 segundos entre lotes consecutivos.