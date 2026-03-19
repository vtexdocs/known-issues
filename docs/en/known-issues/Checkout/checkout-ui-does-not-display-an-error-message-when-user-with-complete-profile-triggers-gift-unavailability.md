---
title: 'Checkout UI does not display an error message when user with complete profile triggers gift unavailability'
slug: checkout-ui-does-not-display-an-error-message-when-user-with-complete-profile-triggers-gift-unavailability
status: PUBLISHED
createdAt: 2026-03-19T17:41:15.574Z
updatedAt: 2026-03-19T17:41:15.574Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-does-not-display-an-error-message-when-user-with-complete-profile-triggers-gift-unavailability
locale: en
kiStatus: Backlog
internalReference: 1381105
---

## Summary

When a cart includes a gift item and a complete shopper profile is loaded with an address that does not have an SLA for the gift, the gift item is silently removed from the cart. The UI does not display any error message, even though the message is present in the `orderForm` API.

## Simulation

The issue occurs during the **/shipping** step in the Checkout UI when a complete shopper profile is loaded and the gift item does not have a valid SLA or available inventory for the user’s region.


- Ensure a gift promotion is active
- Confirm that the gift item does not have an SLA for the user’s address
- Assemble a cart that triggers the gift promotion
- Select the gift and proceed directly to the profile page (do not enter the address on the `/cart` page).
- Enter an email associated with a complete shopper profile

## Workaround

N/A