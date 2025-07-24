---
title: 'Reward value not added or have a different value added to gift card'
id: 3i9TwGKpYOkwnHUXDON9V7
status: PUBLISHED
createdAt: 2023-06-14T16:06:37.154Z
updatedAt: 2023-06-27T12:44:59.727Z
publishedAt: 2023-06-27T12:44:59.727Z
firstPublishedAt: 2023-06-14T16:06:37.696Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: reward-value-not-added-or-have-a-different-value-added-to-gift-card
locale: en
kiStatus: Backlog
internalReference: 844079
---

## Summary


Reward value may not be or have a different value added to the shopper's gift card when the promotion is configured to apply the reward amount when the order status changes to payment approved.


##

## Simulation



- Create a reward value promotion to apply when the order status changes to payment approved;
- Finish a purchase;
- Check the interactions in Order Details in admin; there will not be the message "_XX added to the user's fidelity program_"


##

## Workaround



- Select via admin the "Gift Cards" option in the menu, select the shopper's gift card, and click on "Statement" under the Actions column to add the proper value;
- Configure the reward value promotion to apply when the order status changes to invoiced.



