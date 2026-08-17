---
title: 'Markeplace-IN A paginação do cursor da API de sugestões (_next) abrange apenas sugestões pendentes e pode parecer que parou antes do tempo.'
slug: markeplacein-a-paginacao-do-cursor-da-api-de-sugestoes-next-abrange-apenas-sugestoes-pendentes-e-pode-parecer-que-parou-antes-do-tempo
status: PUBLISHED
createdAt: 2026-08-17T17:03:35.000Z
updatedAt: 2026-08-17T17:03:35.000Z
contentType: knownIssue
productTeam: Marketplace In
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace In
slugEN: markeplacein-suggestions-api-cursor-pagination-next-only-covers-pending-suggestions-and-may-look-like-it-stopped-early
locale: pt
kiStatus: Backlog
internalReference: 1448547
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A paginação do cursor em `GET /{accountName}/suggestions` (`_next`) restringe implicitamente os resultados a `status=pending`, tornando impossível examinar toda a base de sugestões de uma conta (todos os status) por meio do cursor em uma única passagem — ela para sem erro ou aviso assim que o subconjunto Pendente é esgotado, bem antes de cobrir a contagem total de sugestões da conta.

## Simulação

- Selecione uma conta com uma grande base de sugestões (dezenas de milhares de registros em vários status e tipos).

- Chame `GET https://api.vtex.com/{accountName}/suggestions?_from=1&_to=1` para confirmar o total por meio de `Range.Total` — observe que isso inclui todos os status e tipos.

- Chame `GET https://api.vtex.com/{accountName}/suggestions` usando apenas o cursor `_next` (sem outros parâmetros de consulta), seguindo cada token `Next` retornado até que a resposta pare de incluir `Next`.
- Compare o total de itens verificados pelo cursor com `Range.Total` da etapa 2 — o total do cursor será significativamente menor (nos casos observados, aproximadamente 10 a 20% do total da conta), sem nenhum erro HTTP em nenhum momento.

## Workaround

Sim. Para ler a base completa de sugestões (todos os status) de uma conta, use paginação por deslocamento (`_from`/`_to`) em vez de cursor.

1. Sempre envie `status` explicitamente (valores documentados: `accepted`, `pending`, `denied` — confirme se algum valor adicional se aplica antes de confiar nele).
2. Sempre envie também `type` explicitamente; ele aceita apenas um valor por chamada (`new` ou `update`), portanto, execute uma passagem completa por tipo.
3. Mantenha a janela da página constante durante toda a varredura (máximo de 50 registros por página) — alterá-la no meio da varredura pode desencadear um problema de reordenação já conhecido.
4. Remova resultados duplicados no lado do cliente (por exemplo, por `sellerId` + `sellerSkuId`) e execute novamente cada segmentação de status × tipo até que uma passagem não retorne novos registros, já que a estabilidade da ordenação não é garantida em um conjunto de dados dinâmico/em constante mudança.