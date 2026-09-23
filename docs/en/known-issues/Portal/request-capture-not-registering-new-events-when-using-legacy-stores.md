---
title: 'Request Capture not Registering new Events when using Legacy Stores'
slug: request-capture-not-registering-new-events-when-using-legacy-stores
status: PUBLISHED
createdAt: 2022-06-24T00:37:40.000Z
updatedAt: 2026-09-23T18:00:42.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: request-capture-not-registering-new-events-when-using-legacy-stores
locale: en
kiStatus: Backlog
internalReference: 604254
---

## Summary

Currently, when using portal VTEX stores (non-VTEX IO stores) the request capture application is not registering events specifically for the product page visits.

## Simulation

1. using a portal VTEX store, access a product page when logged in
2. check if the rc application is functional on your store (detailed here: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked)


3. Check the property 'productVisitedTag' of the related document on your Master Data application, it will have remained null. It should have been populated with data.

## Workaround

This usability works for VTEX IO stores.