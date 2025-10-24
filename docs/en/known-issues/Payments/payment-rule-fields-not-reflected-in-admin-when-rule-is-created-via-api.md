---
title: Payment rule fields not reflected in Admin when rule is created via API
slug: payment-rule-fields-not-reflected-in-admin-when-rule-is-created-via-api
status: PUBLISHED
createdAt: 2025-10-24T17:05:31.340Z
updatedAt: 2025-10-24T17:05:31.340Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-fields-not-reflected-in-admin-when-rule-is-created-via-api
locale: en
kiStatus: Backlog
internalReference: 1313230
---

## Summary


When a payment rule is created via the Payments API, the Admin detail page for that rule does not display some selections (e.g., Issuer and Segment) as selected, even though the rule is correctly applied at checkout.


#### Simulation



-

Prerequisite: Permission to create rules via API using **POST Insert a new payment rule** at /api/pvt/rules



-

Steps:



1) Create a new rule via API, including Issuer configuration and Segment in the payload.



2) Open Admin > Payments > Rules. Observe the rule “card” shows the configured Issuer/Segment as expected.



3) Click into the rule detail page. Observe Issuer and Segment dropdowns are not preselected



4) Validate functional behavior in checkout: a BIN matching the configured Issuer/Segment allows the configured installment length; a non-matching BIN does not show that installment option.



#### Workaround


Open the rule in Admin, manually reselect Issuer and Segment in the UI, and Save, so the UI writes back the expected shape and fields become visible in the detail screen



