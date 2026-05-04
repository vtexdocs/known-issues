---
title: 'Cart parameter ignoreProfileData reverted to false after shopper signs out in checkout'
slug: cart-parameter-ignoreprofiledata-reverted-to-false-after-shopper-signs-out-in-checkout
status: PUBLISHED
createdAt: 2026-05-04T21:58:33.850Z
updatedAt: 2026-05-04T21:58:33.850Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-parameter-ignoreprofiledata-reverted-to-false-after-shopper-signs-out-in-checkout
locale: en
kiStatus: Backlog
internalReference: 1401421
---

## Summary

In stores with OrderForm Configuration `"ignoreProfileData": true`, logging out after email input with the `It's not you? Sign Out` button reverts cart parameter `ignoreProfileData` to `false`.

This causes any subsequent user with a recognized email to have their personal data auto-filled, despite the OrderForm Configuration `"ignoreProfileData": true` value.

 ![](https://vtexhelp.zendesk.com/attachments/token/4vrwdjRkpyimh29VJjzy22IES/?name=image.png)

## Simulation

- Create a cart in a store with OrderForm Configuration `"ignoreProfileData": true`;
- Proceed to checkout and fill in an email belonging to a complete profile;
- Upon email recognition shopper data will not be filled;
- Log out with the `It's not you? Sign Out` button;
- The cart specific parameter `ignoreProfileData` will revert to false;
- Filling in any email with a complete profile will then lead to shopper data being filled.

## Workaround

N/A