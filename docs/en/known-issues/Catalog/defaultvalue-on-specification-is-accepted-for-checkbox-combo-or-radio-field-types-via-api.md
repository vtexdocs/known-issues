---
title: DefaultValue on specification is accepted for CheckBox, Combo or Radio field types via API
slug: defaultvalue-on-specification-is-accepted-for-checkbox-combo-or-radio-field-types-via-api
status: PUBLISHED
createdAt: 2025-10-24T12:33:26.070Z
updatedAt: 2025-10-24T12:33:26.070Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: defaultvalue-on-specification-is-accepted-for-checkbox-combo-or-radio-field-types-via-api
locale: en
kiStatus: Backlog
internalReference: 1313013
---

## Summary


Default value (`DefaultValue`) on specification is accepted for all specification types, except `Checkbox`, `Combo`, or `Radio` when creating/editing a specification through Admin, but it is accepted when creating a specification via API.


#### Simulation



1. Execute the API route Create specification with the field `DefaultValue` filled and the field `FieldTypeId` filled with the values `5` (Combo), `6` (Radio), `7` (Checkbox).
2. The response body will show the new specification payload, with the `DefaultValue` filled.


#### Workaround


As it is not possible to edit the DefaultValue field via API because the [KI] DefaultValue property doesn't update on specification API, execute the steps hereafter to change the DefaultValue field value:

1. On **Admin**, edit the specification by changing the field type to `1` (Text), leaving the `DefaultValue` field empty, and save the changes.
2. Then, edit the specification again by changing back the previous field type, and save it.

