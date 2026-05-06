---
title: 'Addresses from the profile system is shown when impersonated using VTEX Telemarketing'
slug: addresses-from-the-profile-system-is-shown-when-impersonated-using-vtex-telemarketing
status: PUBLISHED
createdAt: 2023-07-12T13:19:34.000Z
updatedAt: 2023-08-31T19:37:50.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: addresses-from-the-profile-system-is-shown-when-impersonated-using-vtex-telemarketing
locale: en
kiStatus: No Fix
internalReference: 860375
---

## Summary

When the shopper has addresses registered in the Profile System, and it's impersonated using VTEX Telemarketing, the addresses from Profile System and Organizations are shown

## Simulation

- Impersonate a shopper who has addresses registered in the Profile System;
- Assemble a cart and go to Shipping;
- Select an address; the component will update and show all addresses from Profile System and Organizations.

## Workaround

- Use the B2B Organizations impersonating function.