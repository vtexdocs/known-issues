---
title: 'Email not auto-filling for new users on checkout-ui'
slug: email-not-autofilling-for-new-users-on-checkoutui
status: PUBLISHED
createdAt: 2023-08-25T15:29:44.000Z
updatedAt: 2023-08-29T19:17:25.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: email-not-autofilling-for-new-users-on-checkoutui
locale: en
kiStatus: Backlog
internalReference: 887949
---

## Summary

When a new user enters a new email at the email step and proceeds to the next page, in the customer data component, the email isn't automatically filled in.
This is because there's no registered user with that email. As a result, the loaded `orderForm` also contains an empty email field, causing it to remain blank and requiring the customer to re-enter their email.

## Simulation

1. Navigate to the checkout page where customers enter their email.
2. Put an email never used before in the store.
3. Go to the client profile component.
4. The email box will be empty, and then you have to type it again.

## Workaround

N/A