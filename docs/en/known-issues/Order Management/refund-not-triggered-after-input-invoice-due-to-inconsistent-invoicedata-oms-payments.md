---
title: 'Refund not triggered after input invoice due to inconsistent invoiceData (OMS ↔ Payments)'
slug: refund-not-triggered-after-input-invoice-due-to-inconsistent-invoicedata-oms-payments
status: PUBLISHED
createdAt: 2026-01-15T12:30:39.439Z
updatedAt: 2026-01-15T12:30:39.439Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-not-triggered-after-input-invoice-due-to-inconsistent-invoicedata-oms-payments
locale: en
kiStatus: Backlog
internalReference: 1351358
---

## Summary


After a successful refund, invoiceData on the order may not be updated if the synchronous post-refund step fails (e.g., storage error). When a new input (return) invoice is added later, SOS calculates pending refunds using the stale invoiceData and retries the earlier refund instead of the new one. The visible symptom is: the input invoice appears in Order Interactions, but no “Refund Payment” interaction is created, and no refund is sent to the connector


#### Simulation


Prerequisites:

An order that had a prior refund successfully executed and a saved refund receipt, but invoiceData was not updated due to a failure in the synchronous flow.
Steps:

Execute the first refund; the receipt is saved but invoiceData is not updated (inconsistent state).
Insert a second input invoice (e.g., $ 50).
SOS checks pending refunds based on invoiceData and re-attempts the first invoice refund instead of the new one.

Payments returns CHK0054 “dont have value to refund,” and no “Refund Payment” interaction is created for the second invoice (only invoice notifications appear).


#### Workaround


Manually process the missing refund in PCI Gateway UI or via Payments Refund API for the affected transaction; confirm that a new “Refund Payment” interaction is created afterward.

If needed internally, correct the order state by aligning invoiceData with the saved refund receipt, then execute the pending refund so SOS targets the correct invoice amount.


