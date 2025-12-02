---
title: 'Checkout UI allows Payment with incomplete invoice address in pickup flow (inconsistent invoiceData)'
slug: checkout-ui-allows-payment-with-incomplete-invoice-address-in-pickup-flow-inconsistent-invoicedata
status: PUBLISHED
createdAt: 2025-12-02T14:38:37.106Z
updatedAt: 2025-12-02T14:38:37.106Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-ui-allows-payment-with-incomplete-invoice-address-in-pickup-flow-inconsistent-invoicedata
locale: en
kiStatus: Backlog
internalReference: 1333831
---

## Summary


Checkout may proceed to the Payment step with an incomplete invoice address (invoiceData) when the shipping method is pickup. The visible symptom is an invoice address missing mandatory fields (e.g., number), which later causes Anti-Fraud or payment processing to fail.

The evidence in the transaction is:

    ClearSale Return a RestServiceException: {"Message":"The request is invalid.","ModelState":{"[0].billing.address.number":["Invalid type. Expected String but got Null."],"[0].shipping.address.number":["Invalid type. Expected String but got Null."]}}
This affects shoppers in pickup scenarios, when an invoice-type address exists without a street number, and has been observed even when the store’s UI should require the number field.


#### Simulation


It's not possible to simulate.


#### Workaround



- Update/fix the shopper’s invoice address directly in Master Data so that mandatory fields (including number) are present and consistent.
- For unlish the transaction, open a ticket so the payment product support team can bypass the anti-fraud analysis


