---
title: 'Order status exported in Portuguese in OMS Order Export (non-translatable statusDescription)'
slug: order-status-exported-in-portuguese-in-oms-order-export-nontranslatable-statusdescription
status: PUBLISHED
createdAt: 2026-01-12T21:57:21.774Z
updatedAt: 2026-01-12T21:57:21.774Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: order-status-exported-in-portuguese-in-oms-order-export-nontranslatable-statusdescription
locale: en
kiStatus: Backlog
internalReference: 1350055
---

## Summary


When exporting orders from OMS (Order Export/Reports), the “Status” column is always returned in Portuguese, regardless of the Admin/user language. The visible symptom is mixed-language exports: all other fields appear in the expected language, while the Status field remains in PT. Accounts operating in other languages (e.g., Spanish or English) are impacted when using OMS exports for reporting. Engineering confirmed the status text comes from a hardcoded statusDescription with no current translation path.


#### Simulation



Prerequisite: Any VTEX account with Admin language set to a non-Portuguese language (e.g., English or Spanish).

**Steps:**

-

Go to OMS and export an orders report (Order Export/Reports).



-

Open the exported file and check the “Status” column.



- Observe that order statuses are in Portuguese, while other fields follow the Admin language.


#### Workaround



-

Use the alternative field “Status raw value (temporary)” available in the export, which provides a translated/ID-based status suitable for multilingual reporting.



- If necessary, map “Status raw value (temporary)” to localized labels in downstream BI/reporting tools until the product behavior changes.


