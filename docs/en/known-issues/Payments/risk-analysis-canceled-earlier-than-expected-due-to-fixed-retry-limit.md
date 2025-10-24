---
title: 'Risk analysis canceled earlier than expected due to fixed retry limit'
slug: risk-analysis-canceled-earlier-than-expected-due-to-fixed-retry-limit
status: PUBLISHED
createdAt: 2025-08-28T13:19:50.473Z
updatedAt: 2025-08-28T13:19:50.473Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: risk-analysis-canceled-earlier-than-expected-due-to-fixed-retry-limit
locale: en
kiStatus: Backlog
internalReference: 1282965
---

## Summary


In a transaction with an anti-fraud connector built using VTEX’s standard anti-fraud protocol, it is possible to notice that when the **hook** field is sent, the transaction is canceled earlier than expected. By default, the anti-fraud controller enqueues **24 attempts** instead of the desired number defined by the provider when the method with hook is triggered. This results in far fewer analysis attempts than expected.

The following message is strong evidence that the issue occurred:

    Could not do risk analysis for transaction . Current Transaction status was AnalyzingRisk. Authorization tries: 24. Exception Message : Could not confirm the transaction with Id = . Confirmation pending. Authorization tries: 24.Finished retries.



#### Simulation



1. Configure an anti-fraud connector that has the **hook** field.
2. Create a transaction that uses a rule with an anti-fraud connector (AFPP).
3. Check the iterations: there will only be 24 retries of risk analysis. After that, the transaction will enter the cancellation flow.


#### Workaround


There is no workaround.



