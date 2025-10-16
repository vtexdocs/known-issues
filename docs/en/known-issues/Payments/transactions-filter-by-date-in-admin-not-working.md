---
title: Transactions filter by date in Admin not working
slug: transactions-filter-by-date-in-admin-not-working
status: PUBLISHED
createdAt: 2025-10-16T20:37:12.189Z
updatedAt: 2025-10-16T20:37:12.189Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-filter-by-date-in-admin-not-working
locale: en
kiStatus: Backlog
internalReference: 1180441
---

## Summary


When a date filter is selected at Transactions Admin, all transactions with that date not null are shown as a response, proving that the filter doesn't work as expected.


#### Simulation


1. Go to any store admin > orders > transactions;
2. Select the icon to filter the transactions;

 ![](https://vtexhelp.zendesk.com/attachments/token/6reloUKjqVA3z2CvvcgB4n9Ah/?name=image.png)

3. Select any option from "Date" menu. In this case, it was selected "Cancellation Date > Yesterday";

 ![](https://vtexhelp.zendesk.com/attachments/token/FAH5pgNb0kX535JKNPKekRPVO/?name=image.png)

4. You will see that the list returns all transactions that have a "cancellation date", regardless of the "yesterday" filter.

 ![](https://vtexhelp.zendesk.com/attachments/token/lUFopWEbW6aoX0dHbsK3PPd0g/?name=image.png)

##

#### Workaround


There is no workaround for this KI.



