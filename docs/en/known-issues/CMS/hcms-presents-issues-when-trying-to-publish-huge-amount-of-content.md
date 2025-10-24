---
title: 'hCMS presents issues when trying to publish huge amount of content'
slug: hcms-presents-issues-when-trying-to-publish-huge-amount-of-content
status: PUBLISHED
createdAt: 2025-07-24T17:46:53.584Z
updatedAt: 2025-07-24T17:46:53.584Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: hcms-presents-issues-when-trying-to-publish-huge-amount-of-content
locale: en
kiStatus: Backlog
internalReference: 1262405
---

## Summary


When trying to publish a page with a huge amount of content, the hCMS can present issues. The issue seems to be on the releases module, since the draft can be saved, the problem is not on the Master Data.


#### Simulation


Try to add a long text, for example, in an hCMS page. The draft will be saved correctly, but when trying to publish it, it will not be possible. The error will be:
 ![](https://vtexhelp.zendesk.com/attachments/token/YmERJsiEpxbtpSzCa7heytRjs/?name=image.png)

On the network, you'll see:

    {"errors":[{"message":"Request failed with status code 500","name":"Error"}]}




#### Workaround


N/A



