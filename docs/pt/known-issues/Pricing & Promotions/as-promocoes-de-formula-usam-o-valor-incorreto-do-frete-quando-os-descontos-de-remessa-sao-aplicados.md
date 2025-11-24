---
title: 'As promoções de fórmula usam o valor incorreto do frete quando os descontos de remessa são aplicados'
slug: as-promocoes-de-formula-usam-o-valor-incorreto-do-frete-quando-os-descontos-de-remessa-sao-aplicados
status: PUBLISHED
createdAt: 2025-11-24T17:10:51.388Z
updatedAt: 2025-11-24T17:10:51.388Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: formula-promotions-use-incorrect-freight-value-when-shipping-discounts-are-applied
locale: pt
kiStatus: Backlog
internalReference: 1329431
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando um carrinho contém uma promoção de desconto de remessa (por exemplo, porcentagem de desconto no frete) e uma promoção baseada em fórmula, o valor do frete usado pelo RnB para avaliar a fórmula está incorreto.
Internamente, o desconto de frete é aplicado duas vezes durante a etapa de normalização de frete do RnB, fazendo com que a fórmula calcule o desconto com base em um valor de frete menor do que deveria.
Como resultado:

- A promoção da fórmula retorna um valor incorreto (normalmente menor).
- O desconto parece inconsistente com qualquer SLA retornado pela Logística.
- Isso afeta somente as promoções avaliadas após os descontos de frete:  Fórmula, Imposto (porcentagem baseada no frete) e Recompensa.
## Simulação



1. Crie uma **promoção de desconto de envio** (por exemplo, 10% de desconto no frete).
2. Crie uma **promoção baseada em fórmula** usando uma expressão de frete, por exemplo: `frete - floor(frete)`
3. Gere um carrinho que tenha mais de um SLA, garantindo a aplicação de um desconto de frete.
4. Observe que o valor do desconto calculado a partir da promoção baseada em fórmula está incorreto
## Workaround


N/A



