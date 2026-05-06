---
title: 'Promotions UI loading wrong currency information'
slug: promotions-ui-loading-wrong-currency-information
status: PUBLISHED
createdAt: 2022-12-19T14:40:55.000Z
updatedAt: 2024-02-15T12:10:49.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotions-ui-loading-wrong-currency-information
locale: en
kiStatus: Fixed
internalReference: 718908
---

## Summary

When opening the Promotions module very quickly and many times in a row a wrong behavior appears on the UI.

The field "Restrict this promotion to seller products" does not load the correct placeholder, instead loads the placeholder "GLOBAL SELECT-A-SELLER..."

The currency information is loaded as R$ (real)

When Saving the promotion the final value is not the one expected by the client.

## Simulation

There is not an easy way to reproduce this scenario. Sometimes, when opening the promotions module in different tabs very quickly the behavior happens.
Check if the field "Restrict this promotion to seller products" is different to know you've reached the scenario.

## Workaround

Close the current promotions UI and open a new one where the behavior is not happening.