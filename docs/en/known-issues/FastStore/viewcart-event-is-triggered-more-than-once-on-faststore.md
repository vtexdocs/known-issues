---
title: view_cart event is triggered more than once on Faststore
slug: viewcart-event-is-triggered-more-than-once-on-faststore
status: PUBLISHED
createdAt: 2025-10-16T20:29:44.083Z
updatedAt: 2025-10-16T20:29:44.083Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: viewcart-event-is-triggered-more-than-once-on-faststore
locale: en
kiStatus: Fixed
internalReference: 1163447
---

## Summary


When you open the mini cart on Faststore the view_cart event is triggered more than once.

The problem is probably related to this code line.


#### Simulation



- Use the parameter `gtm_debug=true`
- Try opening the minicart
- See the event view_cart being triggered more than once on dataLayer

You can test it on our default store https://starter.vtex.app/


#### Workaround


N/A



