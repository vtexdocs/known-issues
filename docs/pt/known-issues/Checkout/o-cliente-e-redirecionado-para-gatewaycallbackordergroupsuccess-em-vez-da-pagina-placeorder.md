---
title: 'O cliente é redirecionado para gatewayCallback/{orderGroup}/Success em vez da página placeOrder'
slug: o-cliente-e-redirecionado-para-gatewaycallbackordergroupsuccess-em-vez-da-pagina-placeorder
status: PUBLISHED
createdAt: 2023-04-10T16:10:01.000Z
updatedAt: 2026-03-03T21:30:14.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shopper-is-redirect-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
locale: pt
kiStatus: Backlog
internalReference: 786685
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o comprador realiza uma compra usando um cartão-presente em conjunto com um aplicativo de pagamento, se qualquer um dos pagamentos ainda não tiver sido aprovado ou recusado no momento em que o aplicativo é fechado, o comprador é redirecionado para a página
`https://{accountName}.myvtex.com/checkout/gatewayCallback/{orderGroup}/Success` em vez de ser levado para a página de _pedido concluído_.
O mesmo problema pode ocorrer com pagamentos redirecionados e cartões-presente, já que, no final do fluxo de redirecionamento, o comprador também é levado para a rota de sucesso `gatewayCallback`.

## Simulação

1. Adicione um cartão-presente de qualquer valor (deve ser inferior ao total da transação).
2. Selecione um método de pagamento que utilize um aplicativo de pagamento.
3. No console do navegador, execute: `$(window).trigger('transactionValidation.vtex', [status])`
4. Se a transação ainda não tiver sido aprovada, o comprador receberá um JSON semelhante a:
  1.

    { "RedirectResponseCollection": [], "paymentAuthorizationAppCollection": [{ "appName": "vtex.example-payment-auth-app", "appPayload": "{\"approvePaymentUrl\":\"https://account.vtexpayments.com.br/api/pvt/payment-provider/transactions/transactionId/payments/paymentId/callback?accountName=Account&X-VTEX-signature=signature\"}" }]}

## Workaround

Certifique-se de que o conector só acione o evento `transactionValidation.vtex` após o pagamento ter sido efetivamente aprovado, conforme indicado na documentação.