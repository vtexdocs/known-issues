---
title: 'Confirmed order email not being sent'
slug: confirmed-order-email-not-being-sent
status: PUBLISHED
createdAt: 2021-09-01T18:28:19.000Z
updatedAt: 2023-08-28T14:53:33.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: confirmed-order-email-not-being-sent
locale: en
kiStatus: Fixed
internalReference: 423628
---

## Summary

Checkout doesn't map all the flows where the "GatewayCallback" must trigger the "Raised OrderPlaced" event, so unmapped flows are suitable not to fire this event as expected, directly affecting the order confirmation email to be sent.

## Simulation

There is no way to simulate the scenario.

## Workaround

N/A