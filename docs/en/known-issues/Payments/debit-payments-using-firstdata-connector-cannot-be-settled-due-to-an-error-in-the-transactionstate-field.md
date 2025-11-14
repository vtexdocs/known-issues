---
title: 'Debit payments using Firstdata connector cannot be settled due to an error in the TransactionState field'
slug: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
status: PUBLISHED
createdAt: 2025-11-14T19:27:00.170Z
updatedAt: 2025-11-14T19:27:00.170Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
locale: en
kiStatus: Backlog
internalReference: 461095
---

## Summary


When utilizing the Firstdata connector for processing debit payments, our code is designed to expect the field TransactionState to be set as "CAPTURED." However, we have encountered an issue where the provider is sending both "CAPTURED" and "SETTLED" values, which is causing an error to occur:


    Error Message: Unknown Error on AutoSettle. There is an error in the XML document (1, 745). & Error executing the Settlement operation. Please refer to the inner exception. Connector: Firstdata. Message: Input string was not in the correct format.



#### Simulation


It is not possible to simulate since it is an intermittent behavior that depends on the payment provider's response.


#### Workaround


N/A



