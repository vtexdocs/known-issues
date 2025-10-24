---
title: 'Carriers with Shipping Method named "Agendada" does not work'
slug: carriers-with-shipping-method-named-agendada-does-not-work
status: PUBLISHED
createdAt: 2025-10-16T20:45:54.870Z
updatedAt: 2025-10-16T20:45:54.870Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: carriers-with-shipping-method-named-agendada-does-not-work
locale: en
kiStatus: Backlog
internalReference: 1207733
---

## Summary



**This KI only occur to stores that use "Portuguese language". **

If the carrier's "Shipping Method" is named with something that has "Agendada", and this carrier does not use the function "Schedule delivery", Logistics understands that this carrier must have available windows, and if these windows are not found, the system cannot calculate the SLA, and the simulation return is empty. So, the carrier will not work!


#### Simulation


You just need to name the "Shipping Method" with something that has "Agendada".


#### Workaround


Just remove the word "Agendada", then it will work correctly.



