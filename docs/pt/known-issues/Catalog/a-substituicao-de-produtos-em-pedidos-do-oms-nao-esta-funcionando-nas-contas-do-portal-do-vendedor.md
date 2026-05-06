---
title: 'A substituição de produtos em pedidos do OMS não está funcionando nas contas do portal do vendedor'
slug: a-substituicao-de-produtos-em-pedidos-do-oms-nao-esta-funcionando-nas-contas-do-portal-do-vendedor
status: PUBLISHED
createdAt: 2023-02-14T12:24:50.000Z
updatedAt: 2023-02-14T12:24:50.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-replacement-on-oms-order-not-working-on-seller-portal-accounts
locale: pt
kiStatus: Backlog
internalReference: 753484
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Não é possível alterar o SKU de um pedido porque o OMS utiliza a API de pesquisa (que está relacionada ao catálogo V1), enquanto as contas do portal do vendedor utilizam uma nova versão do catálogo. Não foi implementado nenhum proxy nessa área.

O erro é: "A conta solicitada {accountName} não foi encontrada no banco de conexão." <> "A conta solicitada {accountName} não foi encontrada no banco de conexão."

## Simulação

1. Acesse o OMS e selecione o pedido cujo SKU você deseja substituir (deve ser uma conta do portal do vendedor);
2. Verifique se um erro aparece na interface do usuário;
3. Ao inspecionar o erro, é possível ver que a mensagem é a indicada acima.

## Workaround

Não há solução alternativa.