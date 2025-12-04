---
title: 'Gift Cards not returned in Checkout when both CPF and CNPJ are sent (Gift Card Search prioritizes corporateDocument)'
slug: gift-cards-not-returned-in-checkout-when-both-cpf-and-cnpj-are-sent-gift-card-search-prioritizes-corporatedocument
status: PUBLISHED
createdAt: 2025-12-04T12:33:16.545Z
updatedAt: 2025-12-04T12:33:16.545Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-cards-not-returned-in-checkout-when-both-cpf-and-cnpj-are-sent-gift-card-search-prioritizes-corporatedocument
locale: en
kiStatus: Backlog
internalReference: 1335218
---

## Summary


When a shopper profile includes both personal (CPF) and corporate (CNPJ) documents, the Gift Card Search (/giftcards/_search) prioritizes the corporateDocument (CNPJ) and ignores gift cards issued to the personal document (CPF).
The visible symptom is that valid gift cards associated with the shopper’s CPF are not returned to Checkout, resulting in “invalid gift code” or empty `ListAllGiftCards` responses. This affects shoppers who previously received gift cards tied to their CPF and later proceed at checkout with both CPF and CNPJ populated in their profile or request payload.


#### Simulation



- Prerequisites:
  - Account with VTEX Gift Card provider (VtexGiftCard) active.
  - Shopper profile where both fields are present in the checkout context: document (CPF) and corporateDocument (CNPJ).
  -

A gift card created/associated with the shopper’s CPF (ownerId = document/CPF).





Steps:

1. In Checkout, proceed with the shopper who has both CPF and CNPJ filled (isCorporate may be true, but the search route only receives document and corporateDocument).
2. Trigger the gift card retrieval flow (`ListAllGiftCards` or during payment attachment). Observe that the response is empty when both documents are sent; if the corporateDocument is omitted, the CPF-tied gift card is returned.


#### Workaround


Ensure only the intended document is sent in the gift card search context:

- If the gift card was created for the CPF, avoid sending corporateDocument in the request (or in the shopper’s active profile context at checkout) so the search uses document (CPF).
- Alternatively, reissue/register a mirror gift card with the same balance but associated with the CNPJ (corporateDocument) for that shopper, so the search returning corporateDocument will find it.


