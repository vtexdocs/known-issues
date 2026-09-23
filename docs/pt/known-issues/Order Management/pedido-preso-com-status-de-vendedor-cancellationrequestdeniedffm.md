---
title: 'Pedido preso com status de vendedor cancellation-request-denied-ffm'
slug: pedido-preso-com-status-de-vendedor-cancellationrequestdeniedffm
status: PUBLISHED
createdAt: 2024-03-22T20:50:22.000Z
updatedAt: 2026-09-23T22:27:41.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-stuck-at-seller-status-cancellationrequestdeniedffm
locale: pt
kiStatus: Fixed
internalReference: 1004978
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos que alguns vendedores, na estrutura de vendedores e marketplaces da VTEX, ao solicitarem o cancelamento, recusam esse cancelamento pela interface do usuário ou chamam a API "cancellation-request-denied-ffm". Isso ocorre como se estivessem negando a própria solicitação de cancelamento, pois, por algum motivo, a solicitação para negar o cancelamento se sobrepõe à solicitação de cancelamento.

Como resultado, o pedido fica preso no vendedor, no status "cancellation-request-denied-ffm".

E, em alguns casos, o próprio marketplace tenta solicitar o cancelamento e, consequentemente, também fica preso no status "solicitar cancelamento".

Por outro lado, temos o caso em que o marketplace não recebe essa notificação de cancelamento e continua com o seu pedido até o status Faturado!

Em todos os casos, não conseguimos alterar o status desses pedidos.

## Simulação

1- Criar um pedido com marca branca do vendedor;
2- No pedido do vendedor, altere o status para "em processamento";
3- Ainda no vendedor, solicite o cancelamento do pedido;
4- Na solicitação do vendedor, você verá a mensagem "aceitar ou recusar o cancelamento". Clique na opção "recusar" no vendedor ou use a API. Você verá que a solicitação do vendedor passará para o status "cancellation-request-denied-ffm".
5- No pedido do Marketplace, clique em "cancelar";
6- A solicitação do Marketplace ficará travada em "Solicitação de Cancelamento";

Pode acontecer que o pedido do Marketplace continue e seja faturado, e a fatura seja enviada.

## Workaround

Esta não é uma solução alternativa, mas sim uma orientação para os gerentes de contas: quando o vendedor solicitar o cancelamento, não recusem a solicitação.