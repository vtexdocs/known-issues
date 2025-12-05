---
title: 'El comprador es redirigido a gatewayCallback/{orderGroup}/Success en lugar de a la página placeOrder'
slug: el-comprador-es-redirigido-a-gatewaycallbackordergroupsuccess-en-lugar-de-a-la-pagina-placeorder
status: PUBLISHED
createdAt: 2025-12-05T16:55:09.943Z
updatedAt: 2025-12-05T16:55:09.943Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shopper-is-redirect-to-gatewaycallbackordergroupsuccess-instead-of-placeorder-page
locale: es
kiStatus: Backlog
internalReference: 786685
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario


Cuando el comprador realiza una compra utilizando una tarjeta regalo junto con una aplicación de pago, si alguno de los pagos aún no se ha aprobado o denegado al cerrar la aplicación, se redirige al comprador a la página
https://{accountName}.myvtex.com/checkout/gatewayCallback/{orderGroup}/Success` en lugar de a la página _order placed_.
El mismo problema puede producirse con los pagos de redirección y las tarjetas regalo, ya que al final del flujo de redirección, el comprador también es redirigido a la ruta de éxito `gatewayCallback`.


#### Simulación



1. Añade una tarjeta regalo de cualquier valor (debe ser inferior al total de la transacción).
2. Selecciona un método de pago que utilice una Payment App.
3. En la consola del navegador, ejecute `$(window).trigger('transactionValidation.vtex', [status])`.
4. Si la transacción aún no está aprobada, el comprador recibirá JSON similar a:
  1.

    { "RedirectResponseCollection": [], "paymentAuthorizationAppCollection": [{"appName": "vtex.example-payment-auth-app", "appPayload": "{\"approvePaymentUrl\":\"https://account.vtexpayments.com.br/api/pvt/payment-provider/transactions/transactionId/payments/paymentId/callback?accountName=Account&X-VTEX-signature=signature\"}" }]}

## Workaround


Asegúrese de que el conector sólo desencadena el evento `transactionValidation.vtex` después de que el pago se haya aprobado realmente, tal y como se indica en la documentación.


