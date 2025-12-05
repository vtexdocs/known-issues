---
title: 'Shopper is redirect to gatewayCallback/{orderGroup}/Success instead of placeOrder page'
slug: shopper-is-redirect-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
status: PUBLISHED
createdAt: 2025-12-05T16:55:00.709Z
updatedAt: 2025-12-05T16:55:00.709Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shopper-is-redirect-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
locale: en
kiStatus: Backlog
internalReference: 786685
---

## Summary


When the shopper makes a purchase using a gift card together with a payment app, if either of the payments has not yet been approved or denied when the app is closed, the shopper is redirected to the page
`https://{accountName}.myvtex.com/checkout/gatewayCallback/{orderGroup}/Success` instead of being taken to the _order placed_ page.
The same issue can occur with redirect payments and gift cards, since at the end of the redirect flow, the shopper is also taken to the `gatewayCallback` success route.


#### Simulation



1. Add a gift card of any value (it must be lower than the transaction total).
2. Select a payment method that uses a Payment App.
3. In the browser console, run: `$(window).trigger('transactionValidation.vtex', [status])`
4. If the transaction is not approved yet, the shopper will receive JSON similar to:
  1.

    { "RedirectResponseCollection": [], "paymentAuthorizationAppCollection": [{ "appName": "vtex.example-payment-auth-app", "appPayload": "{\"approvePaymentUrl\":\"https://account.vtexpayments.com.br/api/pvt/payment-provider/transactions/transactionId/payments/paymentId/callback?accountName=Account&X-VTEX-signature=signature\"}" }]}


#### Workaround


Ensure that the connector only triggers `transactionValidation.vtex` event after the payment is actually approved, as the documentation instructs.


