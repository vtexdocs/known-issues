---
title: 'Ponto de coleta não selecionado pela interface do usuário do checkout ao alterar o SLA'
slug: ponto-de-coleta-nao-selecionado-pela-interface-do-usuario-do-checkout-ao-alterar-o-sla
status: PUBLISHED
createdAt: 2025-11-07T22:01:00.862Z
updatedAt: 2025-11-07T22:01:00.862Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-unselected-by-checkout-ui-when-changing-sla
locale: pt
kiStatus: Backlog
internalReference: 1199158
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Considere um carrinho com dois ou mais itens de diferentes vendedores regulares, digamos, vendedor A e vendedor B. Se as opções de retirada já tiverem sido selecionadas como SLAs para atender a esses itens, ao alterar a opção de retirada selecionada para os itens de um dos vendedores (digamos, vendedor A) usando o Modal Pickup Point, a UI de checkout desmarca a opção de retirada selecionada para os itens do outro vendedor (digamos, vendedor B).

Quando isso acontece, a interface do usuário envia `logisticsInfo[].selectedSla` como `null` para os itens do vendedor B na solicitação `/shippingData` e o `logisticsInfo[].selectedSla` desses itens no formulário de pedido tem como padrão a entrega.
## Simulação



- Adicione dois itens de dois vendedores diferentes ao carrinho;
- Alterar o ponto de coleta;
- Alterar o SLA selecionado para um dos itens
## Workaround


N/A


