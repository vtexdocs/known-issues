---
title: Report export data instability when you have many orders!
slug: report-export-data-instability-when-you-have-many-orders
status: PUBLISHED
createdAt: 2025-08-25T13:45:56.950Z
updatedAt: 2025-08-25T13:45:56.950Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: report-export-data-instability-when-you-have-many-orders
locale: en
kiStatus: Backlog
internalReference: 1280864
---

## Summary


This KI describes a scenario where report exports via the admin UI can result in unstable report data when the account has many orders.
This issue is intermittent; sometimes the report is successful, sometimes it returns empty rows, or it may contain rows with errors.
The report usually succeeds after the third attempt.
However, this number of attempts can generate a status code of 429 in SOLRs (database), which can lead to further inconsistencies!


#### Simulation


Since the scenario is intermittent, we cannot simulate it!


#### Workaround


For this scenario, the workaround is to wait before trying again. This prevents the system from experiencing status code 429.



