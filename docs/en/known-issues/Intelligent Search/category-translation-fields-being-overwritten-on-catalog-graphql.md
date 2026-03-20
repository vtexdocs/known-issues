---
title: 'Category translation fields being overwritten on catalog graphql'
slug: category-translation-fields-being-overwritten-on-catalog-graphql
status: PUBLISHED
createdAt: 2026-03-20T00:25:31.717Z
updatedAt: 2026-03-20T00:25:31.717Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: category-translation-fields-being-overwritten-on-catalog-graphql
locale: en
kiStatus: Backlog
internalReference: 654896
---

## Summary

When translating content using the catalog-graphql app or catalog translation, the fields like name, title, or description are being overwritten. This behavior only happens when the base language category configuration has identical values for any of these fields.

## Simulation

- Check the category configuration in the catalog admin
- Verify that at least two of the following fields have identical values in the base language configuration: "Name", "Category Page Title (Tag Title)", "Category Description (Meta Tag Description)"
- Follow the documentation: https://developers.vtex.com/vtex-developer-docs/docs/catalog-internationalization#category

## Workaround

To prevent the overwrite behavior, ensure that the base category configuration (in the account's default language) has distinct values for all three fields: Name, Category Page Title (Tag Title), and Category Description (Meta Tag Description).