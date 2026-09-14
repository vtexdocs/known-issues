---
title: 'Subscriptions when the seller is a Pickup Point and does not have one of the SKUs.'
slug: subscriptions-when-the-seller-is-a-pickup-point-and-does-not-have-one-of-the-skus
status: PUBLISHED
createdAt: 2022-09-27T22:17:38.000Z
updatedAt: 2026-09-14T22:37:11.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-when-the-seller-is-a-pickup-point-and-does-not-have-one-of-the-skus
locale: en
kiStatus: Fixed
internalReference: 666701
---

## Summary

It was identified that in the request for recurrence of a signature with the following scenario:
The Subscription has more than one distinct product/sku, one of these products/sku has no stock and the seller is a pickup point, the following error will be displayed: No item fulfilled

## Simulation

conditions to place order.

This occurs because, in all subscription requests, a simulation is performed with the Checkout and in this simulation, we receive the checkout error that one of the products cannot be delivered.


## **Simulation**
To simulate this scenario, we will have to have a subscription with more than one distinct SKU, the Seller has a Pickup point and one of the SKUs must not have available stock.
1- When the subscription makes the simulation for the recurrence, it will have in the response the status= MISSING for the SKU's;

2- Checking the simulation at checkout, we will have an error that one of the SKUs cannot be delivered and the partial order will not be placed.

3- We will also see that it is not possible to place the order in a partial way.

## Workaround

We are closing this KI following a technical re-evaluation — Orders AI Toolkit (ki-validation-agent, skill ki-validation v1.1.0), Phase 2!