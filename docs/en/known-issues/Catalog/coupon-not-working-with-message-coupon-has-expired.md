---
title: 'Coupon not working with message "coupon has expired"'
slug: coupon-not-working-with-message-coupon-has-expired
status: PUBLISHED
createdAt: 2026-03-17T17:39:12.859Z
updatedAt: 2026-03-17T17:39:12.859Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: coupon-not-working-with-message-coupon-has-expired
locale: en
kiStatus: Backlog
internalReference: 1379679
---

## Summary

Currently, the promotions module allows a user to copy the payload from one promotion onto another and set it as active. However, if the promotion was past its initial valid date, it might be set as "isArchived" = true, and, due to it being active, it will still show in the admin as a normal, active promotion.

## Simulation

1 - Create a promotion and archive it or let it go past its expiry date.  https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-

2 - Change its "isActive" property and assoiate it to a coupon

3 - Try using the ocupon in the checkout to apply the promotion: a display message of "expired coupon" will be ahown.

## Workaround

**Create a new promotion and coupon from scratch, which, by default, will have the "isArchived" = false. **

**Do not try changing the archived property in the old promotion. **