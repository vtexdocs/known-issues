---
title: Incorrect/Lacking indexings for accounts where the accountname is different from the one registered on the fulfillmentEndpoint
slug: incorrectlacking-indexings-for-accounts-where-the-accountname-is-different-from-the-one-registered-on-the-fulfillmentendpoint
status: PUBLISHED
createdAt: 2025-06-30T20:03:42.982Z
updatedAt: 2025-06-30T20:03:42.982Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrectlacking-indexings-for-accounts-where-the-accountname-is-different-from-the-one-registered-on-the-fulfillmentendpoint
locale: en
kiStatus: No Fix
internalReference: 1050023
---

## Summary


Currently, a franchise account can have its fulFillment endpoint differing from its "official" accountname, which is a common practice for specific seller<>marketplace architectures that need multiple prices and/or stock for distinct trade policies using the franchise feature with multiple sellers for the same franchise.

Although this feature works in terms of displaying the needed content for shoppers, when sales-relevant data, such is price/stock is updated for the main seller of a given franchise, the other associated accounts are not correctly indexed alongside it, generating inconsistent availability and pricing displays among selling channels for a store.


#### Simulation



- For a store that has multiple sellers and 1+ franchise accounts, configure 2+ sellers pointing, in the fulfillmente ndpoint, towards the same franchise account in its seller settings.
- Attempt to update price/stock data for any item of the franchise account.
- Check the updated data on the other associated sellers that use the franchise account in their FFM endpoints, it will be outdated.


#### Workaround


Use the sales channel mapping feature to implement this architecture instead.


