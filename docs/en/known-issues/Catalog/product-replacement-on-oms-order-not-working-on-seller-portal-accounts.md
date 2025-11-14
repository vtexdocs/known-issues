---
title: 'Product replacement on OMS order not working on seller portal accounts'
slug: product-replacement-on-oms-order-not-working-on-seller-portal-accounts
status: PUBLISHED
createdAt: 2025-11-14T19:13:06.703Z
updatedAt: 2025-11-14T19:13:06.703Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-replacement-on-oms-order-not-working-on-seller-portal-accounts
locale: en
kiStatus: Backlog
internalReference: 753484
---

## Summary


Is not being possible to change the sku of an order because the OMS uses the search API (which is related to the catalog V1) and seller portal accounts use a new catalog version. No proxy was implemented on this area.

The error is: "A conta solicitada {accountName} não foi encontrada no banco de conexão." <> "The requested account {accountName} was not found in the connection bank."


#### Simulation



1. Go to OMS and select the order you would like to replace the sku (it has to be a seller portal account);
2. Check that an error appears on the UI;
3. Inspecting the error is possible to see that the message is the one above.


#### Workaround


No workaround.



