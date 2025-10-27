---
title: 'Seller selection excludes single seller of SKU with low coverage, causing unavailability in allocation step'
slug: seller-selection-excludes-single-seller-of-sku-with-low-coverage-causing-unavailability-in-allocation-step
status: PUBLISHED
createdAt: 2025-09-25T20:49:06.637Z
updatedAt: 2025-09-25T20:49:06.637Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: seller-selection-excludes-single-seller-of-sku-with-low-coverage-causing-unavailability-in-allocation-step
locale: en
kiStatus: Backlog
internalReference: 1298003
---

## Summary


Ao selecionar sellers para simulação/alocação com base na heurística de Checkout, em carrinhos com cobertura assimétrica entre SKUs (muitos sellers para um SKU e apenas um seller para o outro), a redução a “até 12” sellers pode excluir o único seller que atende o segundo SKU. Na alocação, este SKU pode tentar ser alocado no mesmo seller do primeiro SKU e retornar indisponibilidade, isso ocorre mesmo havendo um seller apto fora da lista reduzida. Limitação causada pela prioridade por cobertura e pelos critérios minPrice/minTime dentro do teto técnico de simulação.


#### Simulation


1- Configurar carrinho com 2 SKUs em DELIVERY, garantindo que o SKU A tenha dezenas de sellers elegíveis e o SKU B apenas 1 seller elegível (rotas/estoque/preço).

2- Garantir que haja mais de 12 sellers whitelabel elegíveis antes dos cortes, forçando a etapa de Seleção a reduzir a “até 12”.

3- Simular o carrinho (Checkout); inspecionar a lista de sellers selecionados (motivos fullyAvailableItemsCount/minPrice/minTime) e verificar se o seller único do SKU B foi excluído.

4- Verificar na Alocação que o SKU B retorna indisponibilidade por tentativa de alocação em sellers sem disponibilidade para ele (seller do SKU A ou seller 1 sem estoque/preço)


#### Workaround


 There is no workaround available



