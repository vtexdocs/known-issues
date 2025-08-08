---
title: Inconsistencies in billingAddress field sent to Gateway
slug: inconsistencies-in-billingaddress-field-sent-to-gateway
status: PUBLISHED
createdAt: 2025-08-07T20:20:01.403Z
updatedAt: 2025-08-07T20:20:01.403Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: inconsistencies-in-billingaddress-field-sent-to-gateway
locale: en
kiStatus: Fixed
internalReference: 291688
---

## Summary


The gateway uses the wrong address in recurring purchase scenarios when there is already a card saved in the user's profile.

The error occurs because the gateway relies on the `isBillingAddressDifferent` checkbox, which appears next to the card data at checkout, to define whether it will use the delivery address or billing address in affiliations and antifraud. The problem is that this checkbox in question doesn't even appear in the checkout after the first purchase with the card, but its value is `false` by default. This means that, being a delivery or pickup purchase, the address that the gateway will use is the delivery address and not the billing address, and this will bring problems in pickup scenarios or even to generate Bank Slips.


#### Simulation


Scene A:

1. As a new user, go to a store checkout and make a delivery purchase to generate a purchase profile
2. When paying for this order, use a card address other than the delivery address
3. Make a new purchase with the same email and the same card, but buying from a pickup option
4. Observe objects `isBillingAddressDifferent` that will be false and the `address` of the payment that will be a specific address

Scenario B:

1. As a new user, go to a store checkout and make a delivery purchase to generate a purchase profile
2. When paying for this order, use the same address as delivery address
3. Make a new purchase with the same email and the same card, but buying from a pickup option
4. Observe objects `isBillingAddressDifferent` that will be false and the `address` of the payment tha will not have a specific address


#### Workaround


Submit a product support request to proceed with the transaction.


