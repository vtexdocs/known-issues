---
title: 'Outdated card brand regex causes brand misidentification at checkout'
slug: outdated-card-brand-regex-causes-brand-misidentification-at-checkout
status: PUBLISHED
createdAt: 2022-08-20T02:55:49.000Z
updatedAt: 2026-08-10T19:19:06.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-card-brand-regex-causes-brand-misidentification-at-checkout
locale: en
kiStatus: Backlog
internalReference: 642136
---

## Summary

Card brand auto-selection in checkout (card UI) is done via regex validation, which describe ranges of accepted BINs. By default, the first available card brand remains selected. Regex that are out of date may result in the expcted card brand to not be identified or be misidentified.

## Simulation

Pre-requisites:

- Have at least one credit or debit card payment rule configured


Steps:

1. Create a cart in any store using native checkout UI and proceed to the payment stage.
2. Select the credit or debit card option
3. Enter at least 6 digits of a card number from the intended brand that is not covered by the current regex
4. Observe the card brand be:
  - Unidentified: a warning message appears, advising to check the card number. Also, the previously selected brand, remains selected
  - Misidentified: another brand is selected instead

## Workaround

The user may change the selected card brand at checkout by selecting the expected card brand before placing the order.