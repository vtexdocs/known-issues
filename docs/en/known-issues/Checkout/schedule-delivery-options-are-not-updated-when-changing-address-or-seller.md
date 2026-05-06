---
title: 'Schedule delivery options are not updated when changing address or seller'
slug: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
status: PUBLISHED
createdAt: 2020-09-18T00:59:05.000Z
updatedAt: 2023-06-22T19:53:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
locale: en
kiStatus: Backlog
internalReference: 288574
---

## Summary

**Scenario 1**: In an identified cart (but not logged), with a masked address in the shipping step, when changing between available addresses, the window delivery options are not recalculated in the UI.

**Scenario 2**: In a cart where two white-label sellers are configured with the same SLA Id, but different delivery window options. After changing the selected delivery option and the seller is changed, the delivery window options are not recalculated in the UI.

There is a request to the API, which returns with the "deliveryWindow", but the UI doesn't update the component. When selecting an invalid delivery window, going to the payment step is not possible to finish the purchase.

## Simulation

### Scenario 1

- Register a shopper with two addresses;
- Assemble a cart and change between the available addresses in the shipping step;
- Select the delivery window.


### Scenario 2

- Configure two different white-label sellers with the same SLA Id for scheduled delivery but with different delivery windows;
- Each of the white-label sellers must also have their own scheduled delivery option;
- Select the specific scheduled delivery for one of the sellers;
- Change to the scheduled delivery with the same SLA Id and select the delivery window.

## Workaround

**Scenario 1**: N/A
**Scenario 2**: Configure the same delivery window for all white-label sellers or change the SLA Id.