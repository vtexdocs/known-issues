---
title: 'Selection of sellers available in the commercial policy is not working properly'
slug: selection-of-sellers-available-in-the-commercial-policy-is-not-working-properly
status: PUBLISHED
createdAt: 2022-02-01T23:55:11.000Z
updatedAt: 2026-09-22T21:42:12.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: selection-of-sellers-available-in-the-commercial-policy-is-not-working-properly
locale: en
kiStatus: Fixed
internalReference: 515480
---

## Summary

Change of availability of a seller in a commercial policy is not being correctly recognized in the catalog. This can cause two scenarios: a product from an unselected seller becomes available or a product from a selected seller becomes unavailable

## Simulation

Scenario 1
- Remove a seller from a commercial policy via the UI `/admin/Site/StoreForm.aspx?Id={{SC}}`
- Check by route `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` if the trade policy was removed from the field _availableSalesChannel_

Scenario 2
- Add a seller of a trade policy via the UI
- Check by route `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=`if the trade policy is available from the field _availableSalesChannel_

## Workaround

Save the trade policy settings again from the UI