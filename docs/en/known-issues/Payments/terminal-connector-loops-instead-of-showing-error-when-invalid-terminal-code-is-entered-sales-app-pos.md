---
title: Terminal Connector loops instead of showing error when invalid terminal code is entered (Sales App POS)
slug: terminal-connector-loops-instead-of-showing-error-when-invalid-terminal-code-is-entered-sales-app-pos
status: PUBLISHED
createdAt: 2025-10-06T18:54:38.455Z
updatedAt: 2025-10-06T18:54:38.455Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: terminal-connector-loops-instead-of-showing-error-when-invalid-terminal-code-is-entered-sales-app-pos
locale: en
kiStatus: -
internalReference: 1303282
---

## Summary


When a user inputs a non-existent terminal serialNumber/code, the terminal-connector flow should show an error, but the native app vtex.terminal-connector-app enters an infinite loop, and the screen remains stuck on “Waiting for payment on the terminal.
Affects Sales App POS flows using vtex.terminal-connector-app when an invalid terminal code is provided


#### Simulation



- Start a payment on salesApp that opens vtex.terminal-connector-app to collect the terminal serialNumber.
- Enter a non-existent/invalid terminal code.
- Observe that checkout’s continue to return to the app, and the screen remains in a loop instead of closing and returning to checkouts page.


#### Workaround


Close the terminal challenge screen using the top X and restart the payment flow.



