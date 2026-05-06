---
title: 'Divisão da entrega com a Lean Shipping apresenta um SLA inválido'
slug: divisao-da-entrega-com-a-lean-shipping-apresenta-um-sla-invalido
status: PUBLISHED
createdAt: 2024-02-27T19:18:52.000Z
updatedAt: 2024-02-27T19:26:11.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delivery-split-with-lean-shipping-offering-invalid-sla
locale: pt
kiStatus: Backlog
internalReference: 990155
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um carrinho de compras inclui produtos de diferentes vendedores, com diferentes canais de entrega e IDs de SLA entre eles, a interface de checkout ativa o Lean Shipping, resumindo os SLAs disponíveis para exibir apenas as opções “mais rápidas” e “mais baratas” para cada item.

No entanto, se houver uma opção de entrega agendada, mas ela não for a mais rápida ou a mais barata, o botão de agendamento ainda aparecerá na interface do usuário, mesmo que o Lean Shipping não a selecione como uma opção viável.

## Simulação

- Monte um carrinho com pelo menos 2 vendedores diferentes, em que um item tenha 3 SLAs, sendo que a opção agendada não seja nem a mais rápida nem a mais barata (e, portanto, não será oferecida pelo Lean Shipping).
- Selecione a retirada na loja.
- Use a interface de agendamento da interface do usuário para a entrega do outro item.
- Observe que ele ainda aplica o SLA mais rápido/mais barato (não agendado), em vez do agendado, ignorando efetivamente sua seleção de janela de entrega da etapa anterior.

## Workaround

N/A