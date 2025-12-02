---
title: 'Place Order from Exisiting Cart ignores tax service response validation when isMarketplaceResponsibleForTaxes flag is true on taxConfiguration'
slug: place-order-from-exisiting-cart-ignores-tax-service-response-validation-when-ismarketplaceresponsiblefortaxes-flag-is-true-on-taxconfiguration
status: PUBLISHED
createdAt: 2025-12-02T18:55:12.998Z
updatedAt: 2025-12-02T18:55:12.998Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: place-order-from-exisiting-cart-ignores-tax-service-response-validation-when-ismarketplaceresponsiblefortaxes-flag-is-true-on-taxconfiguration
locale: en
kiStatus: Backlog
internalReference: 1334135
---

## Summary



If `isMarketplaceResponsibleForTaxes` is set as `true` on `taxConfiguration` at the orderForm Configuration, Place Order from Existing Cart will ignore the validation of the response of the tax service. This means that, if the tax service response is a different value from the tax value present on the orderForm, no error will be raised and the order will be placed using the tax value of the orderForm.


#### Simulation




1. Create a tax service according to our official documentation. It can be via a Mocker or a tax service linked app

2. Configure the `taxConfiguration` objects of the orderForm configuration as follows using the Update OrderForm Configuration endpoint:

`"taxConfiguration": {
        "url": {YOUR_TAX_SERVICE_URL},
        "authorizationHeader": {YOUR_AUTHORIZATION_CODE},
        "allowExecutionAfterErrors": false,
        "integratedAuthentication": false,
        "appId": "tax-protocol-example",
        "isMarketplaceResponsibleForTaxes": true
    }`

3. Create a new cart and follow with the checkout flow via API. Maitain the tax service's response for the tax value applied to the cart in a fixed value (ex.: 500) until immediately before the Place Order request

4. Before performing the Place Order, change the response of the tax service to another value (ex.: 900)

5. Perform the Place Order using Checkout's Debugger. With the debugger, it will be possible to see that the Tax Service will return the updated value (900), different from thebut the order will be created successfully with the previous tax value contained on the orderForm (500).


#### Workaround



Since this scenario only happens when the Marketplace is responsible for the taxes, the merchant responsible for the Marketplace can change the order's value to apply the correct tax value after it is created.



