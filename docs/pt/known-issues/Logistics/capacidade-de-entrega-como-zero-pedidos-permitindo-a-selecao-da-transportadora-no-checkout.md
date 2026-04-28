---
title: 'Capacidade de entrega como (zero) pedidos, permitindo a seleção da transportadora no checkout'
slug: capacidade-de-entrega-como-zero-pedidos-permitindo-a-selecao-da-transportadora-no-checkout
status: PUBLISHED
createdAt: 2026-04-28T14:04:08.369Z
updatedAt: 2026-04-28T14:04:08.369Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: delivery-capacity-as-zero-orders-allowing-schedule-carrier-at-checkout
locale: pt
kiStatus: Fixed
internalReference: 471612
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Existe uma possível configuração relacionada à capacidade de entrega utilizando (pedidos ou SKUs).

Quando a configuração é (zero) pedidos para o intervalo, é possível criar um pedido e agendá-lo para o intervalo indesejado.

## Simulação

Configure as condições da Política de Envio com (ZERO PEDIDOS) como capacidade em qualquer dia da semana.
O checkout permite criar Pedidos agendados para essa janela, durante a janela configurada como (zero pedidos)

## Workaround

A solução alternativa para isso é excluir a programação da capacidade de entrega quando o valor desejado for 0 (ZERO). Se você não quiser que um pedido seja criado nessa janela, não precisa configurá-la como (zero).