---
title: 'A faixa de preço não leva em conta a política de vendas'
slug: a-faixa-de-preco-nao-leva-em-conta-a-politica-de-vendas
status: PUBLISHED
createdAt: 2021-01-08T19:37:43.000Z
updatedAt: 2024-01-19T19:13:25.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: price-range-disregards-sales-policy
locale: pt
kiStatus: Backlog
internalReference: 322764
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O filtro de faixa de preço, configurado na categoria de opções, leva em consideração o preço registrado em todas as políticas de vendas da loja, o que significa que ele sempre exibirá o valor mais baixo registrado em qualquer política de vendas, podendo exibir um produto que não esteja dentro da faixa de preço daquela política de vendas específica.

## Simulação

1. Registre preços diferentes em políticas de vendas diferentes para o mesmo SKU;
2. Crie faixas de preço na categoria em que os preços registrados tenham faixas diferentes;
3. Na política de vendas do SKU com o preço mais alto, filtre por faixa de preço
4. Observe que o valor do SKU considerado pertence a outra política de vendas, pois o filtro considera apenas o valor mais baixo de qualquer política.

## Workaround

Não há solução alternativa disponível para este cenário.