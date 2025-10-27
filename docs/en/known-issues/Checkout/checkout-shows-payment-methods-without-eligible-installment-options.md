---
title: 'Checkout shows payment methods without eligible installment options'
slug: checkout-shows-payment-methods-without-eligible-installment-options
status: PUBLISHED
createdAt: 2025-10-08T23:17:37.850Z
updatedAt: 2025-10-08T23:17:37.850Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shows-payment-methods-without-eligible-installment-options
locale: en
kiStatus: Backlog
internalReference: 1305022
---

## Summary


Checkout may display a payment method even when no payment rules and no installment options are available for it in the current cart context (i.e. SKUs commercial conditions don't match the any of the rules). This leads to a blocking flow and a stuck “Select the desired number of installments” error message when trying to place the order.

This happens because, on the Checkout Pipeline, the request to list of active payment systems doesn't take into account the full cart context (such as item's commercial conditions), while the selected rules and its respective installment options are returned by a second request, which is made later and take the cart context into account (including item's commercial conditions).

After that, the list of active payment systems is not filtered by the actual installment options returned for the cart, which can cause the mismatch between available Payment Systems and available Installments.


#### Simulation



- Prerequisites:
  - Configure a payment method which only has payment rules restricted by the percentage of SKUs from a certain commercial condition in the cart  (e.g., apply only when SKU percentage > 70%).

- Steps:
  - Build a cart that does not meet the SKU percentage condition for neither of the rules available for the configured method
  - Proceed to payment. You'll see that, even if the conditions are not met, the payment method will be available.
  - Select the payment method
  - Observed behavior: Checkout lists the method, but no installment options are presented; the modal remains stuck prompting “Select the desired number of installments.” if you try to place the order.


#### Workaround



- Shoppers should choose another eligible payment method and follow the purchase flow.
- Merchants could implement a frontend customization to hide or disable payment methods that have no installmentOptions for the current cart context.



