---
title: 'Seller account created with incorrect edition/sponsor during onboarding'
slug: seller-account-created-with-incorrect-editionsponsor-during-onboarding
status: PUBLISHED
createdAt: 2025-10-16T20:59:08.553Z
updatedAt: 2025-10-16T20:59:08.553Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: seller-account-created-with-incorrect-editionsponsor-during-onboarding
locale: en
kiStatus: Backlog
internalReference: 1238783
---

## Summary


During the onboarding process of new sellers through the Seller Portal, some accounts are being created with the incorrect edition and/or sponsor. The expected behavior is that the account should be provisioned with the "edition-seller" edition sponsored by the sponsor account. However, in certain cases, the account is created using the default VTEX edition/sponso.

Investigation indicates that this issue originates from failures or retry events during the IO provisioning process. The payload sent for account creation contains the correct information, but if there is an internal retry within IO, the edition/sponsor may not be correctly applied, leading to an inconsistent seller environment.


#### Simulation



- Initiate the onboarding flow for a new seller on the platform via Seller Portal.
- The seller will receive an invitation and accept it, triggering internal provisioning actions (Onboarding.Web, OnboardingBO, Billing).
- Monitor onboarding and account creation logs (especially vendor_onboarding, onboarding-api calls, account creation in Billing).
- If an internal IO error or retry happens during the edition/sponsor setup, the account may be created with an incorrect edition and/or sponsor.
- The affected seller will not have the correct environment, impacting features and permissions.


#### Workaround


N/A



