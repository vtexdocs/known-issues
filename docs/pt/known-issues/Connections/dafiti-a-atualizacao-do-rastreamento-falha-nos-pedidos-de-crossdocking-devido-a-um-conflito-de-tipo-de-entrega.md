---
title: 'Dafiti A atualização do rastreamento falha nos pedidos de Crossdocking devido a um conflito de tipo de entrega'
slug: dafiti-a-atualizacao-do-rastreamento-falha-nos-pedidos-de-crossdocking-devido-a-um-conflito-de-tipo-de-entrega
status: PUBLISHED
createdAt: 2025-11-12T17:34:42.395Z
updatedAt: 2025-11-12T17:34:42.395Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: dafiti-tracking-update-fails-crossdocking-orders-due-to-delivery-type-conflict
locale: pt
kiStatus: Backlog
internalReference: 1323882
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Por definição, a integração sempre envia o tipo de entrega como **dropship**.
No entanto, alguns comerciantes trabalham com pedidos **crossdocking**.
Ao tentar atualizar as informações de rastreamento desses pedidos, a Dafiti retorna um erro porque a integração tenta alterar o tipo de entrega de _crossdocking_ para _dropship_, o que não é permitido.
## Simulação



- Criar ou identificar um pedido na Dafiti com **tipo de entrega = crossdocking**.
- Acione uma atualização de rastreamento da VTEX para a Dafiti.
- Observe que a resposta da API falha, pois a integração tenta definir o tipo de entrega como **dropship**, criando um conflito com o valor atual
## Workaround


N/A




