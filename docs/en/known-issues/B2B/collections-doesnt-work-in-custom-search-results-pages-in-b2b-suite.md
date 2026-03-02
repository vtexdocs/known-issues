---
title: "Collections doesn't work in custom search results pages in B2B Suite"
slug: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
status: PUBLISHED
createdAt: 2026-03-02T14:58:10.711Z
updatedAt: 2026-03-02T14:58:10.711Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-doesnt-work-in-custom-search-results-pages-in-b2b-suite
locale: en
kiStatus: Backlog
internalReference: 1043470
---

## Summary

Custom search results pages set up with collection id don't work when different product Collections are assigned to an organization.

The expected behavior when using Collections is to define the assortment of products the organization users will see in the storefront, but since B2B Organizations also use `productClusterId` in the search, when accessing custom search results pages set up with a different `productClusterId`, the search results show products from both collections.

Also, if the organization has more than one `productClusterId` assigned to it, when using `productClusterId` as a filter in the search, the products from all collections assigned to the organization will be shown.

## Simulation

**Scenario 1:**

- Set up a product Collection to an organization;
- Create a custom search results page with a different collection Id on the `productClusterId` filter;
- Log in and access the custom search result page; products from both collections are shown.

**Scenario 2:**

- Set up more than one product Collections to an organization;
- Create a custom search results page using only one of the`productClusterId` as filter;
- Log in and access the custom search result page; products from all collections registered to the organization are shown.

## Workaround

Use `productClusterNames` as the filter for these search pages in place of `productClusterIds`.