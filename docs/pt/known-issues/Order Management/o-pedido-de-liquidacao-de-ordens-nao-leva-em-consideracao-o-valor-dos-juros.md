---
title: 'O pedido de liquidação de ordens não leva em consideração o valor dos juros.'
slug: o-pedido-de-liquidacao-de-ordens-nao-leva-em-consideracao-o-valor-dos-juros
status: PUBLISHED
createdAt: 2024-11-05T20:51:14.000Z
updatedAt: 2026-10-06T16:11:01.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: request-for-settlement-of-orders-does-not-account-for-the-value-of-interest
locale: pt
kiStatus: Fixed
internalReference: 1130035
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido tem juros aplicados, o valor total da transação acaba sendo maior que o valor original do pedido. No entanto, durante o processo de envio da solicitação de liquidação do sistema de pedidos para o gateway de pagamento, o sistema envia apenas o valor do pedido, sem considerar os juros, o que resulta em uma solicitação de liquidação com um valor inferior ao valor total da transação, podendo impedir que a transação seja totalmente capturada.

Em alguns casos, a transação pode permanecer no status "Capturando" indefinidamente.

## Simulação

Crie um pedido usando um método de pagamento que tenha o cálculo de juros configurado.

Após finalizar a compra, siga o fluxo normal de processamento de pedidos e envie a fatura com o valor total do pedido, incluindo os juros.

Nos detalhes da transação no gateway, você verá que a solicitação de captura será enviada com o valor do pedido, sem considerar os juros.

## Workaround

Para evitar novos casos:
O lojista pode habilitar a captura automática em conectores que aceitam juros. Dessa forma, a captura será realizada diretamente no conector, utilizando o valor total da transação, incluindo juros, e eliminando a dependência do valor enviado pelo sistema de ordens.

Para ajustar ordens já em status "Liquidação":
Para ordens que já estão em status "Liquidação" e aguardam a atualização do valor com juros, a solução é chamar explicitamente as APIs de liquidação a partir da área de pagamentos para ajustar o valor da transação.