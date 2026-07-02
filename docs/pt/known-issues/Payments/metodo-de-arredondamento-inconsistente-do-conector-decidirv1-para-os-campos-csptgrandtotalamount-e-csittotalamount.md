---
title: 'Método de arredondamento inconsistente do conector DecidirV1 para os campos CSPTGRANDTOTALAMOUNT e CSITTOTALAMOUNT.'
slug: metodo-de-arredondamento-inconsistente-do-conector-decidirv1-para-os-campos-csptgrandtotalamount-e-csittotalamount
status: PUBLISHED
createdAt: 2023-04-10T23:32:15.000Z
updatedAt: 2026-07-02T15:43:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: decidirv1-connectors-inconsistent-rounding-method-for-csptgrandtotalamount-and-csittotalamount-fields
locale: pt
kiStatus: No Fix
internalReference: 787367
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao usar o conector DecidirV1 com produtos cujos preços têm mais de duas casas decimais, o valor total do pedido relatado ao sistema de prevenção de fraudes do Decidir não corresponde ao valor real do pagamento. Essa divergência pode causar falhas na validação antifraude ou inconsistências entre o registro da transação e o valor cobrado.

## Simulação

1. Configure um produto com um preço unitário contendo mais de duas casas decimais (por exemplo, R$ 10,99).

2. Adicione o produto ao carrinho e finalize a compra usando o conector DecidirV1.

3. Observe que o valor total na transação do Decidir difere do total do carrinho.

## Workaround

Evite configurar produtos com preços que excedam duas casas decimais. Ajuste o catálogo para que todos os preços unitários tenham no máximo duas casas decimais para evitar a discrepância.