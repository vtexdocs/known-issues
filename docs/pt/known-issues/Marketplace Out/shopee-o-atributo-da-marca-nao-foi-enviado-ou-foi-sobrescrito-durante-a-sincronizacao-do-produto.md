---
title: 'Shopee O atributo da marca não foi enviado ou foi sobrescrito durante a sincronização do produto'
slug: shopee-o-atributo-da-marca-nao-foi-enviado-ou-foi-sobrescrito-durante-a-sincronizacao-do-produto
status: PUBLISHED
createdAt: 2025-11-12T17:15:38.000Z
updatedAt: 2026-09-15T15:46:15.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: shopee-brand-attribute-not-sent-or-overwritten-during-product-sync
locale: pt
kiStatus: Backlog
internalReference: 1323634
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Os produtos enviados da VTEX para a Shopee estão sendo publicados sem o atributo _Marca_, mesmo quando o campo _Marca_ está preenchido corretamente na VTEX e a marca já existe na Shopee. Além disso, o conector sobrescreve as marcas adicionadas manualmente na Shopee, revertendo os itens para "sem marca".

## Simulação

1. Processe um produto no Bridge para que ele seja enviado para a Shopee a partir da conta afetada.

2. Observe que o produto é criado ou atualizado na Shopee sem o atributo _Marca_.

3. Na Shopee, defina manualmente a marca por meio de upload em massa ou de arquivo.

4. Aguarde a próxima sincronização VTEX → Shopee e observe que a integração remove ou redefine o campo de marca novamente.

## Workaround

N/A