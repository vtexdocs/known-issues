---
title: Transaction stuck in Settling after Capture fails due to recipientsSplitRemainValue mismatch
slug: transaction-stuck-in-settling-after-capture-fails-due-to-recipientssplitremainvalue-mismatch
status: PUBLISHED
createdAt: 2025-09-22T16:32:46.832Z
updatedAt: 2025-09-22T16:32:46.832Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-settling-after-capture-fails-due-to-recipientssplitremainvalue-mismatch
locale: en
kiStatus: -
internalReference: 1295769
---

## Summary


**Symptom:** After a partial capture followed by a partial cancellation and a refund, the transaction remains in `settling` on VTEX.
While the gateway may display the charge as “captured/paid” in a consolidated view, on VTEX the `/settlements` endpoint only reflects the partial capture and the refund.
Subsequent capture attempts fail due to an inconsistency in the calculation of `recipientsSplitRemainValue`.

The additional data field `recipientsSplitRemainValue` stored for the transaction has a divergent split amount for one or more recipients. This mismatch causes settlement validations to fail and prevents VTEX from completing the remaining capture amount.


#### Simulation


1. Ensure the account is enabled under the feature flag `can-retain-settlement.jsonnet`.
2. Create a new transaction in the test account.
3. Perform a **partial capture** of the transaction.
4. Cancel part of the previously captured amount.
5. Refund the canceled amount.
6. Try to capture the remaining amount of the transaction.


#### Workaround


N/A.



