---
title: 'Telesales impersonation fails for specific customers in unified Profile System stores'
slug: telesales-impersonation-fails-for-specific-customers-in-unified-profile-system-stores
status: PUBLISHED
createdAt: 2026-02-25T20:05:13.952Z
updatedAt: 2026-02-25T20:05:13.952Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: telesales-impersonation-fails-for-specific-customers-in-unified-profile-system-stores
locale: en
kiStatus: Backlog
internalReference: 1369897
---

## Summary

In B2B telesales flows, impersonation via the telesales bar intermittently fails for some shopper emails: the session never assumes the customer context and profile.isAuthenticated stays false in the Session API. Operators can impersonate certain customers successfully (often those with previous orders), while others consistently fail.

## Simulation

- Store with telesales operators enabled.
- Account that has undergone Profile System unification.
- Using the telesales bar, attempt impersonation with a customer email and observe the session. Check the sessions API response, if the client is correctly set: profile.isAuthenticated:true and a profile.id are returned.
- If failed, check the customer email and check the sessions API response. Observe that profile.isAuthenticated:false and no customer profile.id are returned.

## Workaround

Always make sure the user is on the masterdata of the parent account, and has a active profile.