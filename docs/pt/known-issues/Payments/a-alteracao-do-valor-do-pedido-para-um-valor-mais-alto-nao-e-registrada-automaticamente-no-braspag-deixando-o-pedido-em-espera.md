---
title: 'A alteração do valor do pedido para um valor mais alto não é registrada automaticamente no BrasPag, deixando o pedido em espera'
slug: a-alteracao-do-valor-do-pedido-para-um-valor-mais-alto-nao-e-registrada-automaticamente-no-braspag-deixando-o-pedido-em-espera
status: PUBLISHED
createdAt: 2021-04-02T02:29:08.000Z
updatedAt: 2026-06-05T21:24:54.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: change-order-to-higher-value-not-captured-automatically-in-braspag-leaving-order-stuck
locale: pt
kiStatus: No Fix
internalReference: 351786
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma **ordem de alteração para um valor superior** é processada usando o conector **BrasPag**, a nova transação gerada não é capturada na mesma velocidade que uma transação normal — causando um atraso no fluxo de pedidos. Além disso, mesmo que a nova transação seja capturada por meio da **captura automática**, o pedido permanece travado e requer **intervenção manual** para prosseguir.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. A falha se manifesta em produção em pedidos do marketplace que utilizam o BrasPag, nos quais foi aplicada uma alteração de pedido para um valor mais alto.

## Workaround

Sim, há uma solução alternativa disponível: acionar manualmente a captura da transação usando a **API de captura**, o que permite que o fluxo de pedidos continue normalmente após a execução da captura manual.