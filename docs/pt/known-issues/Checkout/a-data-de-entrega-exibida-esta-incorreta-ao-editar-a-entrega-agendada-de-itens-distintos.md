---
title: 'A data de entrega exibida está incorreta ao editar a entrega agendada de itens distintos.'
slug: a-data-de-entrega-exibida-esta-incorreta-ao-editar-a-entrega-agendada-de-itens-distintos
status: PUBLISHED
createdAt: 2021-01-28T18:04:07.000Z
updatedAt: 2026-09-17T16:14:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: wrong-delivery-date-shown-when-editing-scheduled-delivery-of-distinct-items
locale: pt
kiStatus: No Fix
internalReference: 328873
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após o comprador selecionar datas de entrega diferentes para dois itens distintos, prosseguir para a etapa de pagamento e retornar para editar a entrega, as datas são exibidas incorretamente na tela. Apenas a exibição está incorreta — o pedido mantém as datas que foram efetivamente selecionadas.

## Simulação

1. Disponibilize a entrega agendada para 2 itens distintos.

2. Adicione ambos os itens ao carrinho.

3. Selecione a opção de entrega agendada.

4. Selecione datas de entrega diferentes para cada item — as datas são exibidas corretamente.

5. Salve e prossiga para a etapa de pagamento.

6. Retorne para editar as informações de entrega — as datas agora são exibidas incorretamente (no caso relatado, a janela de entrega do segundo item, de 12h a 18h, foi exibida incorretamente).

## Workaround

N/A