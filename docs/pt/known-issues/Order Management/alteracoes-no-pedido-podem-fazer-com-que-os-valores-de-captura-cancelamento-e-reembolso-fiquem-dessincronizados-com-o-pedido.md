---
title: 'Alterações no pedido podem fazer com que os valores de captura, cancelamento e reembolso fiquem dessincronizados com o pedido.'
slug: alteracoes-no-pedido-podem-fazer-com-que-os-valores-de-captura-cancelamento-e-reembolso-fiquem-dessincronizados-com-o-pedido
status: PUBLISHED
createdAt: 2026-10-02T20:46:00.000Z
updatedAt: 2026-10-16T20:15:01.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-changes-can-leave-capture-cancellation-and-refund-amounts-out-of-sync-with-the-order
locale: pt
kiStatus: Backlog
internalReference: 1469699
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido é modificado por meio de Alteração de Pedido (Modificação de Pedido), por exemplo, removendo itens, reduzindo quantidades ou preços, ou aplicando uma taxa financeira, o Sistema de Pedidos de Venda (SOS) recalcula o valor que deve ser cancelado, capturado (liquidado) ou reembolsado na transação de pagamento. Em alguns cenários, esse recálculo mistura valores de antes e depois da alteração, e os valores enviados ao provedor de pagamento não correspondem mais ao pedido ou à fatura.

Isso afeta principalmente **cancelamentos parciais** (alterações que reduzem o valor do pedido); o cenário 4 é a exceção e envolve uma alteração que adiciona uma taxa financeira. Os cenários conhecidos são:

1. **Os juros não são devolvidos em caso de cancelamento parcial (parcelamento com juros).** Quando um item é removido de um pedido pago em parcelas com juros, o SOS cancela apenas o valor do item **sem** os juros. O cliente continua pagando juros sobre um item que não está mais no pedido. Exemplo: pedido de 100,00, transação de 127,30 (juros de 27,3%), remoção de um item de 10,00 → 10,00 são cancelados em vez de 12,73. Afeta as Ordens de Alteração V1 e V2.
2. **Captura inferior à fatura ou nenhuma captura após um cancelamento parcial.** Quando o pedido é faturado após um cancelamento parcial, o valor já cancelado pela alteração é deduzido uma segunda vez da captura. A captura acaba sendo menor que a fatura ou, quando o resultado é zero ou negativo, nenhuma captura é enviada (nenhum erro é exibido). A fatura de saída é emitida normalmente; apenas a captura está incorreta. Como consequência, os reembolsos de devoluções posteriores são recusados ​​pelo provedor de pagamento porque excedem o valor capturado. Com mais de uma transação no pedido, o cancelamento feito em uma transação também pode ser deduzido da captura da outra. Isso ocorre em pedidos em que nenhum pagamento tem juros (valor de referência igual ao valor do pagamento), independentemente do número de parcelas. Verificado com Change Order V2.
3. **Captura superior à fatura após um cancelamento parcial.** Em alguns pedidos, a captura após um cancelamento parcial é calculada como se o pedido tivesse juros, e o valor capturado é superior à fatura.
4. **Divisão nativa com cobrança financeira aplicada de forma desigual entre subpedidos.**

**Em pedidos divididos nativamente (vários subpedidos compartilhando uma transação) com uma cobrança financeira aplicada por meio de Ordens de Alteração separadas para cada subpedido (incremento), a captura do primeiro subpedido faturado pode ser menor que o valor faturado quando a cobrança é assimétrica. O saldo restante pode falhar repetidamente na captura automática, deixando a transação em "Liquidação". Não há cancelamento envolvido neste cenário.
5. **Fatura de reembolso ou de boa vontade bloqueada após um cancelamento parcial.** O reembolso gerado pela modificação do pedido é subtraído uma segunda vez ao calcular o valor disponível para reembolso. O envio de uma fatura de reembolso/boa vontade falha com o erro "400 BAD_REQUEST — "Não é possível usar o reembolso de restituição maior que 0,0"".

Os valores de captura, cancelamento e reembolso são calculados pelo SOS, não pelo provedor de pagamento. A equipe de engenharia confirmou esses cenários como bugs. São instâncias da mesma família de causas (valores em bases diferentes combinados nos cálculos de cancelamento parcial e captura, em caminhos de código diferentes) e espera-se que sejam resolvidas pela refatoração desse cálculo. Não há previsão de conclusão no momento.

## Simulação

Cenário 1: crie um pedido pago em parcelas com juros, remova um item por meio da Modificação do Pedido e compare o valor cancelado na transação com o valor do item mais sua parcela de juros.

Cenário 2: crie um pedido sem juros, remova um item por meio da Modificação do Pedido e, em seguida, fature os itens restantes. Compare o valor capturado na transação com o valor da fatura.

Cenário 5: crie um pedido de 100,00 com dois itens (A = 70,00, B = 30,00), remova o item A por meio da Modificação do Pedido e, em seguida, tente processar um reembolso por meio do Goodwill.

Os cenários 3 e 4 não possuem etapas de reprodução simples.

## Workaround

Não há solução alternativa disponível.