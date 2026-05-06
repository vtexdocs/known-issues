---
title: 'Intelligent Search Banner update via Image URL does not work correctly'
slug: intelligent-search-banner-update-via-image-url-does-not-work-correctly
status: PUBLISHED
createdAt: 2023-01-17T14:33:14.000Z
updatedAt: 2023-09-06T22:34:45.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-banner-update-via-image-url-does-not-work-correctly
locale: en
kiStatus: Backlog
internalReference: 734833
---

## Summary

In Admin V4, in the Banners module, the user has the possibility to create or update already created banners. When selecting a banner for updating, he can choose between using an HTML field or inserting a direct image link with an external URL. When selecting to insert the banner via a direct image link, the GraphQL query is triggered, which is currently not working correctly, returning `syntaxError`, consequently, error 500.

## Simulation

In a store with Admin V4, access the Banners module, within Search;
Select a previously created banner;
In Type, select Image;
Fill in the link fields;
When clicking Save, the screen will show a GraphQL error;

## Workaround

N/A