---
title: 'My Account > Addresses - Required field alert not showing for city/state'
slug: my-account-addresses-required-field-alert-not-showing-for-citystate
status: PUBLISHED
createdAt: 2021-05-26T01:37:18.000Z
updatedAt: 2026-10-29T22:07:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: my-account-addresses-required-field-alert-not-showing-for-citystate
locale: en
kiStatus: Fixed
internalReference: 373277
---

## Summary

Reviewing some address creation flows in **My Account**, we saw that the required field alert is not shown for fields such as **city** and/or **state** (_depends on the country_), for example, for BRA these fields are auto-filled and blocked for editing.

On the other hand, it is a field that in some flows you must select for other countries.

The problem is that when trying to create without selecting any option in city or state, nothing happens and the UI does not warn that this field must be filled to complete the registration.

 ![](https://vtexhelp.zendesk.com/attachments/token/1EKrEPHMR41ufIFg7c1wDFT6k/?name=inline867128956.png)​

## Simulation

Steps to replicate:

1. You can test in the account:

2. Access like a client. You can use the <email test>

3. Try to create a new address for **ARG**

4. Fill the form with the zip code "**1000**". The form will be auto-filled in those fields

5. Select **Change**

6. Try to select another "**Provincia**" and do not place a city

7. Try to **add** the address

## Workaround

Select a city or state before adding the address.