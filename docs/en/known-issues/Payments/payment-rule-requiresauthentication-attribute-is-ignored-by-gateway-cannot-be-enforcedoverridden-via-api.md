---
title: Payment rule requiresAuthentication attribute is ignored by gateway (cannot be enforced/overridden via API)
slug: payment-rule-requiresauthentication-attribute-is-ignored-by-gateway-cannot-be-enforcedoverridden-via-api
status: PUBLISHED
createdAt: 2025-10-02T16:23:40.739Z
updatedAt: 2025-10-02T16:23:40.739Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-rule-requiresauthentication-attribute-is-ignored-by-gateway-cannot-be-enforcedoverridden-via-api
locale: en
kiStatus: Unknown
internalReference: 1301482
---

## Summary


The `requiresAuthentication` attribute in payment rules is ignored by the Payments Gateway/Orchestrator. Updating the field via API has no effect, and authentication behavior for the payment method remains unchanged.
**Scope:** Affects payment rules where operators attempt to control authentication via the `requiresAuthentication` flag.
**Impact:** Merchants cannot enable or disable authentication as intended, causing potential operational confusion or blocked configurations.


#### Simulation



- Pre-conditions: Have a payment rule configured (e.g., for a bank slip method).


- Steps:
1) Use the “Update payment rule by ID” API to set requiresAuthentication to true or false for a given rule.
2) Immediately GET the same payment rule and observe requiresAuthentication remains null or unchanged.
3) Place a test order using that payment method and note that authentication behavior is unaffected by the attempted change.


- Expected vs Actual:
• Expected: Changing requiresAuthentication on the rule affects whether the method requires authentication.
• Actual: Field changes are ignored by gateway logic; behavior does not change.


#### Workaround


N/A


