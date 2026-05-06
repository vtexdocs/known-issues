---
title: 'O botão "Prosseguir para o pagamento" não funciona na divisão da entrega ao alternar entre as opções de Entrega e Retirada'
slug: o-botao-prosseguir-para-o-pagamento-nao-funciona-na-divisao-da-entrega-ao-alternar-entre-as-opcoes-de-entrega-e-retirada
status: PUBLISHED
createdAt: 2023-02-17T18:03:34.000Z
updatedAt: 2023-02-17T18:03:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: go-to-payment-button-doesnt-work-in-delivery-split-when-switching-between-delivery-and-pick-up-options
locale: pt
kiStatus: Backlog
internalReference: 756587
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um carrinho com pelo menos dois produtos, em que há uma divisão de entrega — sendo que um dos itens está disponível para retirada e o outro apenas para entrega agendada —, a interface do usuário não permitirá avançar para a etapa de pagamento ao alternar entre as opções de Retirada e Entrega, caso o primeiro item do carrinho seja aquele com entrega agendada

## Simulação

- Tenha pelo menos 2 itens no carrinho, sendo que um deles tenha entrega agendada e o outro, retirada;
- Certifique-se de que o item com entrega agendada seja o primeiro no carrinho;
- Selecione a data de entrega agendada para cada item;
- Vá para a opção Retirada;
- Volte para a opção Entrega (a data já estará preenchida);
- Tente clicar no botão “Ir para o pagamento”, você não conseguirá.

## Workaround

Selecione novamente as datas agendadas para os itens.