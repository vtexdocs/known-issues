---
title: "Error publishing Scheduled Release ahead of schedule in Admin (\"You can't publish an empty release\")"
slug: error-publishing-scheduled-release-ahead-of-schedule-in-admin-you-cant-publish-an-empty-release
status: PUBLISHED
createdAt: 2026-01-05T19:44:18.669Z
updatedAt: 2026-01-05T19:44:18.669Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-publishing-scheduled-release-ahead-of-schedule-in-admin-you-cant-publish-an-empty-release
locale: en
kiStatus: Backlog
internalReference: 1346648
---

## Summary


When attempting to manually publish a **Scheduled Release** ahead of its scheduled date via the Admin panel, the system blocks the action and displays the error message: **"You can't publish an empty release. Add updates and try again."**

It has been verified via API that the release is **not empty** and actually contains associated events/updates. This indicates a false positive in the Admin interface validation that prevents manual publication before the scheduled time.


#### Simulation



- Create a new Release in the **CMS / Releases** module.
- Add updates/events to this release (ensure it is not empty).
- Schedule this release for a future date.
- Before the scheduled date, attempt to publish the release manually using the publish button in the Admin.
- The system will display the error: _"You can't publish an empty release. Add updates and try again."_


#### Workaround


N/A


