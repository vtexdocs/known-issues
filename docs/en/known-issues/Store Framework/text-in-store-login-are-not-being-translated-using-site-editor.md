---
title: 'Text in Store Login are not being translated using site editor'
slug: text-in-store-login-are-not-being-translated-using-site-editor
status: PUBLISHED
createdAt: 2026-01-06T14:19:01.670Z
updatedAt: 2026-01-06T14:19:01.670Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: text-in-store-login-are-not-being-translated-using-site-editor
locale: en
kiStatus: Backlog
internalReference: 911757
---

## Summary


When trying to translate a text using the site editor for the Store Login, the changes won't apply in the store front.


#### Simulation



1. Open site editor
2. Select Store Login block
3. Change the text label in the login to anything desired
4. Save changes
5. Visualize the page and the text will be the same no matter the locale selected



#### Workaround


Make sure iconLabel is empty in both the store code and site editor.
If you are not sure if it's empty in the site editor, you can reset the content by going through the site editor version > reset.
 ![](https://vtexhelp.zendesk.com/attachments/token/PXovY6zVHdqqhxjodbtMqdXAa/?name=image.png)

Follow the documentation here and the contexts here to set the label as desired instead.



