---
title: "UI doesn't show the form to edit address when selecting to add a new address first"
slug: ui-doesnt-show-the-form-to-edit-address-when-selecting-to-add-a-new-address-first
status: PUBLISHED
createdAt: 2023-02-06T13:15:43.000Z
updatedAt: 2023-06-23T17:46:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-the-form-to-edit-address-when-selecting-to-add-a-new-address-first
locale: en
kiStatus: Fixed
internalReference: 747772
---

## Summary

The UI doesn't show the correct form to edit the selected address in the Shipping step when selecting to add a new address first.

## Simulation

- Have a user with a complete profile;
- Click to add a new address, do not type/select anything, and go back to the addresses list;
- Click to edit the selected address;
- You will see the same form as when adding a new address.

## Workaround

Reload the page to be able to edit the selected address again.