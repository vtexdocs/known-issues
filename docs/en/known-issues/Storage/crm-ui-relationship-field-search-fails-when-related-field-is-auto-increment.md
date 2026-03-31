---
title: 'CRM UI relationship field search fails when related field is Auto Increment'
slug: crm-ui-relationship-field-search-fails-when-related-field-is-auto-increment
status: PUBLISHED
createdAt: 2026-03-31T16:50:11.992Z
updatedAt: 2026-03-31T16:50:11.992Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: crm-ui-relationship-field-search-fails-when-related-field-is-auto-increment
locale: en
kiStatus: Backlog
internalReference: 1386097
---

## Summary

In Master Data v1 CRM UI, relationship fields that display a related entity’s Auto Increment field fail to load autocomplete options. The UI issues a DynamicForm/LoadAutocompleteValues request that uses wildcards, but Auto Increment fields are indexed as long (numeric), which do not support wildcard operations, resulting in an “invalid filter” and blocking edits in the relationship field.

## Simulation

- Prerequisites:
  - Master Data v1 with a relationship field in entity A pointing to entity B.
  - The relationship’s “Related field to display” in entity B is an Auto Increment field.
- Steps:
  - Open the CRM UI form that contains the relationship field.
  - Type partial characters to search for a related record (this triggers autocomplete).
  - Observe the backend request:
    - GET DynamicForm/LoadAutocompleteValues with containsExpression (wildcards).
  - Result:
    - The request returns “invalid filter” and the UI cannot list/select related records for the field.

## Workaround

- Edit the relationship value via API instead of the CRM UI while this limitation exists.
- If possible in the customer’s data model, change the relationship’s “Related field to display” to a string field (e.g., email, name, external code) that supports text search/wildcards in autocomplete.