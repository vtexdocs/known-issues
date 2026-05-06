---
title: 'Atualizações de preços com cache em aplicativos finais'
slug: atualizacoes-de-precos-com-cache-em-aplicativos-finais
status: PUBLISHED
createdAt: 2023-09-08T16:08:10.000Z
updatedAt: 2023-09-08T16:08:10.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: price-updates-with-cache-on-end-applications
locale: pt
kiStatus: Backlog
internalReference: 896520
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As alterações de preço realizadas na conta são atualizadas quase em tempo real nas APIs de preço. No entanto, as simulações de checkout demoram cerca de 5 minutos para apresentar o preço mais atualizado do produto devido ao cache. Isso é esperado.

No entanto, em aplicativos finais, como afiliados externos ou integrações de marketplace, como o Google Shopping, os preços podem, **às vezes**, ser exibidos incorretamente.

Isso ocorre porque o módulo de preços notifica todos os sistemas internos de que o preço foi atualizado assim que a ação ocorre, não dando tempo suficiente para que os aplicativos finais que consultam as simulações de checkout obtenham o preço sem o cache.

## Simulação

1. Atualize o preço de um SKU;
2. Verifique nos logs da ponte se o preço enviado para as integrações de marketplace foi o mais atualizado ou o valor antigo.

## Workaround

N/A