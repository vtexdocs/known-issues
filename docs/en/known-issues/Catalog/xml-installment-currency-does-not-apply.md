---
title: 'XML - Installment currency does not apply'
slug: xml-installment-currency-does-not-apply
status: PUBLISHED
createdAt: 2025-11-14T19:15:34.372Z
updatedAt: 2025-11-14T19:15:34.372Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: xml-installment-currency-does-not-apply
locale: en
kiStatus: Backlog
internalReference: 976295
---

## Summary


When setting up a currency in an XML, it applies to all fields except the "Installment" field.

The "Installment" field always displays the currency as "R$", regardless of the configured currency.


#### Simulation



1. Create/Update a XML with a currency different from "R$" and enable the Installment field.
2. Check that all price fields on XML are correctly returning the currency, except the Installment.


#### Workaround


N/A



