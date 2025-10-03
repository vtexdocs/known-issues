---
title: Mercado Livre Variation attribute is duplicated. Allowed unique attributes combinations.
slug: mercado-livre-variation-attribute-is-duplicated-allowed-unique-attributes-combinations
status: PUBLISHED
createdAt: 2025-10-03T16:52:47.996Z
updatedAt: 2025-10-03T16:52:47.996Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-variation-attribute-is-duplicated-allowed-unique-attributes-combinations
locale: en
kiStatus: No Fix
internalReference: 758331
---

## Summary


This scenario occurred due to the divergent use of the same attribute by the seller. While Mercado Livre (ML) interprets this attribute as a variation, the seller uses it merely as descriptive product information.

When the listing is submitted, the integration follows ML’s logic, treating the attribute as a variation. Since, from the seller’s side, this value remains fixed, the first variation is created correctly. However, when attempting to register a second variation with the same value, ML’s system interprets it as a duplicate, resulting in an error because it considers the combination already exists. We believe that providing clear guidance to the seller on the correct use of attributes would effectively prevent this type of conflict.


#### Simulation



- In Product Bridge, configure the mapper so that a product-level specification (e.g., “Nome do desenho”) that exists in the VTEX Product is mapped to a MELI attribute that allows variations.
- Export a product with multiple SKUs where the value exists at product level (not SKU spec).
- Observe in Product Bridge that the export fails after the first SKU with the error: “Variation attribute is duplicated. Allowed unique attributes combinations.” Note: this MELI error can also occur due to actual duplicated variations in the VTEX catalog or mapper; verify the SKU data first to exclude genuine duplicates.


#### Workaround



- Remove the mapped value in Product Bridge that is causing MELI to treat the product-level specification as a variation.
- Ensure only SKU-level specifications mapped as VTEX “Variation” are sent as MELI variations, while product-level specifications are sent as information.
- If needed, consult MELI category attributes via their API to confirm which attributes allow variations, then align mapping so VTEX SKU specifications = Variation and VTEX Product specifications = Information


