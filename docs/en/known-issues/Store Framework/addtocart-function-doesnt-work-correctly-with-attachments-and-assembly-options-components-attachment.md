---
title: "addToCart function doesn't work correctly with attachments and assembly options' component's attachment"
slug: addtocart-function-doesnt-work-correctly-with-attachments-and-assembly-options-components-attachment
status: PUBLISHED
createdAt: 2023-05-23T15:40:20.000Z
updatedAt: 2023-05-23T15:40:20.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: addtocart-function-doesnt-work-correctly-with-attachments-and-assembly-options-components-attachment
locale: en
kiStatus: Backlog
internalReference: 830495
---

## Summary

addToCart function doesn't work correctly when a product has assembly options and attachments configured and one of the assembly options' components also has attachments. Only the component's attachment will be added to the cart.

## Simulation

- Configure an attachment for a product;
- Configure assembly options for the same product in which one of the components has attachments;
- Add the product to the cart, selecting the product's and the component's attachments;
- Access checkout and check that the product's attachment was not added.

## Workaround

N/A