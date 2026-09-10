---
title: 'CentauroKI Mapper filer have 1MB file size limit on API uploads'
slug: centauroki-mapper-filer-have-1mb-file-size-limit-on-api-uploads
status: PUBLISHED
createdAt: 2026-09-10T23:30:29.000Z
updatedAt: 2026-09-10T23:30:41.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: centauroki-mapper-filer-have-1mb-file-size-limit-on-api-uploads
locale: en
kiStatus: Backlog
internalReference: 1459896
---

## Summary

Uploading a mapping spreadsheet larger than 1MB fails, because an external layer in front of VTEX's integration APIs blocks it.

## Simulation

Attempt to upload a Centauro mapping spreadsheet larger than 1MB (Variation/Specification tab or Freight tab) via Admin > Marketplace Configuration > Centauro, or directly through the integration's mapping API endpoint. The request is rejected by the external validation layer due to file size (> 1MB).

## Workaround

Perform a single upload of a spreadsheet under 1MB (reduce the file's content — do not split it into multiple uploads).