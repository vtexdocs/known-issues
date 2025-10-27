---
title: 'Intelligent Search''s pagination of field values is limited to 9,999 items'
id: 1AH9HOWWqOnENncdxIBszv
status: PUBLISHED
createdAt: 2022-03-21T17:42:26.464Z
updatedAt: 2022-11-25T21:57:37.901Z
publishedAt: 2022-11-25T21:57:37.901Z
firstPublishedAt: 2022-03-21T17:42:26.905Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-searchs-pagination-of-field-values-is-limited-to-9999-items
locale: en
kiStatus: Backlog
internalReference: 428486
---

## Summary


Intelligent Search has a problem with pagination of values. This results in some values not being displayed when selecting it in a condition filter, like Merchandising Rules conditions for example. If the selected field contains more than 9,999 values, only the first 9,999 will be displayed in the preview dropdown.



## Simulation


Go to a new Merchandising Rule creation page:
https://{accountName}.myvtex.com/admin/search/custom-result/create/

In the case below, the field "marca" (brand) has more than 9,999 entries, so when the "JEIBAO" value is typed, it does not appear in the dropdown to be selected.

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Intelligent%20Search/intelligent-searchs-pagination-of-field-values-is-limited-to-9999-items_1.png)

The graphQL query that loads this list in Admin is only capable of fetching a maximum of 9,999 records.

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Intelligent%20Search/intelligent-searchs-pagination-of-field-values-is-limited-to-9999-items_2.png)



## Workaround


There is no workaround available.

