---
title: 'Audit CSV export fails for large result sets while the UI reports success'
slug: audit-csv-export-fails-for-large-result-sets-while-the-ui-reports-success
status: PUBLISHED
createdAt: 2026-10-01T17:27:38.000Z
updatedAt: 2026-10-01T17:27:38.000Z
contentType: knownIssue
productTeam: VTEX Shield
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shield
slugEN: audit-csv-export-fails-for-large-result-sets-while-the-ui-reports-success
locale: en
kiStatus: Backlog
internalReference: 1468936
---

## Summary

Audit CSV exports may fail for large result sets (long date ranges or many events), even though the search shows the results correctly in the UI. In some cases the UI shows a success message but the email never arrives; in others, it shows "Export couldn't be completed. Try again." There is no fixed safe limit, because the failure depends on the total size of the events returned, not only on the number of events or days.

## Simulation

1. Go to **Admin > Account settings > Audit** (`/admin/audit`).
2. Filter by an application with many events (for example, Site Editor, Promotions or Catalog) or by an action with many records (for example, `UserLogin`), with no other filters.
3. Select a long date range (for example, 30 days or more) that returns thousands of events.
4. Note that the results are shown correctly in the UI.
5. Open the browser DevTools (`F12` or `Cmd+Option+I`), go to the **Network** tab and type `graphql` in the filter field.
6. Click **Export to CSV**.
7. Note what the UI shows: either the success message (but the email with the file never arrives, not even in spam) or the error "Export couldn't be completed. Try again."

**Checking the actual export status via Postman**

1. In the **Network** tab, find the `POST` request to `https://{accountName}.myvtex.com/_v/private/graphql/v1?...` whose payload has the `exportLogStatus` query. To find it, click each `graphql` request and open the **Payload** tab, or type `exportLogStatus` in the Network search (`Cmd/Ctrl+F`).
2. Right-click the request and choose **Copy > Copy as cURL (bash)**.
3. In Postman, click **Import**, paste the cURL command as raw text and confirm. This creates a request with the URL, query params, headers (including the authentication cookie) and body already filled in.
4. Click **Send** and check the response:


json

```
{ "data": { "exportLogStatus": { "status": "failed", "downloadUrls": [], "__typename": "ExportLogsStatus" } }}
```



If `status` is `failed` and `downloadUrls` is empty, the export job failed, even when the UI showed the success message. When an export succeeds, `downloadUrls` contains the link(s) to the generated file.

> **Note:** the copied cURL has the user's session token (`VtexIdclientAutCookie`). Don't paste it in tickets, Slack or KI comments. If you share the request, remove the cookie first

## Workaround

- **Retry the export:** in some cases, retrying the same export after a few minutes works, because the data is partially cached after the first attempt. Wait for the previous attempt to finish (around 20 minutes) before trying again, since only one export per account is processed at a time.
- **Split the export into smaller periods:** if retrying doesn't work, split the date range into smaller intervals (for example, weekly or daily instead of monthly) and export each one separately.
- **Use more specific filters:** when possible, combine application and action filters to reduce the number of events per export.