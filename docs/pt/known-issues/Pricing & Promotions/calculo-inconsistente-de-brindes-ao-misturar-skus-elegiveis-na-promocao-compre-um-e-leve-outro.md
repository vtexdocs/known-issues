---
title: 'Cálculo inconsistente de brindes ao misturar SKUs elegíveis na promoção Compre Um e Leve Outro.'
slug: calculo-inconsistente-de-brindes-ao-misturar-skus-elegiveis-na-promocao-compre-um-e-leve-outro
status: PUBLISHED
createdAt: 2026-04-20T17:25:36.000Z
updatedAt: 2026-09-22T21:51:07.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: inconsistent-gift-calculation-when-mixing-eligible-skus-in-buy-one-get-one-promotion
locale: pt
kiStatus: Backlog
internalReference: 1395338
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em promoções "Compre um, leve outro" configuradas com vários SKUs elegíveis, o cálculo de brindes torna-se inconsistente quando diferentes SKUs atingem individualmente a quantidade mínima. Em vez de somar o número de ocorrências de brindes elegíveis por SKU, o sistema calcula o número de brindes com base no **número mínimo de ocorrências entre os SKUs**, o que pode levar a resultados contra-intuitivos, onde adicionar mais itens elegíveis reduz o número de brindes concedidos.

## Simulação

1. Configure uma promoção Compre Um e Leve Outro com:

- Vários SKUs elegíveis
- Quantidade mínima = 3 unidades por SKU

- Multiplicador de brindes ativado

- As mesmas regras se aplicam a todos os SKUs

2. Teste os seguintes cenários de carrinho:

- 3 unidades do SKU A → 1 brinde ✅

- 6 unidades do SKU A → 2 brindes ✅

- 6 unidades do SKU A + 2 unidades do SKU B → 2 brindes ✅

- 6 unidades do SKU A + 3 unidades do SKU B → 1 brinde ❌

- 9 unidades do SKU A → 3 brindes ✅

- 9 unidades do SKU A + 3 unidades do SKU B → 1 brinde ❌

- 9 unidades do SKU A + 6 unidades do SKU B → 2 brindes ❌

Observe que:

- Quando um segundo SKU atinge a quantidade mínima, ele começa a participar do cálculo.
- O sistema então calcula o número de brindes usando o **valor mínimo de ocorrências entre os SKUs**, em vez de somá-los.

## Workaround

Não há uma solução alternativa completa disponível. Como mitigação, os lojistas podem:

- Evitar misturar vários SKUs na mesma promoção Compre Um Leve Outro ao usar regras baseadas em quantidade, ou
- Dividir as promoções por SKU para evitar a interação entre SKUs na lógica de cálculo de brindes.

-