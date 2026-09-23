---
title: 'Customer Credit payment denied in Sales App when a closed account exists for the same document'
slug: customer-credit-payment-denied-in-sales-app-when-a-closed-account-exists-for-the-same-document
status: PUBLISHED
createdAt: 2026-09-23T23:29:06.000Z
updatedAt: 2026-09-23T23:29:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: customer-credit-payment-denied-in-sales-app-when-a-closed-account-exists-for-the-same-document
locale: en
kiStatus: Backlog
internalReference: 1465432
---

## Summary

Orders placed through the **Sales App** and paid with **Customer Credit** are denied, even though the customer's credit account is _Open_ and has available credit. It happens when the customer has an _Open_ account created with a custom `documentType` (e.g. `{document}_CUSTOM`) and also a _Closed_ account using a native `documentType` (`{document}_CPF` or `{document}_CNPJ`). The error returned in the transaction is `"Payment DENIED by VTEX Customer Credit. Reason: The Credit Account is closed."`. The same purchase is approved in the web Checkout UI.

## Simulation

1. Create a Customer Credit account for a document using a custom `documentType`, leaving it _Open_ and with available credit;
2. Ensure an account with the native ID pattern (`{document}_CPF`) exists for the same document with the status _Closed_;
3. Place an order for this customer through the **Sales App, paying with Customer Credit**;
4. The payment is denied with `"The Credit Account is closed."`, while the same purchase would be approved in the web Checkout UI.

## Workaround

Complete the order through the web Checkout UI. For new customers, creating the Customer Credit account with a native `documentType` avoids the scenario, but this is not applicable when the native ID is already taken by a _Closed_ account.