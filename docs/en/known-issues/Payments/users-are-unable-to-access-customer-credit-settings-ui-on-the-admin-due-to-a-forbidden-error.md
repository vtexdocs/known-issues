---
title: 'Users are unable to access customer credit settings UI on the Admin due to a forbidden error'
slug: users-are-unable-to-access-customer-credit-settings-ui-on-the-admin-due-to-a-forbidden-error
status: PUBLISHED
createdAt: 2021-06-11T18:57:40.000Z
updatedAt: 2023-02-24T13:28:16.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: users-are-unable-to-access-customer-credit-settings-ui-on-the-admin-due-to-a-forbidden-error
locale: en
kiStatus: Backlog
internalReference: 380931
---

## Summary

Users are unable to access customer credit settings UI on the Admin and we have observed the following "Forbidden" error in the SettingQueries operation.

This behavior is due to the way the customer credit app uses graphQL to retrieve this information. It makes a request to this `/billing/company` route, which uses the admin user's token. This API call is used to display trivial identifying information on the page. Therefore, the user trying to open the CC settings must have the get_company resource enabled in the License Manager Resource.

Although this should not prevent the user from accessing the customer credit settings, therefore, the app must change how it handles this flow.

## Simulation

Try to open the Customer Credit settings page with a user without the `get_company` resource in the LM module.

## Workaround

Make sure the user has the `get_company` resource enabled in their role. Additionally, there's a cache in this operation.