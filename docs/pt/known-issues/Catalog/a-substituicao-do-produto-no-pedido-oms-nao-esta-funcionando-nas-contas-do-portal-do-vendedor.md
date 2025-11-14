---
title: 'A substituição do produto no pedido OMS não está funcionando nas contas do portal do vendedor'
slug: a-substituicao-do-produto-no-pedido-oms-nao-esta-funcionando-nas-contas-do-portal-do-vendedor
status: PUBLISHED
createdAt: 2025-11-14T19:13:03.731Z
updatedAt: 2025-11-14T19:13:03.731Z
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


Não está sendo possível alterar o sku de um pedido porque o OMS usa a API de pesquisa (que está relacionada ao catálogo V1) e as contas do portal do vendedor usam uma nova versão do catálogo. Nenhum proxy foi implementado nessa área.

O erro é: "A conta solicitada {accountName} não foi encontrada no banco de conexão." <> "A conta solicitada {accountName} não foi encontrada no banco de conexão."
## Simulação



1. Acesse o OMS e selecione o pedido que você gostaria de substituir o sku (deve ser uma conta do portal do vendedor);
2. Verifique se aparece um erro na interface do usuário;
3. Ao inspecionar o erro, é possível ver que a mensagem é a que está acima.


## Workaround


Não há solução alternativa.



