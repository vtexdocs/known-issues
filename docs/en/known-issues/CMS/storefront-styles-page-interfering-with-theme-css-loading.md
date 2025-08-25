---
title: Storefront Styles Page Interfering with Theme CSS Loading
slug: storefront-styles-page-interfering-with-theme-css-loading
status: PUBLISHED
createdAt: 2025-08-25T15:07:10.881Z
updatedAt: 2025-08-25T15:07:10.881Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: storefront-styles-page-interfering-with-theme-css-loading
locale: en
kiStatus: Backlog
internalReference: 1280557
---

## Summary


When a theme version is saved as **"current"** in the **Storefronts → Styles** section of the VTEX Admin, this configuration overrides the CSS loaded on the storefront. This behavior causes issues when a new version of the theme is published, since the CSS from the version marked as "current" in Styles will still be served to the storefront instead of the latest theme version.


#### Simulation



- In VTEX Admin, go to **Storefronts → Styles**.
- Save a theme style as **"current"**.
- Publish a new version of the theme with CSS changes.
- Access the storefront and check the CSS being served.
- Notice that the CSS still references the theme version saved in **Styles**, not the latest published version.
- You can also verify the CSS being called in the HTML to have the wrong theme id.


#### Workaround


Go to the **Storefronts → Styles** page in the Admin and save the new theme version as **"current"**.



