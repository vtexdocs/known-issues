---
title: 'Catalog does not remove special characters when setting up the text link'
slug: catalog-does-not-remove-special-characters-when-setting-up-the-text-link
status: PUBLISHED
createdAt: 2026-01-22T17:24:10.911Z
updatedAt: 2026-01-22T17:24:10.911Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-does-not-remove-special-characters-when-setting-up-the-text-link
locale: en
kiStatus: Backlog
internalReference: 940127
---

## Summary


One of the steps to create a product is to insert a slug to represent the product's page URL. If the URL contains any special character, it will generate an invalid URL, and it could cause problems when trying to access the product page.
In other words, the catalog does not remove special characters when setting up the text link, such as © ℗ ® ™


#### Simulation


Create a product link with a special character, for example, © ℗ ® ™. The catalog won't remove the inserted special characters, causing problems in the product page rendering.


#### Workaround


Avoid using special characters in the product slug (URL), but if a URL was found with a special character, edit it manually to remove the character.


