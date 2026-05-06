---
title: 'SKUs recebidos: as aprovações da associação não incluem o canal de vendas disponível do vendedor no produto quando o SKU é vendido por mais de um vendedor'
slug: skus-recebidos-as-aprovacoes-da-associacao-nao-incluem-o-canal-de-vendas-disponivel-do-vendedor-no-produto-quando-o-sku-e-vendido-por-mais-de-um-vendedor
status: PUBLISHED
createdAt: 2022-04-18T17:15:15.000Z
updatedAt: 2023-05-09T19:05:55.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: received-skus-association-approvals-dont-add-the-sellers-available-sales-channel-on-the-product-when-the-sku-is-sold-by-more-than-1-seller
locale: pt
kiStatus: Backlog
internalReference: 562472
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Um produto vendido por outro vendedor no catálogo do marketplace está disponível para ser vendido no canal de vendas deste vendedor.

No entanto, se um novo vendedor também enviar o produto e o marketplace realizar uma ação de associação no módulo “SKUs recebidos” — ou seja, vincular a outro produto ou a outro SKU —, o canal de vendas desse novo vendedor não será adicionado ao produto, permanecendo apenas o canal de vendas do vendedor original.

## Simulação

1. O vendedor 1, disponível no canal de vendas A, envia um produto para o marketplace;
2. O marketplace aprovou o produto do vendedor 1 como um novo produto em seu catálogo;
3. O produto está disponível no canal de vendas A;
4. O vendedor 2, disponível no canal de vendas B, envia o mesmo produto para o marketplace;
5. O marketplace aprovou o produto como uma ação de vinculação a outro produto;
6. O produto permanece disponível apenas no canal de vendas A.

## Workaround

Verifique manualmente, via API ou planilha, os outros canais de vendas disponíveis para os produtos.