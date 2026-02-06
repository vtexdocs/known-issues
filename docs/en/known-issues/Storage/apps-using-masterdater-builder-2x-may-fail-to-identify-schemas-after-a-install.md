---
title: 'Apps using masterdater builder 2.x may fail to identify schemas after a install'
slug: apps-using-masterdater-builder-2x-may-fail-to-identify-schemas-after-a-install
status: PUBLISHED
createdAt: 2026-02-06T20:27:25.099Z
updatedAt: 2026-02-06T20:27:25.099Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: apps-using-masterdater-builder-2x-may-fail-to-identify-schemas-after-a-install
locale: en
kiStatus: Backlog
internalReference: 1361652
---

## Summary


Some applications built using the Master Data build 2.x may experience runtime errors immediately after being installed in an account where they have not been previously installed (fresh installation). The automatic association between the installed app version and its data definition (schema) fails. As a result, the system cannot locate the necessary structure to save or read information, returning the error "No associated schema was found".


#### Simulation



- Install an app that uses the Master Data V2 builder and has never been installed in that environment before.
- Open the application or trigger an action that requires reading or writing data to Master Data.
- The operation will fail, and the error "No associated schema was found" may be observed in the logs or the interface.


#### Workaround


Open a support ticket with the following information:


- App name
- Version
- Entities used by the app


