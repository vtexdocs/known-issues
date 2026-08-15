---
title: 'As alterações no modo de arredondamento não funcionam para descontos percentuais.'
slug: as-alteracoes-no-modo-de-arredondamento-nao-funcionam-para-descontos-percentuais
status: PUBLISHED
createdAt: 2025-03-12T19:53:08.000Z
updatedAt: 2026-08-15T23:19:03.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: roundingmode-changes-do-not-work-for-percentual-discounts
locale: pt
kiStatus: Backlog
internalReference: 1192809
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, quando um usuário deseja controlar como uma promoção arredonda os descontos, a VTEX oferece quatro modos de arredondamento:

- `nenhum` → arredondamento padrão
- `teto` → arredonda os descontos para cima (ex.: 14,56 → 14,6)
- `piso` → arredonda os descontos para baixo (ex.: 14,56 → 14,5)
- `preciso` → ignora o arredondamento de valores intermediários e arredonda apenas o resultado final

Para **descontos percentuais**, `teto` e `piso` não funcionam como esperado. Ambos produzem o mesmo resultado que `nenhum`. `preciso` não é afetado e funciona corretamente tanto para **descontos nominais quanto percentuais**.

Esse comportamento está relacionado ao fluxo de cálculo:

- `nenhum`, `teto` e `piso` arredondam o desconto unitário primeiro e depois o multiplicam pela quantidade. A lógica de arredondamento `ceiling` e `floor` só é acionada para descontos nominais. Para descontos percentuais, ela não é acionada, portanto o cálculo retorna ao comportamento padrão `none`.
- `precise` multiplica primeiro o valor total, sem arredondamento, e arredonda apenas o resultado final. Esse caminho de cálculo é independente do tipo de desconto, portanto, funciona corretamente tanto para descontos nominais quanto percentuais.

Portanto, o problema **se limita a** `ceiling` **e** `floor` **quando usados ​​com descontos percentuais**. `precise` não é afetado.

## Simulação

Uma alteração no modo de arredondamento deve ser solicitada à equipe de suporte da VTEX. Após a alteração do modo de arredondamento, crie uma promoção com um desconto percentual e teste o seguinte comportamento em todos os modos: `none`, `ceiling` e `floor` produzirão o mesmo resultado, enquanto `precise` produzirá um resultado diferente de acordo com sua própria lógica de cálculo. Para fins de comparação, o mesmo teste pode ser realizado com um desconto nominal, onde `teto` e `piso` aplicarão o arredondamento esperado.

## Workaround

N/A