---
title: Unexpected behavior when registering multiple holidays in sequence
slug: unexpected-behavior-when-registering-multiple-holidays-in-sequence
status: PUBLISHED
createdAt: 2025-10-16T20:44:13.652Z
updatedAt: 2025-10-16T20:44:13.652Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: unexpected-behavior-when-registering-multiple-holidays-in-sequence
locale: en
kiStatus: Backlog
internalReference: 1202478
---

## Summary


When registering multiple holidays in sequence, some unexpected behaviors will occur, as some previously registered holidays may be deleted and some new holidays may not be registered.


#### Simulation


It can be easily reproduced, you just need to register some multiple holidays in sequence, equivalent to 10.


#### Workaround


It will be necessary to space out the creation of holidays, defining an interval of at least 1 minute between registrations.



