---
title: 'Payment amount mismatch error after switching installments with reCaptcha v2 in Checkout'
slug: payment-amount-mismatch-error-after-switching-installments-with-recaptcha-v2-in-checkout
status: PUBLISHED
createdAt: 2025-11-06T23:57:34.808Z
updatedAt: 2025-11-06T23:57:34.808Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: payment-amount-mismatch-error-after-switching-installments-with-recaptcha-v2-in-checkout
locale: en
kiStatus: Backlog
internalReference: 1320840
---

## Summary


Checkout can intermittently block order placement with the error “The payment amount does not match the expected amount” after the shopper switches between installment options with and without interest and then proceeds to place the order. Cases were consistently reproduced when reCaptcha v2 is enabled, which sometimes can trigger a transaction request with total value different from the payment total.


#### Simulation




-

**Prerequisites:** Account with reCaptcha v2 enabled in Checkout. Have at least one payment method that offers installments with interest and another option without interest.



-

**Steps:**

1) Create a new cart.



2) Select a credit card with an installment option that applies interest then proceed to enter card data.



3) Switch to a no-interest option so the total value changes (the inverse also works, i.e. selecting option without interest first and then changing to an option with interest).



4) Click to finalize/place the order. In failing attempts, Checkout returns “payment amount does not match the expected amount.” The behaviour is intermitent but easily reproducible (approximately 3 retries to reproduce, in average).



#### Workaround



Disabele reCaptcha v2 or switch from reCaptcha v2 to reCaptcha v3 for Checkout. Alternatively, try to switch installment options and place the order again.


