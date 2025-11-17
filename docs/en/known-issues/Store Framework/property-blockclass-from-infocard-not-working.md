---
title: 'Property blockClass from infoCard not working'
slug: property-blockclass-from-infocard-not-working
status: PUBLISHED
createdAt: 2025-11-17T17:43:03.301Z
updatedAt: 2025-11-17T17:43:03.301Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: property-blockclass-from-infocard-not-working
locale: en
kiStatus: Backlog
internalReference: 743730
---

## Summary



Infocard has a prop called blockClass to add custom classes into the component, but this property is not working


#### Simulation



Open your infoCard component, add the prop blockClass
Check your elements on DOM and you won't find any infocard element with the added class


#### Workaround


Build your own infocard with our components vtex.flex-layout, vtex.image and vtex.rich-text, this will give you more flexibility to build your infocard



