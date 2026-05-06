---
title: 'Cesta criada a partir da opção “Encomendar novamente” em “Minhas encomendas”; o e-mail do cliente não está sendo inserido como esperado no formulário de pedido'
slug: cesta-criada-a-partir-da-opcao-encomendar-novamente-em-minhas-encomendas-o-email-do-cliente-nao-esta-sendo-inserido-como-esperado-no-formulario-de-pedido
status: PUBLISHED
createdAt: 2023-12-04T22:41:07.000Z
updatedAt: 2023-12-04T22:41:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-created-from-an-order-again-option-in-my-orders-the-customers-email-is-not-being-placed-as-expected-in-the-orderform
locale: pt
kiStatus: Backlog
internalReference: 947563
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na seção **Meus pedidos**, dentro de **Minha conta**, existe a opção de criar um carrinho com base em um pedido que o cliente tenha feito anteriormente.

Nesse caso, o problema é que, em um **fluxo de televendas**, ao **assumir a identidade do cliente e tentar montar um carrinho com base em um pedido anterior**, ao clicar em **Meus Pedidos (Lista)** na opção “**Encomendar novamente**”, o e-mail do agente de televendas é inserido nos dados do perfil do cliente no formulário de pedido, e não o do cliente, como seria de se esperar.

Vale ressaltar que esse comportamento só ocorre ao clicar no botão “Encomendar novamente” na lista de pedidos de “Meus Pedidos”.

## Simulação

1. Faça login com um usuário de televendas
2. Assuma a identidade de um cliente
3. Acesse a seção “Meus Pedidos” em “Minha Conta”
4. Na lista de pedidos, clique em “Encomendar novamente” em qualquer um deles.
5. Verifique as informações do cliente no formulário de pedido (clientProfileData.email)

## Workaround

Para fazer pedidos com base em um pedido antigo, recomenda-se inserir primeiro os detalhes do pedido e, em seguida, clicar na opção “fazer novo pedido”.