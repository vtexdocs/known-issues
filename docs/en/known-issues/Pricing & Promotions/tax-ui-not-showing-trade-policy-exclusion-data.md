---
title: 'Tax UI not showing trade policy exclusion data'
slug: tax-ui-not-showing-trade-policy-exclusion-data
status: PUBLISHED
createdAt: 2026-06-30T23:38:38.000Z
updatedAt: 2026-07-01T18:36:45.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: tax-ui-not-showing-trade-policy-exclusion-data
locale: en
kiStatus: Backlog
internalReference: 1428072
---

## Summary

Currently, in the Taxes UI https://account.myvtex.com/admin/rnb#/tax/taxID , when you attempt, in the sidebar listing trade policies, to use the setting "Different from", when selecting one option and saving, the data is not shown after acessing the screen again (and yet, itis correctly saved in the background).

## Simulation

1 - Acess the taxes UI

2 - Set tax setting and in the sidebar, try setting up a trade policy exclusion by selecting, manually, at least one

 ![](https://vtexhelp.zendesk.com/attachments/token/yNG7lWZQ0QBkYuhjKN89WuflA/?name=image.png)

3 - Save and acess the UI again - nothing will be showing

4- despite that, if you check the same data via GET API, the info will be correctly saved in the background https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-

## Workaround

Handle data only via API