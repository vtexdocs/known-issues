---
title: 'Seller inactivation in new Seller Register UI does not trigger product reindexing (Marketplace sync gap)'
slug: seller-inactivation-in-new-seller-register-ui-does-not-trigger-product-reindexing-marketplace-sync-gap
status: PUBLISHED
createdAt: 2025-10-08T16:22:24.389Z
updatedAt: 2025-10-08T16:22:24.389Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: seller-inactivation-in-new-seller-register-ui-does-not-trigger-product-reindexing-marketplace-sync-gap
locale: en
kiStatus: Fixed
internalReference: 915970
---

## Summary


In the new Seller experience (/admin/sellers), inactivating a seller is not triggering the expected product reindexing. The visible symptom is that products from the inactivated seller remain listed/available in connected marketplaces and are not removed or updated. This affects stores integrating with marketplaces via affiliate endpoints for the seller’s trade policy, using the new Seller Register UI.


#### Simulation



- Prerequisites: Store integrated with a marketplace via an affiliate endpoint for the seller’s trade policy.
- Steps:
  - Access the new Seller Register UI: /admin/sellers.
  - Inactivate a seller that is available for the same trade policy integrated with the marketplace.
  - Observe in the marketplace that the seller’s items are not updated/removed as expected (no reindex is triggered).


#### Workaround


n/a


