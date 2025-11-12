---
title: 'Shopee Brand attribute not sent or overwritten during product sync'
slug: shopee-brand-attribute-not-sent-or-overwritten-during-product-sync
status: PUBLISHED
createdAt: 2025-11-12T14:16:30.322Z
updatedAt: 2025-11-12T14:16:30.322Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: shopee-brand-attribute-not-sent-or-overwritten-during-product-sync
locale: en
kiStatus: Backlog
internalReference: 1323634
---

## Summary


Products sent from VTEX to Shopee are being published without the _Brand_ attribute, even when the _Brand_ is properly filled in VTEX and the brand already exists in Shopee. Additionally, the connector overwrites brands that are manually added in Shopee, reverting items back to “no brand.”


#### Simulation




1. Process a product in Bridge so it is sent to Shopee from the affected account.
2. Observe that the product is created or updated in Shopee without the _Brand_.
3. In Shopee, manually set the brand via bulk or file upload.
4. Wait for the next VTEX → Shopee sync and observe that the integration removes or resets the brand field again.


#### Workaround


N/A



