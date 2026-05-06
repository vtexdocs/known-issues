---
title: 'Meli SKU integration with "Object reference not set to an instance of an object" error.'
slug: meli-sku-integration-with-object-reference-not-set-to-an-instance-of-an-object-error
status: PUBLISHED
createdAt: 2022-09-13T19:44:30.000Z
updatedAt: 2022-12-07T11:59:10.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-sku-integration-with-object-reference-not-set-to-an-instance-of-an-object-error
locale: en
kiStatus: Fixed
internalReference: 657515
---

## Summary

Some skus in the Mercado Livre are logging error: "Object reference not set to an instance of an object".

## Simulation

![](https://vtexhelp.zendesk.com/attachments/token/ZGOJZmpO93pL3HqOVp0dDmzKh/?name=image.png)

_**Validations and tests:**_
- Sku isn't registered in Meli;
- FFT simulation with debugger;
- CHK simulation;
- I re-indexed the sku;
- I searched the log for "Object reference not set to an instance of an object"

## Workaround

n/a