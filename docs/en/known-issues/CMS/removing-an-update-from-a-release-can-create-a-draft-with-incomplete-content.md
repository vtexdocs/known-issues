---
title: 'Removing an update from a release can create a draft with incomplete content'
slug: removing-an-update-from-a-release-can-create-a-draft-with-incomplete-content
status: PUBLISHED
createdAt: 2026-07-06T15:30:21.000Z
updatedAt: 2026-07-13T21:40:39.000Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: removing-an-update-from-a-release-can-create-a-draft-with-incomplete-content
locale: en
kiStatus: Fixed
internalReference: 1430344
---

## Summary

When a user removes an update from a scheduled release in the Planner, the system automatically creates a draft for the affected page. In some scenarios, this draft may be created with outdated or incomplete content. This does not happen every time — it depends on the history of the affected page. If the user publishes this draft without noticing, the live page will be missing sections or fields that were added after a certain point in time.

## Simulation

1. Open the Admin Planner and navigate to a scheduled release
2. In the updates table, find a page update of type "publish"
3. Click the three-dot menu on the update row and select ****Delete****
4. Confirm the removal in the modal
5. Navigate to Headless CMS and open the draft created for that page
6. The draft content will be missing sections compared to the current live version

## Workaround

After removing an update from a release, do not publish the automatically created draft immediately. Instead, open it in the CMS editor, verify that all content is complete and correct before publishing. If the draft is missing content, discard it and manually recreate the draft with the correct content.