---
title: 'Incorrect values in quotes on items with unity multiplier configuration'
slug: incorrect-values-in-quotes-on-items-with-unity-multiplier-configuration
status: PUBLISHED
createdAt: 2025-10-16T19:16:46.294Z
updatedAt: 2025-10-16T19:16:46.294Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: incorrect-values-in-quotes-on-items-with-unity-multiplier-configuration
locale: en
kiStatus: Backlog
internalReference: 1271492
---

## Summary


When creating a quote with items that have an unit multiplier configuration only the original, non multiplied, quantity is considered while the multiplied quantity is disregarded. The price is correctly multiplied.

This leads to a scenario where `n` units of the item are assigned the price for `n * multiplier` items on the created quote.


#### Simulation



- Add an item with unit multiplier configuration to the cart;
- Choose the `Create a quote` option;
- The original item quantity will be maintained and the price will consider the multiplied items.


#### Workaround


N/A



