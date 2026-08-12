---
title: 'Pick-up points do not work in the shipping simulator in countries that do not use our postal code API'
slug: pickup-points-do-not-work-in-the-shipping-simulator-in-countries-that-do-not-use-our-postal-code-api
status: PUBLISHED
createdAt: 2025-07-17T21:29:49.000Z
updatedAt: 2026-08-12T20:14:29.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: pickup-points-do-not-work-in-the-shipping-simulator-in-countries-that-do-not-use-our-postal-code-api
locale: en
kiStatus: Backlog
internalReference: 1262007
---

## Summary

The shipping simulator does not work with pickup points in countries that do not use our postal code API.

To check if a country uses our postal code API, you need to contact support.

## Simulation

Make a shipping simulation (/admin/logistics#/freight-simulation), and the pickup point will not appear as an option.

## Workaround

It will not affect the pickup point operation in the store, and the pickup point should work correctly in the checkout.