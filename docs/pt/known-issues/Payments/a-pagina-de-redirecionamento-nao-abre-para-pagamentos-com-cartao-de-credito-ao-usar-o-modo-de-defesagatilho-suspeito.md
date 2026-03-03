---
title: 'A página de redirecionamento não abre para pagamentos com cartão de crédito ao usar o Modo de Defesa/Gatilho: suspeito'
slug: a-pagina-de-redirecionamento-nao-abre-para-pagamentos-com-cartao-de-credito-ao-usar-o-modo-de-defesagatilho-suspeito
status: PUBLISHED
createdAt: 2026-03-03T15:55:39.099Z
updatedAt: 2026-03-03T15:55:39.099Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: redirect-page-does-not-open-for-credit-card-payments-when-using-defense-modetrigger-suspicious
locale: pt
kiStatus: Backlog
internalReference: 887866
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página de redirecionamento não abre. Quando o comprador conclui a compra, ele não é redirecionado para a página do parceiro de pagamento para finalizar as etapas de pagamento. O comprador é levado para a tela de pedido sem realmente efetuar qualquer pagamento.

Esse comportamento ocorre no Modo de Defesa e no “Gatilho: suspeito”.

## Simulação

1. Selecione/configure um método de pagamento que use redirecionamento e seja um cartão de crédito; 2. Ative o modo de defesa ou o “Gatilho: suspeito” será ativado; 3. Vá para o checkout e conclua uma compra usando o método de pagamento que tem processo de redirecionamento, por exemplo, 3ds;
4. Observe que o método de pagamento não é exibido na tela e vai diretamente para placeOrder

## Workaround

- Desative o modo de defesa; - Para “Gatilho: suspeito”, abra um ticket com o suporte do produto.