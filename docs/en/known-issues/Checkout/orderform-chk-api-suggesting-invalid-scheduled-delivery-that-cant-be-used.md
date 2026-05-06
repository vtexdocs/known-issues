---
title: "orderForm (Chk API) suggesting invalid scheduled delivery that can't be used"
slug: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
status: PUBLISHED
createdAt: 2020-10-21T23:23:00.000Z
updatedAt: 2023-12-01T13:10:53.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
locale: en
kiStatus: Backlog
internalReference: 298665
---

## Summary

When a cart/orderForm has multiple items with scheduled delivery from the same seller, the scheduled options with the same ID (considered the same shipping method) need to have the same delivery windows between them. If there's no intersection, the shipping method will be discarded for some items.

The issue is that, in some flows, like the "GET orderForm" API, this filtering behavior isn't being applied, offering an invalid scheduled delivery (without intersection). In other flows, like in the "orderForm

## Simulation

" or while selecting the shipping method, the offered option will be correctly filtered/removed.

Side-effect: the Chk UI will try to use/simulate the invalid option and can stay locked in a **requests loop** because the shipping method is available in the first moment but can't be used in a second moment, and the UI tries the first step again while reviewing the options available in the orderForm.


## **Simulation**

- From the same seller, configure two different shipping policies (carriers) with the same "freight type" (that defines the "slaId");
- Both of them are scheduled delivery, but with a different delivery window between them;
- Add 2 items to the cart, one item from each shipping policy.

The UI can stay locked in a loop due to the divergence between the "GET orderForm" and the "orderForm simulation".

## Workaround

It's required to fix the delivery window between the shipping methods with the same ID (to have the same delivery windows), or treat them as different shipping methods, so using different IDs.