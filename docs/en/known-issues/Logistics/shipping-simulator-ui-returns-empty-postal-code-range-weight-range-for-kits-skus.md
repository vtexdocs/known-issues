---
title: 'Shipping Simulator UI returns empty “Postal code range”, “Weight range” for KITs SKUs'
slug: shipping-simulator-ui-returns-empty-postal-code-range-weight-range-for-kits-skus
status: PUBLISHED
createdAt: 2026-03-23T21:30:49.856Z
updatedAt: 2026-03-23T21:30:49.856Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-simulator-ui-returns-empty-postal-code-range-weight-range-for-kits-skus
locale: en
kiStatus: Backlog
internalReference: 1382356
---

## Summary

When the SKU is a KIT, Logistics engine doesn't calculate shipping by looking at the kit SKU itself. Instead, it breaks down the kit and considers the components individually.

In the platform Logistics Shipping Simulator, KIT SKUs returns SLA normally, but the metadata fields `Zip code range` and `Weight range` appear empty.
This only happens for KITs, but works normally with single SKUs.

## Simulation

Prerequisites: A VTEX account with Logistics configured and at least one KIT SKU, with components properly configured and freight table populated.

Steps:

- Open the Shipping Simulation in Admin via Logistics > Shipping Simulator.
- Simulate using a KIT SKU and a zip code
- Observe that SLA options are returned, but the “Zip code range” and “Weight range” fields are empty in the result panel:
 ![](https://vtexhelp.zendesk.com/attachments/token/CvTMgIytcecA07TOkM22vBcDq/?name=image.png)


- The same appears on Devetools debug:
 ![](https://vtexhelp.zendesk.com/attachments/token/rxmxeFqsTvUJ9GzXH17QNd1KZ/?name=image.png)


- Compare by simulating a non-KIT SKU and note that the fields populate as expected for simple SKUs.

 ![](https://vtexhelp.zendesk.com/attachments/token/VlnVeTUDJvtU8zEBBjFlh9iLv/?name=image.png)

## Workaround

There is no workaround, since **there is no operational impact to checkout or SLA calculation was identified.**
The issue affects simulation display only, but the calculation is correct and purchases are not affected.