---
title: 'Products showing flag and discount after promotion ended'
slug: products-showing-flag-and-discount-after-promotion-ended
status: PUBLISHED
createdAt: 2025-11-14T19:36:48.544Z
updatedAt: 2025-11-14T19:36:48.544Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: products-showing-flag-and-discount-after-promotion-ended
locale: en
kiStatus: Backlog
internalReference: 383911
---

## Summary


Sometimes promotion flags and discounts are displayed on PLP and PLP after the promotion's expiration date. This happens because the promotion doesn't trigger the product indexation, resulting in the wrong exhibition of the discount.


#### Simulation


1- Create a promotion with a flag
2- Set an expiration date
3- Check that the promotion continues to be active on PLP and PDP



#### Workaround


Reindex the products included in the promotion.