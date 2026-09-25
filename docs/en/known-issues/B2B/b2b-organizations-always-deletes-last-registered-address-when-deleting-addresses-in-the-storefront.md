---
title: 'B2B Organizations always deletes last registered address when deleting addresses in the storefront'
slug: b2b-organizations-always-deletes-last-registered-address-when-deleting-addresses-in-the-storefront
status: PUBLISHED
createdAt: 2026-09-25T22:46:37.000Z
updatedAt: 2026-09-25T22:46:37.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-organizations-always-deletes-last-registered-address-when-deleting-addresses-in-the-storefront
locale: en
kiStatus: Scheduled
internalReference: 1466734
---

## Summary

When accessing a cost center page from the store front and trying to exclude an address, the address that is deleted is always the last registered address.

The selected addres doesn't matter, the last registered address is the one that will always be deleted.

## Simulation

- Access the Cost Center page using this URL pattern `/account#/cost-center/{costCenterId}`
- Under "Addresses", try to delete any address that is not the las possible one
- Only the last registered address will be deleted

## Workaround

There is no workaround for front end deletions.
Addresses can still be deleted using VTEX admin or by graphQL mutation