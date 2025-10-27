---
title: 'Campaign Audience doesn''t save coupon information'
slug: campaign-audience-doesnt-save-coupon-information
status: PUBLISHED
createdAt: 2025-09-04T15:03:06.969Z
updatedAt: 2025-09-04T15:03:06.969Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-doesnt-save-coupon-information
locale: en
kiStatus: Backlog
internalReference: 521601
---

## Summary


When a coupon condition is configured inside a **Campaign Audience**, the coupon information is not passed in the `matchedParameters` field of the RnB response. As a result, the Checkout and OrderForm do not retain the coupon data, and the OMS will not display it under `marketingData`.



#### Simulation



1. Create a Campaign Audience using a coupon condition.
2. Associate this Campaign Audience with a Campaign Promotion.
3. Complete a purchase where this promotion applies.
4. Check the Order in the OMS.
5. Review the `orderForm` → note that the coupon information is missing in the `marketingData` field.



#### Workaround


There is no native workaround. If possible, configure the coupon condition **directly in the Promotion** instead of using a Campaign Audience. This ensures the coupon information is returned in `matchedParameters` and saved in the order.


