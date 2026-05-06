---
title: 'A interface do usuário leva em consideração apenas os itens disponíveis para calcular o SLA'
slug: a-interface-do-usuario-leva-em-consideracao-apenas-os-itens-disponiveis-para-calcular-o-sla
status: PUBLISHED
createdAt: 2023-04-25T21:55:24.000Z
updatedAt: 2023-04-25T21:55:24.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-considers-only-the-available-items-to-calculate-sla
locale: pt
kiStatus: Backlog
internalReference: 797028
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

É possível selecionar diferentes marcas brancas de vendedores para atender aos pedidos quando se utilizam endereços diferentes para entrega e retirada. Quando a opção de retirada é selecionada e se altera para entrega, a interface do usuário considera apenas os itens disponíveis para calcular o novo SLA de entrega, mesmo que os produtos estejam disponíveis. O preço da entrega levará em conta apenas os itens selecionados que estão disponíveis para retirada.

## Simulação

- Configure duas marcas brancas de vendedor para endereços diferentes;
- Adicione produtos que estejam disponíveis para ambos os vendedores;
- Adicione um endereço para entrega no carrinho;
- Mude para retirada e adicione um endereço diferente;
- Vá para entrega e observe que o preço levará em conta apenas os itens disponíveis para retirada.

## Workaround

N/A