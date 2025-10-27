---
title: 'Os valores mínimo e máximo da logística afetam o fluxo de alocação'
slug: os-valores-minimo-e-maximo-da-logistica-afetam-o-fluxo-de-alocacao
status: PUBLISHED
createdAt: 2025-10-16T20:53:09.788Z
updatedAt: 2025-10-16T20:53:09.788Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: the-minimum-and-maximum-values-of-the-logistics-affect-the-allocation-flow
locale: pt
kiStatus: Backlog
internalReference: 1227934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


A alocação de um item pode não ocorrer como esperado quando o carrinho tem itens de diferentes vendedores e um desses vendedores tem regras de envio baseadas no intervalo de valores;
Em cenários de carrinho com mais de uma SKU e uma dessas SKUs está disponível em um único vendedor, e esse vendedor tem regras de transporte condicionadas ao valor total do pedido, a heurística do sistema pode descartar opções válidas de SLA durante o processo de simulação, resultando na mensagem "`unavailableItemFulfillment`" para o item no checkout; em outras palavras, o sistema não consegue alocar corretamente todos os itens do carrinho.
## Simulação


Para simular isso, configure dois SKUs, cada um disponível exclusivamente em um vendedor diferente:

Para um dos vendedores, crie duas opções de envio (SLAs) condicionadas pelo valor do carrinho:

Exemplo:

"Frete A": válido de 0 a 100
"Frete B": válido de 100 a 999.000,00.

Agora simule um carrinho com unidades da SKU entregues por cada um dos vendedores, de modo que o valor total do carrinho seja maior do que o valor suportado pela opção Shipping A.

Quando você chega à etapa de checkout, o sistema retorna a mensagem "`unavailableItemFulfillment`" para um dos itens.

O algoritmo de alocação executa duas simulações: uma considerando o carrinho inteiro (multi-item) e uma simulação individual por item e, devido à lógica de descarte baseada na resposta do carrinho inteiro, o SLA que seria viável para a SKU 01 na simulação item a item é eliminado.

No cenário descrito, um dos SLAs disponíveis ("Shipping B") para o SKU 01 é descartado por não estar presente na simulação considerando o carrinho inteiro, levando à impossibilidade de alocação dos itens
## Workaround


Atualmente, não há uma solução alternativa nativa para contornar completamente o problema.



