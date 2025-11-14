---
title: 'Skus recebidos: As aprovações de associação não adicionam o canal de vendas disponível do vendedor no produto quando o sku é vendido por mais de um vendedor'
slug: skus-recebidos-as-aprovacoes-de-associacao-nao-adicionam-o-canal-de-vendas-disponivel-do-vendedor-no-produto-quando-o-sku-e-vendido-por-mais-de-um-vendedor
status: PUBLISHED
createdAt: 2025-11-14T19:13:36.210Z
updatedAt: 2025-11-14T19:13:36.210Z
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


Um produto vendido por outro vendedor no catálogo do marketplace está disponível para ser vendido no canal de vendas desse vendedor.

No entanto, se um novo vendedor também enviar o produto e o marketplace executar uma ação de associação no módulo Received Skus, ou seja, vincular a outro produto ou vincular a outro sku, o canal de vendas desse novo vendedor não será adicionado ao produto, permanecendo apenas o canal de vendas do vendedor original.
## Simulação



1. O vendedor 1, disponível no canal de vendas A, envia um produto para o marketplace;
2. O marketplace aprovou o produto do vendedor 1 como um novo produto em seu catálogo;
3. O produto está disponível no canal de vendas A;
4. O vendedor 2, disponível no canal de vendas B, envia o mesmo produto para o marketplace;
5. O Marketplace aprovou o produto como link para outra ação de produto;
6. O produto permanece disponível apenas no canal de vendas A
## Workaround


Verifique manualmente, via API ou via planilha, o outro canal de vendas disponível para os produtos.



