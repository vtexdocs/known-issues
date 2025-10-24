---
title: 'Maximum number of installments condition in campaign audiences is not evaluated correctly'
slug: maximum-number-of-installments-condition-in-campaign-audiences-is-not-evaluated-correctly
status: PUBLISHED
createdAt: 2025-10-16T19:55:50.578Z
updatedAt: 2025-10-16T19:55:50.578Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: maximum-number-of-installments-condition-in-campaign-audiences-is-not-evaluated-correctly
locale: en
kiStatus: Backlog
internalReference: 1141291
---

## Summary


The **Maximum number of installments** condition in **Audience Campaign** configurations is not being evaluated properly. This requirement is not considered when determining if the campaign is matched, allowing promotion campaigns to apply wrongly. This issue makes it impossible to enforce installment-based restrictions on campaigns, potentially leading to unintended discount applications.


#### Simulation



1. Create an **Audience Campaign** and add a condition for a **Maximum number of installments** equal to "2".
2. Create a **Promotion Campaign** and associate it with the configured Audience Campaign.
3. Add items to the cart that meet the conditions defined in the Audience Campaign.
4. Go to checkout and notice that, already at the cart stage, before a payment method is defined, the campaign is matched.


#### Workaround


Merchants can configure a **Regular Promotion** with installment restrictions under the **Payment Methods** section. This approach is less dynamic than Audience Campaigns but ensures installment-based restrictions are enforced.


