---
title: 'Nominal Discount + Unit Multipler may generate negative values'
slug: nominal-discount-unit-multipler-may-generate-negative-values
status: PUBLISHED
createdAt: 2025-10-16T19:52:19.924Z
updatedAt: 2025-10-16T19:52:19.924Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: nominal-discount-unit-multipler-may-generate-negative-values
locale: en
kiStatus: Backlog
internalReference: 867838
---

## Summary


When using a "nominal value" type discount, if there afe multiples values affected for a same discount in the same cart, this discount is proportionally distributed among the items.

For instance, let's say I have `a nominal $50 discount` on an order that applies to all items on my cart, which is composed of the following items and original prices:

- Item A, costs $100 --> with a 0.01 unit multplier
- 2x Item B, costs $200


---> Order total (without the discount) = $500

The $100 discount will be distributed according to the original price of the items, that is:

A --> 100/500 --> -$50*1/5 = -$10
B --> 200/500 --> -$50*2/5 = -$20
B --> 200/500 --> -$50*2/5 = -$20

However, the item A's price is actually 100*0.01 due to its unit multiplier, so, the final calculation for its price on the order will be: $1-$50 = -$49, which is a negative price.

Altough this doesn't affect the calculation of the final proce of the order (because the deduced price of the discount will still be -$20), whis may impact ERP integrations.




#### Simulation


Create an order in which there are  2+ items, one with a unit multiplier of value < 1 (ideally a very small value, such as 0.01) and other(s) without a unit multiplier.

Then, create a nominal discount promotion valid for all the items within the cart.

The discount will be distributed considering the original  price of the item with the unit multiplier and possibly result in its price being negative


#### Workaround


Using other promotion types to distribute the discount.



