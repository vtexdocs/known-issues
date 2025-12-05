---
title: 'O comprador é redirecionado para a página gatewayCallback/{orderGroup}/Success em vez da página placeOrder'
slug: o-comprador-e-redirecionado-para-a-pagina-gatewaycallbackordergroupsuccess-em-vez-da-pagina-placeorder
status: PUBLISHED
createdAt: 2025-12-05T16:55:04.822Z
updatedAt: 2025-12-05T16:55:04.822Z
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


Quando o comprador faz uma compra usando um cartão-presente junto com um aplicativo de pagamento, se um dos pagamentos ainda não tiver sido aprovado ou negado quando o aplicativo for fechado, o comprador será redirecionado para a página
`https://{accountName}.myvtex.com/checkout/gatewayCallback/{orderGroup}/Success` em vez de ser levado para a página _order placed_.
O mesmo problema pode ocorrer com pagamentos de redirecionamento e cartões-presente, pois no final do fluxo de redirecionamento, o comprador também é levado para a rota de sucesso `gatewayCallback`.
## Simulação



1. Adicione um cartão-presente de qualquer valor (ele deve ser menor que o total da transação).
2. Selecione um método de pagamento que use um aplicativo de pagamento.
3. No console do navegador, execute: `$(window).trigger('transactionValidation.vtex', [status])`
4. Se a transação ainda não tiver sido aprovada, o comprador receberá um JSON semelhante a:
  1.

    { "RedirectResponseCollection": [], "paymentAuthorizationAppCollection": [{ "appName": "vtex.example-payment-auth-app", "appPayload": "{\"approvePaymentUrl\":\"https://account.vtexpayments.com.br/api/pvt/payment-provider/transactions/transactionId/payments/paymentId/callback?accountName=Account&X-VTEX-signature=signature\"}" }]
## Workaround


Certifique-se de que o conector só acione o evento `transactionValidation.vtex` depois que o pagamento for realmente aprovado, conforme instrui a documentação.


