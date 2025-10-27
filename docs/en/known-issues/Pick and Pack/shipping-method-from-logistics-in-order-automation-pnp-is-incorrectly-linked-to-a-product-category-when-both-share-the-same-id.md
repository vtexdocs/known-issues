---
title: '“Shipping Method” (from Logistics) in Order Automation (pnp) is incorrectly linked to a Product Category when both share the same ID'
slug: shipping-method-from-logistics-in-order-automation-pnp-is-incorrectly-linked-to-a-product-category-when-both-share-the-same-id
status: PUBLISHED
createdAt: 2025-10-27T17:51:35.171Z
updatedAt: 2025-10-27T17:51:35.171Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: shipping-method-from-logistics-in-order-automation-pnp-is-incorrectly-linked-to-a-product-category-when-both-share-the-same-id
locale: en
kiStatus: Backlog
internalReference: 1313989
---

## Summary


When configuring an **Order Automation** using the **Shipping Method** condition, the name of the selected shipping policy is immediately replaced by the name of a **Product Category**. The select value that should display the shipping method name instead shows the category name that shares the same ID.
The issue occurs when the **ID** of a shipping policy matches the ID of an existing category.
Affected users: those who create automations in **Pick and Pack** accounts where **Logistics** shipping policy IDs are numeric values that overlap with category IDs.


#### Simulation



- **Prerequisites:**
  - Account with **Pick and Pack** enabled.
  - **Logistics** shipping policies with numeric IDs overlapping existing category IDs (e.g., shipping policy ID 5 and category ID 5).
- **Steps:**
  - Open Pick and Pack Settings and create or edit an **Order Automation** using “**Shipping Method**” as the condition.
  - In the list, select a shipping policy (e.g., “Delivery Express Compras hasta 500” with ID 5).
  - Observe that after selection, the displayed label changes to the name of the category with the same ID (e.g., “Carnes, pescados y mariscos”).


#### Workaround


Change the **IDs** of shipping policies to values that don’t coincide with existing category IDs (for example, use alphanumeric IDs).
This eliminates the collision and allows the automation to correctly link and operate by **Shipping Method**.



