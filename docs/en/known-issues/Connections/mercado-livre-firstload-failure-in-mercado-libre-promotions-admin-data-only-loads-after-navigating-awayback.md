---
title: 'Mercado Livre First-load failure in Mercado Libre Promotions Admin (data only loads after navigating away/back)'
slug: mercado-livre-firstload-failure-in-mercado-libre-promotions-admin-data-only-loads-after-navigating-awayback
status: PUBLISHED
createdAt: 2025-12-02T13:02:28.048Z
updatedAt: 2025-12-02T13:02:28.048Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-firstload-failure-in-mercado-libre-promotions-admin-data-only-loads-after-navigating-awayback
locale: en
kiStatus: Fixed
internalReference: 1327218
---

## Summary


We finalized the adjustments.


#### Simulation


After installing the Mercado Libre Promotions module, the Admin page sometimes fails to load data on the first attempt. The visible symptom is an initial error screen; on subsequent attempts (navigating to another admin menu and returning, or opening the module in a new tab), the data loads correctly. This affects users accessing Admin > Mercado Libre Promotions right after installation or on a fresh first load of the page


- Access Admin > Mercado Libre Promotions for the first time after installation (fresh tab/session).
- Observe that the page shows an error and does not load the expected data on this first attempt.
- Navigate to another Admin menu and return to the Promotions module, or open the module in a new browser tab.
- Observe that the data now loads correctly on the subsequent attempt(s)


#### Workaround



- Navigate to another Admin menu and then return to Mercado Libre Promotions; the data should load.
- Alternatively, open Mercado Libre Promotions in a new browser tab; the data should load on this second attempt.



