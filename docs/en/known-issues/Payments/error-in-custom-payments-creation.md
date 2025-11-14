---
title: 'Error in Custom Payments creation'
slug: error-in-custom-payments-creation
status: PUBLISHED
createdAt: 2025-11-14T19:27:28.958Z
updatedAt: 2025-11-14T19:27:28.958Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-in-custom-payments-creation
locale: en
kiStatus: Backlog
internalReference: 995110
---

## Summary


Merchants can experience a bug when creating a Custom Payment, after filling everything and hit save the message `Custom payment was configured successfully!` appears but the creation actually failed (it doesn't appear in UI).


#### Simulation


Go to Custom Payments tab and configure any payment rule, you may experience the issue above.


#### Workaround


The only workaround would be retrying the creation until it appears in UI.



