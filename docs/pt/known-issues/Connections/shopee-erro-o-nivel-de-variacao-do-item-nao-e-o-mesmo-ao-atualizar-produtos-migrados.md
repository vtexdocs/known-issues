---
title: 'Shopee Erro: o nível de variação do item não é o mesmo ao atualizar produtos migrados'
slug: shopee-erro-o-nivel-de-variacao-do-item-nao-e-o-mesmo-ao-atualizar-produtos-migrados
status: PUBLISHED
createdAt: 2025-09-01T20:16:59.678Z
updatedAt: 2025-09-01T20:16:59.678Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-error-item-tiervariation-level-not-same-when-updating-migrated-products
locale: pt
kiStatus: Backlog
internalReference: 1284853
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os produtos migrados da versão de integração anterior não podem ser atualizados no marketplace quando a estrutura de _variações de nível_ (SKUs) é modificada. O Bridge retorna uma mensagem de erro: _"Item tier-variation level not same"_.
## Simulação



- Migrar um produto da versão de integração anterior com _variações de nível_ existentes.
- Modifique a estrutura de _variações de camada_ (por exemplo, combinações ou níveis de SKU).
- Tente atualizar o produto no Bridge.
- O sistema retorna o erro: _"Item tier-variation level not same"
## Workaround


N/A


