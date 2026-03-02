---
title: 'Secrets take hours to propagate to builds in WebOps (FastStore Platform)'
slug: secrets-take-hours-to-propagate-to-builds-in-webops-faststore-platform
status: PUBLISHED
createdAt: 2026-03-02T17:57:58.319Z
updatedAt: 2026-03-02T17:57:58.319Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: secrets-take-hours-to-propagate-to-builds-in-webops-faststore-platform
locale: en
kiStatus: Backlog
internalReference: 1371882
---

## Summary

WebOps secret updates sometimes take hours to become available in FastStore builds, instead of the expected few minutes. The visible symptom is that new or edited secrets are missing from the build image/environment, even after triggering a new deployment.

## Simulation

Prerequisites: A FastStore project using WebOps with Variables and Secrets configured.

Steps:

1) In WebOps → Settings → Variables and Secrets for the target account/environment, create or update secrets. Record the save timestamp.

2) Trigger a new deployment (either via commit or by starting a deployment in WebOps) and note the deployment link and build time.

3) Inspect the resulting build image/environment variables. The issue reproduces when the newly saved secrets do not appear in the build for an extended period (potentially hours).

## Workaround

After saving secrets, wait a few minutes and then trigger a new deployment. If secrets are still missing, open a support ticket immediately with:

- Account/environment, exact secret names (no values), secret save timestamp, deployment link, and build time.