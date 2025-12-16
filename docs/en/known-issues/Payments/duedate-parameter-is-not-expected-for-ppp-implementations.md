---
title: 'dueDate parameter is not expected for PPP implementations'
slug: duedate-parameter-is-not-expected-for-ppp-implementations
status: PUBLISHED
createdAt: 2025-12-16T13:55:35.282Z
updatedAt: 2025-12-16T13:55:35.282Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duedate-parameter-is-not-expected-for-ppp-implementations
locale: en
kiStatus: Backlog
internalReference: 1340572
---

## Summary


Payment Connectors' built according to the Payment Provider Protocol (PPP) responses to VTEX's are not expected to include the `dueDate` parameter since this parameter is not defined in the Payment Details API.

This may lead to incorrect/inaccurate information in other flows that rely on this information.


#### Simulation


The issue is not easy to simulate but can be observed on any transaction from a conector that uses the Payment Provider Protocol.


#### Workaround


N/A



