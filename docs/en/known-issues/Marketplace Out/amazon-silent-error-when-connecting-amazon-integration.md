---
title: 'Amazon Silent Error when Connecting Amazon Integration'
slug: amazon-silent-error-when-connecting-amazon-integration
status: PUBLISHED
createdAt: 2026-08-31T18:41:28.000Z
updatedAt: 2026-08-31T18:41:28.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-silent-error-when-connecting-amazon-integration
locale: en
kiStatus: Backlog
internalReference: 1454182
---

## Summary

When a seller attempts to configure the Amazon native integration but does not fill in the required FBA Classic data fields, a silent error occurs. No error message is displayed to the user. After clicking "Connect", the page loads indefinitely without any network request, preventing progression to Amazon Seller Central authorization.

## Simulation

1. Access VTEX Admin → Marketplace → Integrations Amazon
2. Open native integration configuration form (component `NativeMkpConfig`)
3. Fill the basic configuration fields
4. Enable toggle `Use FBA Classic`
5. Leave the `Dock ID` field empty (other FBA Classic data fields remain unfilled)
6. Click "Connect"

**Result:** Page loads indefinitely with no error message. Silent failure — no network request is triggered.

## Workaround

Fill in all the data fields according to the features that are enabled in Amazon:
If the error persists after filling all data correctly according to your Amazon configuration, open a support ticket.