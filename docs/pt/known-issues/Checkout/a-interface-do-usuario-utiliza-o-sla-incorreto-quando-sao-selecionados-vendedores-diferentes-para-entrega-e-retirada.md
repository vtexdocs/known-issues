---
title: 'A interface do usuário utiliza o SLA incorreto quando são selecionados vendedores diferentes para entrega e retirada'
slug: a-interface-do-usuario-utiliza-o-sla-incorreto-quando-sao-selecionados-vendedores-diferentes-para-entrega-e-retirada
status: PUBLISHED
createdAt: 2023-04-25T21:51:44.000Z
updatedAt: 2023-04-25T21:51:44.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-uses-the-wrong-sla-when-different-sellers-is-selected-for-delivery-and-pickup
locale: pt
kiStatus: Backlog
internalReference: 797023
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

É possível selecionar diferentes marcas brancas de vendedores para atender aos pedidos quando se utilizam endereços diferentes para entrega e retirada. A interface do usuário considera o SLA incorreto ao alternar entre entrega e retirada.
Por exemplo, ao mudar de entrega para retirada no carrinho, a interface do usuário aplicará o endereço de retirada e selecionará o ID do SLA de retirada que estava disponível para o endereço de entrega, o qual não está mais disponível e não mostrará/selecionará as novas retiradas.

## Simulação

- Configure duas marcas brancas de vendedores para endereços diferentes;
- Adicione produtos que estejam disponíveis para ambos os vendedores;
- Adicione um endereço para entrega no carrinho;
- Mude para retirada e adicione um endereço diferente;
- Vá para entrega e volte novamente para retirada;
- Nenhuma retirada será selecionada, e a mensagem “Entrega não disponível para sua localização.” será exibida.

## Workaround

N/A