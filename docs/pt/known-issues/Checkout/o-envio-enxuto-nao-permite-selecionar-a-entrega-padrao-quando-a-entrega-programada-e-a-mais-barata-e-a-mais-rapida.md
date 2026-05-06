---
title: 'O envio enxuto não permite selecionar a entrega padrão quando a entrega programada é a mais barata e a mais rápida'
slug: o-envio-enxuto-nao-permite-selecionar-a-entrega-padrao-quando-a-entrega-programada-e-a-mais-barata-e-a-mais-rapida
status: PUBLISHED
createdAt: 2023-06-12T12:40:04.000Z
updatedAt: 2023-06-12T12:40:04.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-doesnt-allow-selecting-regular-delivery-when-scheduled-delivery-is-the-cheapest-and-fastest
locale: pt
kiStatus: Backlog
internalReference: 842018
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em carrinhos em que há uma entrega agendada e uma entrega normal, e o Lean Shipping está ativado; se a opção mais barata e mais rápida for a entrega agendada, a interface do usuário exibirá o botão de alternância normalmente, mas, ao desmarcá-lo, nada acontecerá, e a entrega agendada continuará selecionada.

## Simulação

- Registre a entrega agendada e uma entrega regular;
- Certifique-se de que a entrega agendada seja a mais barata e rápida entre as duas;
- Ative o Lean Shipping;
- Na etapa de envio, selecione a entrega agendada e desmarque; nada mudará.

## Workaround

Desative o Lean Shipping.