---
title: 'Custom elements on legacy cms not working with more than one HTML'
slug: custom-elements-on-legacy-cms-not-working-with-more-than-one-html
status: PUBLISHED
createdAt: 2023-07-31T16:34:51.000Z
updatedAt: 2023-07-31T16:34:51.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: custom-elements-on-legacy-cms-not-working-with-more-than-one-html
locale: en
kiStatus: Backlog
internalReference: 871480
---

## Summary

When creating a custom element with more than one HTML element, only the first one is loaded on the template.

## Simulation

1. Create a custom element with HTML type;
2. Create a least 2 html codes on this custom element;
3. Check that the template that has this custom element only loads the first HTML.

## Workaround

Gather all htmls on only one element on the custom element.