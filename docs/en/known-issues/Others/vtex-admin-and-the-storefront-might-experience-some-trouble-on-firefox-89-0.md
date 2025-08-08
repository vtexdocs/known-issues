---
title: 'VTEX Admin and the storefront might experience some trouble on Firefox 89.0'
id: 10BUSPqviNy4VQzuIbllKL
status: PUBLISHED
createdAt: 2021-06-08T17:54:36.813Z
updatedAt: 2022-12-22T15:07:43.284Z
publishedAt: 2022-12-22T15:07:43.284Z
firstPublishedAt: 2021-06-08T19:41:46.005Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Checkout,Payments,Store Framework
slugEN: vtex-admin-and-the-storefront-might-experience-some-trouble-on-firefox-89-0
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

VTEX Admin might not load some modules on Firefox 89.0 due to the new `Enhanced Tracking Protection` option in the browser, which is turned on by default. 

This problem may also affect the storefront and the checkout page, when end-customers access the store through Firefox 89.0.


## Simulation

If you, or your store’s customers have updated your Firefox browser to the 89.0 version, it is likely that your storefront and some VTEX Admin modules may not load. 


## Workaround

To fix this issue, you should turn off the tracking toggle: 

1. Access your **VTEX Admin, or storefront** through Firefox 89.0.  
2. Click on the **shield icon**, next to the url.   
3. Turn **off** the `Enhanced Tracking protection is ON for this site` toggle.   

Don’t worry: turning off this option will not make your store unprotected.

>ℹ️ If after these steps your Admin or store is still not loading, we advise you to try another browser.

![Firefox bug EN](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/en/known-issues/Others/vtex-admin-and-the-storefront-might-experience-some-trouble-on-firefox-89-0_1.jpg)


