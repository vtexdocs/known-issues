---
title: 'Order report inconsistency when tid field is duplicated in the connectorResponses field from GET payment details API.'
slug: order-report-inconsistency-when-tid-field-is-duplicated-in-the-connectorresponses-field-from-get-payment-details-api
status: PUBLISHED
createdAt: 2023-09-06T21:17:51.000Z
updatedAt: 2023-09-06T21:17:51.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: order-report-inconsistency-when-tid-field-is-duplicated-in-the-connectorresponses-field-from-get-payment-details-api
locale: en
kiStatus: Backlog
internalReference: 895664
---

## Summary

Connectors from that list need to save more fields for the connector that works with “Venda direta” - Sales app. Specifically, for the connectors listed below, and only for them, all content from the payload should be directed to the "`connectorResponses`" field. This results in a duplication of the "`tid`" field, which already exists in the "`connectorResponses`." While this duplication does not pose a problem in terms of the transaction life cycle, it does create an inconsistency when generating reports from the order page.


- PagarMeV3
- PagarMeV3Stg
- Adyen V3

## Simulation

1. Access the admin order page.
2. Generate the order report.
3. Look for the `tId` column where the orders were placed using one of these connectors

## Workaround

Use the /payment route or the GET order API to retrieve this data