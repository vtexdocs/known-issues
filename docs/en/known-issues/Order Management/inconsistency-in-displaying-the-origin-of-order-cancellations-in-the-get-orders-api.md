---
title: Inconsistency in displaying the origin of order cancellations in the Get Orders API
slug: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
status: PUBLISHED
createdAt: 2025-10-22T12:34:13.215Z
updatedAt: 2025-10-22T12:34:13.215Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: inconsistency-in-displaying-the-origin-of-order-cancellations-in-the-get-orders-api
locale: en
kiStatus: Backlog
internalReference: 1249934
---

## Summary


In some cases of orders originating from the native flow between the marketplace and the seller, when the cancellation is initiated by the system or via seller, for example in the event of payment failure or internal rules, the information about the origin of the cancellation may not be displayed correctly in the responses from the OMS Get Order and Orders APIs.

The cancellationData field, which historically identifies the origin of the cancellation (such as `requestedByPaymentNotification`), may contain generic information - such as fulfillment - or may not display any details. This is due to the process of merging cancellation information between marketplace and seller, which can overwrite relevant data depending on the order of events.


#### Simulation



- Generate an order in an account with integration between seller and marketplace.
- Simulate an automatic cancellation, for example, due to payment authorization failure.
- Access the OMS Get Order API or Orders.
- Note that the `cancellationData` field may not clearly indicate that the cancellation was made by the payment module.
- If possible, compare it with the response from the SOS Orders API, where the origin usually appears correctly.


#### Workaround


Currently, there is no workaround to prevent this type of scenario from occurring. However, to correctly identify the source of the cancellation in affected cases, internal team support is required. Therefore, we recommend opening a ticket to manually analyze the logs and validate the actual source of the cancellation.



