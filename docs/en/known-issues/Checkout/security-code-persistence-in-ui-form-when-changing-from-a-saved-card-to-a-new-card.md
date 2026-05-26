---
title: 'Security Code persistence in UI form when changing from a saved card to a new card'
slug: security-code-persistence-in-ui-form-when-changing-from-a-saved-card-to-a-new-card
status: PUBLISHED
createdAt: 2026-05-26T18:48:20.000Z
updatedAt: 2026-05-26T18:54:21.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: security-code-persistence-in-ui-form-when-changing-from-a-saved-card-to-a-new-card
locale: en
kiStatus: Backlog
internalReference: 1412484
---

## Summary

When a user that has a saved card types the security code for that card and then chooses to use a new card the security code remains filled in the card UI form.

## Simulation

- Proceed to the payment step with a user that has a saved card;
- Fill the security code information;

 ![](https://vtexhelp.zendesk.com/attachments/token/B9BTYjBOLIBur6banW5qXqvwV/?name=image.png)

- Choose the option to use another card, the security code will still be present in the form.

 ![](https://vtexhelp.zendesk.com/attachments/token/hDkQDPMznDXl7s7eJnW0QnMuF/?name=image.png)

## Workaround

Fill the security code with the new card information.