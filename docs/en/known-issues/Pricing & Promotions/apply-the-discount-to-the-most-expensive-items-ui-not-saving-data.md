---
title: 'Apply the discount to the most expensive items - UI not saving data.'
slug: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
status: PUBLISHED
createdAt: 2024-04-03T20:29:09.000Z
updatedAt: 2026-09-23T16:54:19.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: apply-the-discount-to-the-most-expensive-items-ui-not-saving-data
locale: en
kiStatus: Backlog
internalReference: 1011071
---

## Summary

When using the promotions UI, manually attempting to save the "Apply to the most expensive items" option will not work and the selector will remain at the cheapest type option.

 ![](https://vtexhelp.zendesk.com/attachments/token/ofDGJuHHbNRwvbYDMOSSCznvB/?name=image.png)

## Simulation

1 - Go to the promotions User Interface: https://account_name.myvtex.com/admin/promotions

2 - In the promotions UI, select the option to "Apply the discount to the most expensive items"

3 - Save the promotion

4 - Access it once again, the box to apply for the cheapest option will be selected instead.

## Workaround

Use the promotions save API instead https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration