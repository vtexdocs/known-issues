---
title: 'Pedido de checkoutColocado Boleto Fatura Bancária MOIP'
slug: pedido-de-checkoutcolocado-boleto-fatura-bancaria-moip
status: PUBLISHED
createdAt: 2021-06-02T23:18:59.000Z
updatedAt: 2026-07-03T16:09:21.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: checkout-orderplaced-boleto-bank-invoice-moip
locale: pt
kiStatus: Fixed
internalReference: 376951
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O recurso de pedido realizado (orderPlaced) insere automaticamente o PDF do "Boleto - Fatura Bancária" em um iframe dentro da página do pedido finalizado.

No entanto, o tipo MOIP não permite a incorporação do arquivo em outra página.

Observamos também o erro abaixo, que impede a exibição do boleto:

"`porque seu tipo MIME ('text/html') não é um tipo MIME de folha de estilo compatível e a verificação MIME estrita está ativada.`"

## Simulação

O método de pagamento selecionado para a compra é a Fatura Bancária do tipo MOIP.

O boleto não será exibido porque não é possível visualizá-lo na página de pedido realizado.

## Workaround

Não há solução alternativa. A única maneira de contornar o problema para quem utiliza o tipo MOIP é ocultar o "Boleto - Fatura Bancária" com CSS.