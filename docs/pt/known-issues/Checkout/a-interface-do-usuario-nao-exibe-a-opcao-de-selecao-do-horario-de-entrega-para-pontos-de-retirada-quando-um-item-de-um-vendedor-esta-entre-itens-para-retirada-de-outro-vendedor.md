---
title: 'A interface do usuário não exibe a opção de seleção do horário de entrega para pontos de retirada quando um item de um vendedor está entre itens para retirada de outro vendedor'
slug: a-interface-do-usuario-nao-exibe-a-opcao-de-selecao-do-horario-de-entrega-para-pontos-de-retirada-quando-um-item-de-um-vendedor-esta-entre-itens-para-retirada-de-outro-vendedor
status: PUBLISHED
createdAt: 2023-12-15T20:18:33.000Z
updatedAt: 2023-12-15T20:18:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-delivery-window-selection-for-pickup-points-when-an-item-from-a-seller-is-between-items-for-pickup-from-another-seller
locale: pt
kiStatus: Backlog
internalReference: 954108
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um carrinho com pelo menos três produtos, em que a ordem dos itens é: o primeiro é para a retirada agendada 1, o segundo para a retirada agendada 2 (vendedor diferente) e o terceiro é para a retirada agendada 1, a interface do usuário não exibirá os horários de entrega para selecionar a data/hora da segunda retirada. Isso ocorre porque a API agrupará o 1º e o 3º item, uma vez que se trata do mesmo SLA.

Não é possível avançar para a etapa de pagamento e concluir a compra.

## Simulação

- Adicione um item ao carrinho para retirada com o vendedor A;
- Adicione um item ao carrinho para retirada com o vendedor B;
- Adicione outro item ao carrinho para retirada com o vendedor A;
- Na etapa de envio, os horários de entrega para seleção da data/hora não serão exibidos.

## Workaround

N/A