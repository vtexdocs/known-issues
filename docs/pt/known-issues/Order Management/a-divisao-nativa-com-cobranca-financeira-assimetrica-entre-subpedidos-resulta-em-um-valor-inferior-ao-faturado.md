---
title: 'A divisão nativa com cobrança financeira assimétrica entre subpedidos resulta em um valor inferior ao faturado.'
slug: a-divisao-nativa-com-cobranca-financeira-assimetrica-entre-subpedidos-resulta-em-um-valor-inferior-ao-faturado
status: PUBLISHED
createdAt: 2026-10-02T20:46:00.000Z
updatedAt: 2026-10-02T20:46:00.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: native-split-with-asymmetric-financial-charge-across-suborders-settles-less-than-the-invoiced-amount
locale: pt
kiStatus: Backlog
internalReference: 1469699
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em pedidos divididos nativamente (vários subpedidos compartilhando uma única transação de pagamento) pagos em parcelas com encargo financeiro (juros), o encargo pode ser aplicado por meio de operações ChangeOrderV2 separadas, uma para cada subpedido. Quando o encargo resultante é **assimétrico** entre os subpedidos, o valor liquidado quando o primeiro subpedido é faturado pode ser **menor que o valor faturado**. O saldo restante da transação pode então falhar na liquidação automática repetidas vezes, deixando a transação em "Liquidação".

O valor de liquidação é calculado pelo Sistema de Pedidos de Venda (SOS), não pelo provedor de pagamento. Espera-se que o cálculo esteja correto apenas quando o encargo for simétrico entre os subpedidos.

A equipe de engenharia confirmou que se trata de um bug. A correção requer uma refatoração significativa do cálculo do valor proporcional e não há previsão de conclusão no momento.

## Simulação

Não há uma maneira fácil de reproduzir o cenário.

## Workaround

Não há solução alternativa disponível.