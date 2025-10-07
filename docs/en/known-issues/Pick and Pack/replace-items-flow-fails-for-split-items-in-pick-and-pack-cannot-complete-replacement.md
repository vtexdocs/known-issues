---
title: Replace Items flow fails for split items in Pick and Pack (cannot complete replacement)
slug: replace-items-flow-fails-for-split-items-in-pick-and-pack-cannot-complete-replacement
status: PUBLISHED
createdAt: 2025-10-07T21:39:02.202Z
updatedAt: 2025-10-07T21:39:02.202Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: replace-items-flow-fails-for-split-items-in-pick-and-pack-cannot-complete-replacement
locale: en
kiStatus: Backlog
internalReference: 1303803
---

## Summary


In **Pick and Pack**, the **Replace Items** flow does not function properly when an order contains split items (i.e., the same SKU split across multiple order lines due to different **prices,** **promotions, or an individual condition/personalization**). The UI requires the picker to select a specific split line and then blocks completion of the replacement.

This also occurs in **single-order picking worksheets**, preventing the substitution action from being finalized for affected items.


#### Simulation


**Prerequisites**: An order in **Pick and Pack** where a **SKU** appears **split** into multiple lines due to differences in **prices,** **promotions, or an individual condition/personalization**. This scenario is documented and reproducible.

Steps:

1.

Open the **picking worksheet** for the affected order in **Pick and Pack**.



2.

Select a **split item** and choose **Replace Items**; the system requires selecting which **specific split line** to replace.



3.

Proceed with the replacement; the flow **does not allow completion** and blocks the operation, even for **single-picking** worksheets.





#### Workaround


**Discard** split items **individually** and **add new products** as needed, aligning this process with stakeholders until the behavior is improved.



