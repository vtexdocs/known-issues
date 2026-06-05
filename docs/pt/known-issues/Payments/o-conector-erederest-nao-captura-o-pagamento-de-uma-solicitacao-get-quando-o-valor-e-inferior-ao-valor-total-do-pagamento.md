---
title: 'O conector ERedeRest não captura o pagamento de uma solicitação GET quando o valor é inferior ao valor total do pagamento'
slug: o-conector-erederest-nao-captura-o-pagamento-de-uma-solicitacao-get-quando-o-valor-e-inferior-ao-valor-total-do-pagamento
status: PUBLISHED
createdAt: 2022-09-22T23:56:07.000Z
updatedAt: 2026-06-05T20:43:22.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: erederest-connector-doesnt-capture-payment-from-get-request-when-its-amount-is-lower-than-the-total-value-of-the-payment
locale: pt
kiStatus: No Fix
internalReference: 664081
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Nos casos em que há um cancelamento parcial, por exemplo, no próprio pagamento antes do início da operação de liquidação, nosso conector para o ERedeRest não consegue avançar para o status de Captura de Pagamento, pois o valor capturado pelo provedor não corresponde ao valor inicialmente aprovado, devido a uma condição no código do nosso conector que determina isso.

## Simulação

Crie uma transação com o ERedeRest; logo após a autorização, envie um cancelamento parcial e, em seguida, capture o restante do valor do pagamento. Além disso, esse bug só ocorrerá se a primeira solicitação tiver um tempo limite (timeout) ou se, por qualquer motivo, não conseguirmos obter a primeira resposta; então, faremos uma nova solicitação GET para verificar esse pagamento. Assim, mesmo que o status seja “Aprovado”, não avançaremos o status porque o valor retornado é menor do que o valor da transação.

## Workaround

Não há solução alternativa disponível.