---
title: A simulação de checkout com uma grande quantidade do mesmo item recebe um tempo limite de logística
slug: a-simulacao-de-checkout-com-uma-grande-quantidade-do-mesmo-item-recebe-um-tempo-limite-de-logistica
status: PUBLISHED
createdAt: 2025-09-25T15:16:42.383Z
updatedAt: 2025-09-25T15:16:42.383Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: checkout-simulation-with-a-great-quantity-of-the-same-sku-receives-a-logistics-timeout
locale: pt
kiStatus: No Fix
internalReference: 330775
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Temos um erro no serviço de logística ao tentar simular uma compra com milhares de unidades da mesma SKU. Esse erro ocorre porque a solicitação para dividir o pacote leva muito tempo.

O detalhe do erro na API é: "A operação foi cancelada".

Para produtos em kit, o cenário pode ser ainda mais restritivo porque a logística calculará cada componente do kit individualmente.
## Simulação



1. Tente fazer uma **Simulação de checkout** ou uma simulação no **Carrinho de compras** com milhares de unidades do mesmo SKU (como 50 mil ou 3 mil para kits)
2. Analise os detalhes na resposta da API e você provavelmente verá um erro ao processar essa solicitação (**timeout**
## Workaround


Recomendamos aumentar os limites de pacotes da transportadora para acomodar as unidades em um único pacote. Isso forneceria uma solicitação mais rápida e não retornaria um tempo limite.

