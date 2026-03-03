---
title: 'El comprador es redirigido a gatewayCallback/{orderGroup}/Success en lugar de a la página placeOrder.'
slug: el-comprador-es-redirigido-a-gatewaycallbackordergroupsuccess-en-lugar-de-a-la-pagina-placeorder
status: PUBLISHED
createdAt: 2026-03-03T18:30:49.890Z
updatedAt: 2026-03-03T18:30:49.890Z
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

Cuando el comprador realiza una compra utilizando una tarjeta regalo junto con una aplicación de pago, si alguno de los pagos aún no ha sido aprobado o rechazado cuando se cierra la aplicación, el comprador es redirigido a la página `https://{accountName}.myvtex.com/checkout/gatewayCallback/{orderGroup}/Success` en lugar de ser llevado a la página _pedido realizado_.
El mismo problema puede ocurrir con los pagos redirigidos y las tarjetas regalo, ya que al final del flujo de redireccionamiento, el comprador también es redirigido a la ruta de éxito `gatewayCallback`.

## Simulación

1. Añada una tarjeta regalo de cualquier valor (debe ser inferior al total de la transacción).
2. Seleccione un método de pago que utilice una aplicación de pago. 3. En la consola del navegador, ejecute: `$(window).trigger('transactionValidation.vtex', [status])` 4. Si la transacción aún no ha sido aprobada, el comprador recibirá un JSON similar a: 1.

    { "RedirectResponseCollection": [], "paymentAuthorizationAppCollection": [{ "appName": "vtex.example-payment-auth-app", "appPayload": "{\"approvePaymentUrl\":\"https://account.vtexpayments.com.br/api/pvt/payment-provider/transactions/transactionId/payments/paymentId/callback?accountName=Account&X-VTEX-signature=signature\"}" }]}

## Workaround

Asegúrese de que el conector solo active el evento `transactionValidation.vtex` después de que el pago haya sido realmente aprobado, tal y como se indica en la documentación.