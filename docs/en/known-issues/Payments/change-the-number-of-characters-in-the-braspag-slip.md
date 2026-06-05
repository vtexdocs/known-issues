---
title: 'Change the number of characters in the Braspag slip'
slug: change-the-number-of-characters-in-the-braspag-slip
status: PUBLISHED
createdAt: 2023-03-14T22:01:30.000Z
updatedAt: 2026-06-05T20:23:27.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: change-the-number-of-characters-in-the-braspag-slip
locale: en
kiStatus: No Fix
internalReference: 771045
---

## Summary

When an order is generated via boleto with Braspag and the address data has more than 40 characters, the address data is being cut off. Need to make an improvement by changing the character limit of address fields from 40 characters to 60.

## Simulation

Place an order with braspag via bank slip and in the address data, enter an address that exceeds 40 characters.

## Workaround

N/a