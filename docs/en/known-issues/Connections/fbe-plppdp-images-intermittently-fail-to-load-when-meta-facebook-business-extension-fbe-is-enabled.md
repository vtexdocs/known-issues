---
title: 'FBE PLP/PDP images intermittently fail to load when Meta Facebook Business Extension (FBE) is enabled'
slug: fbe-plppdp-images-intermittently-fail-to-load-when-meta-facebook-business-extension-fbe-is-enabled
status: PUBLISHED
createdAt: 2026-03-24T16:36:52.360Z
updatedAt: 2026-03-24T16:36:52.360Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: fbe-plppdp-images-intermittently-fail-to-load-when-meta-facebook-business-extension-fbe-is-enabled
locale: en
kiStatus: Backlog
internalReference: 1382819
---

## Summary

Specific PLP collections and some PDPs intermittently stop rendering product images when the Meta Facebook Business Extension is enabled. The issue is more frequent on mobile and on the production domain; QA and myvtex.com environments do not present the problem. Disabling the FBE app immediately restores image loading, and re-enabling it reproduces the failure, indicating a correlation with the extension on the affected storefront

## Simulation

- Enable the Meta Facebook Business Extension in the account.
- Navigate to the affected PLP on the production domain. Observe intermittent failures where product images do not load.
- Open a PDP from these collections and verify that images may also fail to load. The behavior is observed more frequently on mobile.
- Disable the FBE extension and reload the same PLP/PDP pages. Images start loading normally again, confirming correlation.

## Workaround

Is there a workaround for this bug? If yes, describe it here. If not, write "N/A" or "There is no workaround available.". Do not remove this section if there is no workaround, please.