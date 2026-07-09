---
title: 'O endereço enviado não corresponde a nenhuma bandeira de cartão associada.'
slug: o-endereco-enviado-nao-corresponde-a-nenhuma-bandeira-de-cartao-associada
status: PUBLISHED
createdAt: 2020-11-24T17:29:48.000Z
updatedAt: 2026-07-09T14:25:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: bin-sent-does-not-match-an-associated-card-brand
locale: pt
kiStatus: Backlog
internalReference: 308896
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante o checkout, os clientes podem alterar manualmente a bandeira do cartão exibida ao lado do campo do número do cartão, substituindo a bandeira identificada automaticamente a partir do BIN. Quando a compra é concluída com a bandeira errada selecionada, a transação é processada com a bandeira incorreta, criando uma discrepância entre os registros da VTEX e o que o provedor de pagamento identifica.

Essa divergência causa:

- **Problemas de conciliação financeira**, já que diferentes bandeiras de cartão têm taxas de transação diferentes.
- **Falha em pedidos de alteração** quando a diferença de valor excede 10%, pois a discrepância de bandeira é detectada durante a tentativa de cobrança adicional.

> **Observação final:** Este Problema Conhecido está sendo encerrado. Os provedores de pagamento afetados (Cielo, MaxiPago, Moip, Redecard) são conectores legados oficialmente descontinuados e nenhuma alteração de código está planejada.

## Simulação

1. Adicione um item ao carrinho e prossiga para o checkout.

2. Insira um número de cartão de crédito e observe a bandeira do cartão identificada automaticamente a partir do BIN.
3. Clique no logotipo da bandeira do cartão e selecione manualmente uma bandeira diferente.
4. Conclua a compra.
5. Verifique a transação no painel de administração; a bandeira registrada no VTEX será diferente da bandeira do cartão identificada pelo provedor de pagamento.

## Workaround

Para impedir que os clientes alterem manualmente a bandeira do cartão, adicione o seguinte CSS ao arquivo de personalização do checkout (`checkout-custom.css`):

.card-flags .card-flag-label { pointer-events: none;}

Isso desativa os eventos de clique no logotipo da bandeira do cartão, tornando o campo somente leitura e impedindo a substituição da bandeira.