---
title: 'FBE PLP/PDP images intermittently fail to load when Meta'
slug: fbe-plppdp-images-intermittently-fail-to-load-when-meta
status: PUBLISHED
createdAt: 2026-03-24T19:36:10.000Z
updatedAt: 2026-09-14T22:38:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta
locale: en
kiStatus: Fixed
internalReference: 1382819
---

## Summary

FIX: We released new versions of the vtex.facebook-pixel and vtex.facebook-fbe apps

Specific PLP collections and some PDPs intermittently stop rendering product images when the Meta Facebook Business Extension is enabled. The issue is more frequent on mobile and on the production domain; QA and myvtex.com environments do not present the problem. Disabling the FBE app immediately restores image loading, and re-enabling it reproduces the failure, indicating a correlation with the extension on the affected storefront

## Simulation

- Enable the Meta Facebook Business Extension in the account.
- Navigate to the affected PLP on the production domain. Observe intermittent failures where product images do not load.
- Open a PDP from these collections and verify that images may also fail to load. The behavior is observed more frequently on mobile.
- Disable the FBE extension and reload the same PLP/PDP pages. Images start loading normally again, confirming correlation.

## Workaround

Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.