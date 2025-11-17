---
title: 'AB Tester app shows miscalculated information for sessions and conversion'
slug: ab-tester-app-shows-miscalculated-information-for-sessions-and-conversion
status: PUBLISHED
createdAt: 2025-11-17T17:55:55.941Z
updatedAt: 2025-11-17T17:55:55.941Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: ab-tester-app-shows-miscalculated-information-for-sessions-and-conversion
locale: en
kiStatus: Fixed
internalReference: 865727
---

## Summary


AB Tester app shows miscalculated information for sessions and conversion when running tests, causing undesired results interpretation. The workspace split functionality still works as expected.


#### Simulation



- Create a A/B Test;
- Let the test run for some time;
- Check the values for sessions and conversions; it will show miscalculated information.


#### Workaround


Use an external analytics tool to analyze the data.


