---
title: "Address Form's Map Marker component does not update the complete address"
slug: address-forms-map-marker-component-does-not-update-the-complete-address
status: PUBLISHED
createdAt: 2026-05-15T19:44:34.000Z
updatedAt: 2026-05-15T19:44:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-forms-map-marker-component-does-not-update-the-complete-address
locale: en
kiStatus: Backlog
internalReference: 1407777
---

## Summary

When trying to edit an address on My Account through `vtex.address-form`'s map marker component, only Postal Code and Geocoordinates are updated.

## Simulation

- In a store using Geolocation and with the native VTEX theme, go to the My Account page
- Go to the Addresses page, which uses `vtex.address-form` components
- Try to edit a prior registered address using the map marker component


By moving the component, only the Postal Code and Geolocation variables from the address will be changed, despite more fields being returned by Google's API.

## Workaround

Edit the other address fields manually.