---
title: 'Pricing search error ("Error - undefined") on sub-accounts due to missing CMS configuration folders'
slug: pricing-search-error-error-undefined-on-subaccounts-due-to-missing-cms-configuration-folders
status: PUBLISHED
createdAt: 2026-07-31T16:52:22.000Z
updatedAt: 2026-07-31T16:52:22.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: pricing-search-error-error-undefined-on-subaccounts-due-to-missing-cms-configuration-folders
locale: en
kiStatus: Backlog
internalReference: 1441865
---

## Summary

When searching for a product price list in the Admin Pricing app (`/admin/pricing#/prices`) on a sub-account (e.g., a trade policy/child account such as `{account}b2b`), the page throws "Error - undefined (Error Code = undefined)" and the search fails. This happens because these sub-accounts are missing the CMS configuration folders that the Pricing admin page depends on. The main/parent account (e.g., `{account}`) has these folders correctly set up, so the same search works fine there.

## Simulation

1. Access the sub-account admin, e.g. `https://{subaccount}.``myvtex.com/admin/pricing#/prices/?tradePolicy=1&page=1&qtd=10`.

2. Search for a price list.

3. Observe "Error - undefined (Error Code = undefined)".

4. Repeat the same search using the related main account — it works correctly, confirming the folders exist there but not on the sub-account.

## Workaround

Use the main account to search/edit prices instead of the sub-account. If managing prices from the sub-account is required, the missing CMS configuration folders need to be recreated on that sub-account.

OR

Swt up the correct CMS folder structure https://help.vtex.com/docs/tutorials/cms-folder-structure on the subaccount.