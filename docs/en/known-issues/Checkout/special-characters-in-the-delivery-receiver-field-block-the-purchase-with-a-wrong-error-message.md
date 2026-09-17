---
title: 'Special characters in the delivery receiver field block the purchase with a wrong error message'
slug: special-characters-in-the-delivery-receiver-field-block-the-purchase-with-a-wrong-error-message
status: PUBLISHED
createdAt: 2021-03-10T17:33:01.000Z
updatedAt: 2026-09-17T15:43:36.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: special-characters-in-the-delivery-receiver-field-block-the-purchase-with-a-wrong-error-message
locale: en
kiStatus: No Fix
internalReference: 342759
---

## Summary

The checkout screen does not validate special characters in the field for who will receive the delivery. The buyer can fill it with special characters; the purchase does not close, and the error shown points to the wrong field: "The Number field in the delivery data is invalid".

## Simulation

1. Go to the shipping step at checkout
2. Fill "Destinatário" with !!!!!!?!?!?!?!?!?!**
3. Try to complete the purchase — the error "The Number field in the delivery data is invalid" is shown, and the purchase does not close.

## Workaround

N/A