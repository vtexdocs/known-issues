---
title: 'My Cards is not working for some legacy connectors'
slug: my-cards-is-not-working-for-some-legacy-connectors
status: PUBLISHED
createdAt: 2021-05-26T20:34:15.000Z
updatedAt: 2026-06-05T20:51:34.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: my-cards-is-not-working-for-some-legacy-connectors
locale: en
kiStatus: No Fix
internalReference: 373636
---

## Summary

When trying to save a credit card at My Cards inside the My Account session **without having made any purchase with that card before** an error will occur when trying to save the card with an internal legacy connector.

## Simulation

1. Go to a store with an internal/legacy connector
2. Login into the store with a legacy connector
3. Go to My Cards
4. Try to save your credit card

You will see the following error:
"There was an error while trying to save the card"

## Workaround

N/A