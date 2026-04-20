---
title: 'Cálculo incorreto do brinde ao combinar SKUs elegíveis na promoção “Compre um, ganhe outro”'
slug: calculo-incorreto-do-brinde-ao-combinar-skus-elegiveis-na-promocao-compre-um-ganhe-outro
status: PUBLISHED
createdAt: 2026-04-20T14:26:17.015Z
updatedAt: 2026-04-20T14:26:17.015Z
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

Em promoções do tipo “Compre um, ganhe outro” configuradas com várias SKUs elegíveis, o cálculo do brinde torna-se inconsistente quando diferentes SKUs atingem individualmente a quantidade mínima. Em vez de somar o número de ocorrências de brindes elegíveis por SKU, o sistema calcula o número de brindes com base no **número mínimo de ocorrências entre todas as SKUs**, o que pode levar a resultados contraintuitivos, nos quais adicionar mais itens elegíveis reduz o número de brindes concedidos.

## Simulação

1. Configure uma promoção “Compre um, ganhe outro” com:
  - Vários SKUs elegíveis
  - Quantidade mínima = 3 unidades por SKU
  - Multiplicador de brinde ativado
  - As mesmas regras aplicadas a todos os SKUs
2. Teste os seguintes cenários de carrinho:
  - 3 unidades do SKU A → 1 brinde ✅
  - 6 unidades do SKU A → 2 brindes ✅
  - 6 unidades do SKU A + 2 unidades do SKU B → 2 brindes ✅
  - 6 unidades do SKU A + 3 unidades do SKU B → 1 brinde ❌
  - 9 unidades do SKU A → 3 brindes ✅
  - 9 unidades do SKU A + 3 unidades do SKU B → 1 brinde ❌
  - 9 unidades do SKU A + 6 unidades do SKU B → 2 brindes ❌
Observe que:

- Quando um segundo SKU atinge a quantidade mínima, ele passa a participar do cálculo.
- O sistema então calcula o número de brindes usando o **valor mínimo das ocorrências entre os SKUs**, em vez de somá-las.

## Workaround

Não há uma solução alternativa completa disponível. Como medida de mitigação, os comerciantes podem:

- Evitar misturar vários SKUs sob a mesma condição de promoção “Compre um, ganhe outro” ao usar regras baseadas em quantidade, ou
- Dividir as promoções por SKU para evitar a interação entre SKUs na lógica de cálculo de brindes