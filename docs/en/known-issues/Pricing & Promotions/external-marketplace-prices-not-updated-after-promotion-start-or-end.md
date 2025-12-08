---
title: 'External Marketplace prices not updated after promotion start or end'
slug: external-marketplace-prices-not-updated-after-promotion-start-or-end
status: PUBLISHED
createdAt: 2025-12-08T20:03:19.307Z
updatedAt: 2025-12-08T20:03:19.307Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: external-marketplace-prices-not-updated-after-promotion-start-or-end
locale: en
kiStatus: Backlog
internalReference: 1322691
---

## Summary


When a promotion starts or ends, the prices in the external marketplace may not update correctly. This occurs because the Promotions or Pricing module does not automatically notify the broadcaster of affected products; therefore, there is no event for the marketplace to consume. As a result, the marketplace can display outdated prices, especially in large catalogs or accounts with many active promotions.


#### Simulation



- Create a promotion that changes the product price.
- Activate and later deactivate the promotion.
- Check the affected products in the marketplace — prices may remain outdated even after the promotion has ended.


#### Workaround


The current workaround is to perform a price load into the affected marketplace connector, so their prices are updated in the marketplace.


