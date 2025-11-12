---
title: 'Shopee Atributo de marca não enviado ou sobrescrito durante a sincronização do produto'
slug: shopee-atributo-de-marca-nao-enviado-ou-sobrescrito-durante-a-sincronizacao-do-produto
status: PUBLISHED
createdAt: 2025-11-12T14:16:27.463Z
updatedAt: 2025-11-12T14:16:27.463Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-brand-attribute-not-sent-or-overwritten-during-product-sync
locale: pt
kiStatus: Backlog
internalReference: 1323634
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Os produtos enviados da VTEX para a Shopee estão sendo publicados sem o atributo _Brand_, mesmo quando o _Brand_ é preenchido corretamente na VTEX e a marca já existe na Shopee. Além disso, o conector substitui as marcas que são adicionadas manualmente no Shopee, revertendo os itens de volta para "sem marca".
## Simulação




1. Processe um produto no Bridge para que ele seja enviado à Shopee a partir da conta afetada.
2. Observe que o produto é criado ou atualizado na Shopee sem a _Brand_.
3. No Shopee, defina manualmente a marca por meio de upload em massa ou de arquivo.
4. Aguarde a próxima sincronização VTEX → Shopee e observe se a integração remove ou redefine o campo de marca novamente
## Workaround


N/A



