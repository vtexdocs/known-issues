---
title: As APIs Who Saw Also Saw, Who Saw Also Bought, Who Bought Also Bought nem sempre funcionam como esperado
slug: as-apis-who-saw-also-saw-who-saw-also-bought-who-bought-also-bought-nem-sempre-funcionam-como-esperado
status: PUBLISHED
createdAt: 2025-09-10T17:24:29.346Z
updatedAt: 2025-09-10T17:24:29.346Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: apis-who-saw-also-saw-who-saw-also-bought-who-bought-also-bought-not-always-working-as-expected
locale: pt
kiStatus: No Fix
internalReference: 712015
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário



Esses três tipos de APIs de venda cruzada:  Who Saw Also Saw, Who Saw Also Bought e Who Bought Also Bought nem sempre trazem os resultados dos produtos que deveriam ser recomendados. Às vezes, os resultados são produtos aleatórios da mesma categoria do produto original.
## Simulação



1. Visitar dois produtos de categorias diferentes no site; (ou visitar um e comprar outro / ou comprar os dois separadamente)
2. Use uma das APIs acima e verifique o resultado da resposta;
3. Verifique se os produtos retornados não contêm o outro que você visitou, em vez disso, são apenas outros produtos da mesma categoria que o primeiro.


## Workaround


Não há solução alternativa.


