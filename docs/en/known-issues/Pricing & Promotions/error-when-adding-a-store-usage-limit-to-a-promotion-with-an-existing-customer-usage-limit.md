---
title: 'Error When Adding a Store Usage Limit to a Promotion with an Existing Customer Usage Limit'
slug: error-when-adding-a-store-usage-limit-to-a-promotion-with-an-existing-customer-usage-limit
status: PUBLISHED
createdAt: 2026-10-16T16:31:43.000Z
updatedAt: 2026-10-16T16:31:43.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-when-adding-a-store-usage-limit-to-a-promotion-with-an-existing-customer-usage-limit
locale: en
kiStatus: Backlog
internalReference: 1474500
---

## Summary

When editing a promotion that already has a maximum usage limit per customer, attempting to add a maximum usage limit per store triggers the following error:
"Cannot change a calculator that already uses max usage per client to use max usage per store". This validation only occurs when the customer limit is configured and saved before the store limit is added. Configuring both limits simultaneously or adding the store limit first and the customer limit afterward works as expected.

## Simulation

1. Create a promotion and configure a maximum usage limit per customer.
2. Save the promotion.
3. Edit the promotion and add a maximum usage limit per store.
4. Save the changes and verify that the following error is displayed: "Cannot change a calculator that already uses max usage per client to use max usage per store"

## Workaround

Edit the existing promotion by removing both usage restrictions and saving the changes. Then, edit the promotion again and configure both the maximum usage limit per customer and the maximum usage limit per store simultaneously. Save the changes.
This workaround has been tested successfully. It allows both restrictions to be configured without duplicating the promotion or affecting its existing usage counter.