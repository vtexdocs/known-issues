---
title: 'Caracteres especiais no campo "invoiceNumber" fazem com que o fluxo pós-compra falhe'
slug: caracteres-especiais-no-campo-invoicenumber-fazem-com-que-o-fluxo-poscompra-falhe
status: PUBLISHED
createdAt: 2023-12-14T21:31:06.000Z
updatedAt: 2025-05-06T16:17:50.000Z
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

Durante o fluxo de faturamento, o sistema de Pedidos permite inserir valores no campo “`invoiceNumber`” (por meio da interface do usuário ou da API) que contenham caracteres especiais, seja no início, no meio ou no final, por exemplo: `“#123456”`, `“123/456”` ou `“123456/”`.

No entanto, o sistema SNO responsável pelo registro da fatura não consegue processar esses valores corretamente, o que pode afetar vários fluxos pós-compra. Isso pode resultar em erros ou falhas na execução de processos como:


- Acompanhamento de atualizações;
- Alteração do status do pedido para “Faturado”;
- Comunicação com o sistema GiftCardHub;
- E qualquer outro fluxo que dependa do campo “invoiceNumber”.

## Simulação

1- Fature um pedido inserindo o seguinte número de fatura de exemplo: “#123456”; (caracteres especiais no início, no meio ou no final do número)

2- Observe que o pedido não será atualizado para o status “Faturado”

3- No caso de fluxos envolvendo um vendedor, na tela “Obter Pedido” do pedido do vendedor será possível ver a fatura salva, mas mesmo assim o pedido do marketplace não será atualizado para “Faturado”, pois o sistema não conseguirá repassar a fatura.

## Workaround

Pedidos com faturas que contenham caracteres especiais não podem ser ajustados posteriormente. Para evitar interrupções durante o fluxo do pedido, recomendamos usar apenas caracteres alfanuméricos no campo `invoiceNumber`.