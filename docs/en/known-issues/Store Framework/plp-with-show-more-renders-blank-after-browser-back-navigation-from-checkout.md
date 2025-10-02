---
title: PLP with “Show More” renders blank after browser back navigation from Checkout
slug: plp-with-show-more-renders-blank-after-browser-back-navigation-from-checkout
status: PUBLISHED
createdAt: 2025-10-02T19:50:52.659Z
updatedAt: 2025-10-02T19:50:52.659Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: plp-with-show-more-renders-blank-after-browser-back-navigation-from-checkout
locale: en
kiStatus: -
internalReference: 1301762
---

## Summary


When users load the second or further pages of a PLP via the “Show More” button, navigate to a PDP, proceed to Checkout, and then press the browser back button twice to return to the PLP, the PLP renders completely blank. The visible symptom is a white/empty PLP with no product tiles or content. This affects Store Framework storefronts using PLP infinite/paginated loading via “Show More,” specifically after a PDP → Checkout flow followed by browser back navigation. The behavior was reproduced on multiple accounts during validation.


#### Simulation


Prerequisites: Store Framework storefront with PLP using “Show More” to load additional results.

Steps:

1. Open the PLP and scroll to the end of the page.
2. Click the “Show More” button to load the second page of results.
3. Click a product from the newly loaded (second page) results to go to the PDP.
4.

Add the product to cart and proceed to Checkout.



Use the browser Back button to return to the PDP, then press Back again to return to the PLP. The PLP appears entirely blank


#### Workaround


N/A


