---
title: "OrderForm not returning customer's data even for authorized credentials"
slug: orderform-not-returning-customers-data-even-for-authorized-credentials
status: PUBLISHED
createdAt: 2022-05-19T16:25:14.000Z
updatedAt: 2023-09-27T20:39:14.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-not-returning-customers-data-even-for-authorized-credentials
locale: en
kiStatus: Fixed
internalReference: 582070
---

## Summary

Interacting with an orderForm in the specific situation where customer data were imported automatically after logging in will remove their data from the orderForm even for "superusers", identified by their appKeys.

This action is made to avoid unintended access to customers' data, but shouldn't be applied to administrative users and integrations identified by authorized credentials.

## Simulation

- Have a user with a complete profile, ensuring that it's valid for the SmartCheckout behavior
- Do the login process for this user
- Review through the browser if their information was imported to the orderForm
- Do a "Get OrderForm" request while using authorized credentials
- OrderForm won't return the "clientProfileData" and addresses that were available on the browser

## Workaround

Use the parameter `?disableAutoCompletion=true` in the "Get OrderForm" URL. This parameter avoids the orderForm to be recalculated, customer data will be returned then