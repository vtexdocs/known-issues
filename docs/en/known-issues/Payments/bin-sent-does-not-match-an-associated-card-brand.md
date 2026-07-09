---
title: 'Bin sent does not match an associated Card brand'
slug: bin-sent-does-not-match-an-associated-card-brand
status: PUBLISHED
createdAt: 2020-11-24T17:29:48.000Z
updatedAt: 2026-07-09T14:39:17.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: bin-sent-does-not-match-an-associated-card-brand
locale: en
kiStatus: No Fix
internalReference: 308896
---

## Summary

During checkout, customers can manually change the card brand displayed next to the card number field, overriding the brand automatically identified from the BIN. When the purchase is completed with the wrong brand selected, the transaction is processed with the incorrect card brand, creating a mismatch between VTEX records and what the payment provider identifies.
This divergence causes:

- **Financial reconciliation issues**, since different card brands have different transaction fees
- **Failed change orders** when the value difference exceeds 10%, as the brand mismatch is detected during the additional charge attempt

> **Closing note:** This Known Issue is being closed. The primarily affected payment providers (Cielo, MaxiPago, Moip, Redecard) are officially deprecated legacy connectors, and no code changes are planned.

## Simulation

1. Add an item to the cart and proceed to checkout.
2. Enter a credit card number, note the card brand automatically identified from the BIN.
3. Click on the card brand logo and manually select a different brand.
4. Complete the purchase.
5. Check the transaction in the admin; the brand recorded in VTEX will differ from the actual card brand identified by the payment provider.

## Workaround

To prevent customers from manually changing the card brand, add the following CSS to the checkout customization file (`checkout-custom.css`):

    .card-flags .card-flag-label { pointer-events: none;}

This disables click events on the card brand logo, making the field read-only and preventing brand overrides.