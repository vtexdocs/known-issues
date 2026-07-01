---
title: 'Dafiti O cálculo de juros parcelados aumenta incorretamente o preço de venda dos itens em pedidos da Dafiti.'
slug: dafiti-o-calculo-de-juros-parcelados-aumenta-incorretamente-o-preco-de-venda-dos-itens-em-pedidos-da-dafiti
status: PUBLISHED
createdAt: 2026-07-01T18:24:46.000Z
updatedAt: 2026-07-01T18:24:46.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: dafiti-installment-interest-incorrectly-increases-item-sellingprice-in-dafiti-orders
locale: pt
kiStatus: Backlog
internalReference: 1428531
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em pedidos Dafiti que incluem juros de parcelamento, o conector distribui o "Acréscimo DFT" (a diferença entre o valor cobrado pela Dafiti ao cliente e o total calculado pelo VTEX) como `priceTags` do marketplace entre os itens do pedido. Isso faz com que o `sellingPrice` de cada item seja inflacionado além do preço real do produto (campo `price`), gerando uma discrepância entre o valor fiscal do pedido e o valor usado para faturamento e devoluções — levando a uma divergência entre a nota fiscal de saída (NF de saída) e a nota fiscal de devolução (NF de devolução).

## Simulação

**Simulação**

1. Faça um pedido pelo Dafiti com juros de parcelamento habilitados.

2. Recupere o pedido via OM:
3. Observe que o `sellingPrice` é maior que o `price` — a diferença corresponde ao "Acréscimo DFT" distribuído entre os itens.

4. Confirme a entrada "Acréscimo DFT" na matriz `totals` do pedido.

## Workaround

N/A