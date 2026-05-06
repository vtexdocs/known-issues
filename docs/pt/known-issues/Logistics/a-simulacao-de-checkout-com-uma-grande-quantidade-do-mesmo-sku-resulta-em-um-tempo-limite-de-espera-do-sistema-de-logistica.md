---
title: 'A simulação de checkout com uma grande quantidade do mesmo SKU resulta em um tempo limite de espera do sistema de logística'
slug: a-simulacao-de-checkout-com-uma-grande-quantidade-do-mesmo-sku-resulta-em-um-tempo-limite-de-espera-do-sistema-de-logistica
status: PUBLISHED
createdAt: 2021-02-03T00:30:54.000Z
updatedAt: 2025-09-25T18:16:09.000Z
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

Estamos enfrentando um erro no serviço de Logística ao tentar simular uma compra com milhares de unidades do mesmo SKU. Esse erro ocorre porque a solicitação para dividir o pacote demora muito tempo.

O detalhe do erro na API é: "A operação foi cancelada."

Para produtos em kit, o cenário pode ser ainda mais restritivo, pois a logística calculará cada componente do kit individualmente.

## Simulação

1. Tente fazer uma **Simulação de Finalização de Compra** ou uma simulação no **Carrinho de Compras** com milhares de unidades do mesmo SKU (como 50 mil ou 3 mil para kits)
2. Analise os detalhes na resposta da API e você provavelmente verá um erro ao processar essa solicitação (**timeout**)

## Workaround

Recomendamos aumentar os limites de pacotes da transportadora para acomodar as unidades em um único pacote. Isso proporcionaria uma solicitação mais rápida e não resultaria em um tempo limite esgotado.