---
title: 'Custom domain moved between FastStore projects keeps routing to the previous account'
slug: custom-domain-moved-between-faststore-projects-keeps-routing-to-the-previous-account
status: PUBLISHED
createdAt: 2026-09-25T16:17:05.000Z
updatedAt: 2026-09-25T16:17:05.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: custom-domain-moved-between-faststore-projects-keeps-routing-to-the-previous-account
locale: en
kiStatus: Backlog
internalReference: 1466415
---

## Summary

When a custom domain is added to a FastStore project in WebOps and deployed to production, a domain-to-account mapping is created in the hosting infrastructure. Removing the domain from that project in WebOps does not delete this mapping. If the same domain is then added to a FastStore project from a different account and deployed, the existing mapping is kept instead of reassigned.
As a result, the domain keeps serving the storefront of the first project, although the WebOps settings, License Manager hosts, DNS, and `discovery.config.js` of the new project are all correctly configured. Redeploying either project and purging the CDN cache do not solve the issue.

## Simulation

1. Have two FastStore projects in WebOps, each linked to a different VTEX account (Account A and Account B).
2. In the project of Account A, go to **WebOps > Settings > Domains**, add a custom domain (for example, `store.example.com`), and deploy to production.
3. Remove `store.example.com` from the project of Account A.
4. Make sure `store.example.com` is registered as a host only in Account B's License Manager, then add it to the project of Account B in **WebOps > Settings > Domains**.
5. Deploy both projects to production.
6. Go to `https://store.example.com`.


**Expected behavior:** the domain serves the storefront of Account B.
**Actual behavior:** the domain keeps serving the storefront of Account A.

## Workaround

There is no workaround available on the customer side. Contact VTEX Support to have the domain mapping reassigned to the correct account.