---
title: 'As APIs “Quem viu também viu”, “Quem viu também comprou” e “Quem comprou também comprou” nem sempre funcionam como esperado'
slug: as-apis-quem-viu-tambem-viu-quem-viu-tambem-comprou-e-quem-comprou-tambem-comprou-nem-sempre-funcionam-como-esperado
status: PUBLISHED
createdAt: 2022-12-07T15:30:58.000Z
updatedAt: 2025-09-10T20:23:43.000Z
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

Esses três tipos de APIs de vendas cruzadas: “Quem viu também viu”, “Quem viu também comprou” e “Quem comprou também comprou” nem sempre apresentam os resultados dos produtos que deveriam ser recomendados. Às vezes, os resultados são produtos aleatórios da mesma categoria do produto original.

## Simulação

1. Acesse dois produtos de categorias diferentes no site; (ou acesse um e compre outro / ou compre os dois separadamente)
2. Use uma das APIs acima e verifique o resultado da resposta;
3. Verifique se os produtos retornados não contêm o outro que você acessou, mas sim apenas outros produtos da mesma categoria que o primeiro.

## Workaround

Não há solução alternativa.