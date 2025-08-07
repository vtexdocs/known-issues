---
title: view_cart event is intermittently triggered twice when adding items to the minicart
slug: viewcart-event-is-intermittently-triggered-twice-when-adding-items-to-the-minicart
status: PUBLISHED
createdAt: 2025-08-07T20:06:01.195Z
updatedAt: 2025-08-07T20:06:01.195Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: viewcart-event-is-intermittently-triggered-twice-when-adding-items-to-the-minicart
locale: en
kiStatus: Backlog
internalReference: 1265581
---

## Summary


When adding items to the cart, the `view_cart` analytics event is intermittently triggered twice. This unexpected behavior leads to duplicate event entries, which can cause inaccuracies in data analysis and reporting.


#### Simulation



1. Add a product to the minicart;
2. Check your dataLayer, sometimes you will see two events of `view_cart` after the `add_to_cart`


#### Workaround


N/A



