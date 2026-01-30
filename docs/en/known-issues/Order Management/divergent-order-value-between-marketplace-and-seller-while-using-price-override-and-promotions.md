---
title: 'Divergent order value between marketplace and seller while using price override and promotions'
slug: divergent-order-value-between-marketplace-and-seller-while-using-price-override-and-promotions
status: PUBLISHED
createdAt: 2026-01-30T19:41:23.106Z
updatedAt: 2026-01-30T19:41:23.106Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: divergent-order-value-between-marketplace-and-seller-while-using-price-override-and-promotions
locale: en
kiStatus: Backlog
internalReference: 756629
---

## Summary


When the seller item price _minus_ marketplace discounts has a negative value, it can't be fully applied to the item's price at the seller level (they can't have a negative price), so it'll be considered as zero and it will affect calculations related to additional value and total order value at the fulfillment order.

It happens when the marketplace is using the seller price override feature, generating higher values than the own seller account, and then combining it with a promotion that applies a discount higher than the original seller price.


#### Simulation



- In the marketplace, configure to overwrite the seller's price and define a higher price;
- Create a promotion in the marketplace with higher value than seller's price;
- Place an order;
- You will see the difference in the order's value between marketplace and seller.


#### Workaround


Define the seller price equal or higher than the marketplace discounts value.

