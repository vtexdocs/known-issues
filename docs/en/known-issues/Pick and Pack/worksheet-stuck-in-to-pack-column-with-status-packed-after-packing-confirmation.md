---
title: Worksheet stuck in “To pack” column with status “Packed” after packing confirmation
slug: worksheet-stuck-in-to-pack-column-with-status-packed-after-packing-confirmation
status: PUBLISHED
createdAt: 2025-09-30T14:51:37.702Z
updatedAt: 2025-09-30T14:51:37.702Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: worksheet-stuck-in-to-pack-column-with-status-packed-after-packing-confirmation
locale: en
kiStatus: Backlog
internalReference: 1299842
---

## Summary


In rare cases, after packing confirmation, the Worksheet remains in the “To pack” column with status “Packed” instead of transitioning to “Completed”. The order in Pick and Pack reaches COMPLETED, but the corresponding Worksheet does not advance, creating an inconsistency in Pick and Pack information and also with the OMS.

Analysis indicates the status synchronization between Order (COMPLETED) and Worksheet (PACKED → COMPLETED) fails silently when the order contains rejected items; no error logs are produced, suggesting a gap in the state-transition handling rather than an exception. This has been observed in isolated cases (examples provided by the customer).


#### Simulation


Note: Reproduction is not deterministic; reported occurrences share a common pattern.


1. Create an order that proceeds through Picking and Packing in Pick and Pack.
2. During picking/packing, reject at least one item (e.g., due to out-of-stock). Proceed to confirm packing for the remaining items so the order can be completed in OMS.
3. Observe that the order transitions to COMPLETED, but the Worksheet remains in the “To pack” column with status “Packed,” instead of becoming “Completed.”


#### Workaround


Manual correction: Manually adjust/force the affected Worksheet status to align with the order's final status (internal action by engineering/support when the issue occurs). This was used to address the immediate customer impact in the reported cases.

Monitoring: Track future occurrences, especially orders where at least one item was rejected, as this condition is correlated with synchronization failure. Capture order IDs and Worksheet IDs for engineering follow-up.



