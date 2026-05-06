---
title: 'A interface do usuário altera automaticamente o SLA selecionado quando o vendedor agendou a retirada e o item não está na primeira posição'
slug: a-interface-do-usuario-altera-automaticamente-o-sla-selecionado-quando-o-vendedor-agendou-a-retirada-e-o-item-nao-esta-na-primeira-posicao
status: PUBLISHED
createdAt: 2023-06-13T21:34:55.000Z
updatedAt: 2023-06-13T21:34:55.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-automatically-changes-the-selected-sla-when-the-seller-has-scheduled-pickup-and-item-is-not-in-the-first-position
locale: pt
kiStatus: Backlog
internalReference: 843602
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um carrinho com pelo menos dois produtos fornecidos por vendedores diferentes, se ambos os vendedores tiverem a opção de retirada agendada e o segundo item tiver várias opções de SLA, a interface do usuário apresenta um erro e seleciona automaticamente um SLA diferente, exibindo a mensagem “Não há horários disponíveis para esta data”, impedindo que se avance para a etapa de pagamento.

## Simulação

- Configure dois vendedores com retirada agendada;
- Monte um carrinho em que um vendedor forneça o segundo item com pelo menos duas retiradas agendadas;
- Selecione um horário de entrega para o primeiro item no carrinho; a mensagem “Não há horários disponíveis para esta data.” será exibida para o segundo item;
- Tente selecionar outro intervalo de entrega para o segundo item; a interface do usuário mudará e exibirá a mensagem novamente;

## Workaround

N/A