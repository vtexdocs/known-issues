---
title: 'Caracteres especiais no invoiceNumber causam falha no fluxo pós-compra'
slug: caracteres-especiais-no-invoicenumber-causam-falha-no-fluxo-poscompra
status: PUBLISHED
createdAt: 2025-11-14T19:25:59.078Z
updatedAt: 2025-11-14T19:25:59.078Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-characters-in-invoicenumber-cause-postpurchase-flow-to-fail
locale: pt
kiStatus: Fixed
internalReference: 953285
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Durante o fluxo da fatura, o sistema Orders permite que você insira valores no campo "`invoiceNumber`" (via UI ou API) que contenham caracteres especiais, seja no início, no meio ou no final, por exemplo: `"#123456"`, `"123/456"` ou `"123456/"`.

No entanto, o sistema SNO responsável pelo registro da fatura não consegue processar esses valores corretamente, o que pode afetar vários fluxos pós-compra. Isso pode resultar em erros ou falhas na execução de processos como:


- Atualizações de rastreamento;
- Alteração do status do pedido para "Invoiced" (Faturado);
- Comunicação com o sistema GiftCardHub;
- E qualquer outro fluxo que dependa do campo "invoiceNumber".
## Simulação


1- Fature um pedido inserindo o seguinte exemplo de número de fatura: "#123456"; (caracteres especiais no início, no meio do número ou no final)

2- Observe que o pedido não será atualizado para o status de faturado

3- No caso de fluxos que envolvam um vendedor, no Get Order do pedido do vendedor será possível ver a fatura salva, mas mesmo assim o pedido do marketplace não será atualizado para faturado, pois o sistema não poderá repassar a fatura
## Workaround


Os pedidos com faturas que contêm caracteres especiais não podem ser ajustados posteriormente. Para evitar interrupções durante o fluxo do pedido, recomendamos usar apenas caracteres alfanuméricos no campo `invoiceNumber`.