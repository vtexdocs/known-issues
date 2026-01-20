---
title: 'Promotion UI incorrectly changes aphostrophe character'
slug: promotion-ui-incorrectly-changes-aphostrophe-character
status: PUBLISHED
createdAt: 2026-01-20T14:00:06.248Z
updatedAt: 2026-01-20T14:00:06.248Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: promotion-ui-incorrectly-changes-aphostrophe-character
locale: en
kiStatus: Backlog
internalReference: 1353323
---

## Summary


When restricting a shipping promotion to an SLA whose name contains a special character (apostrophe), the Admin UI saves the name using a typographic apostrophe (’), which differs from the simple apostrophe (') used by Logistics/Checkout.

Since the match is done by exact string comparison, the promotion never recognizes the selected SLA at checkout, preventing the benefit from being applied.


#### Simulation


1 - Create a promotion with a shipping name that contains an aphostrophe character in its application restrictions - example: "We'll deliver it for you"

2 - Save the promotion and fetch the promotion data via API (https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/calculatorconfiguration/-idCalculatorConfiguration-)

3 - Check that the data was saved as a typographic aphostrophe instrad.

4 - When trying to apply this promotion, the data doesn't match the checkout content and consequently is not matched and the promotion doesn't apply.


#### Workaround


Save the promotion using other characters or no special characters (Ex: We will deliver it for you)



