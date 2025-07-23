---
title: 'utmi_p e utmi_pc não sendo mantido na URL após o login'
id: 7e8EO8EWEJCLbXs16ZofQk
status: PUBLISHED
createdAt: 2022-03-16T16:17:55.535Z
updatedAt: 2024-02-16T20:29:25.217Z
publishedAt: 2024-02-16T20:29:25.217Z
firstPublishedAt: 2022-03-16T16:17:55.979Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: utmip-e-utmipc-not-being-kept-on-the-url-after-login
locale: pt
kiStatus: No Fix
internalReference: 372787
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



## Simulação


- Acesse um modelo restrito com uma URL no pedido, por exemplo: `.myvtex.com/Sistema/401?utm_source=utmSource&utm_medium=utmMedium&utm_campaign=utmCampaign&utmi_cp=utmiCampaign&utmi_pc=utmiPart&utmi_p=utmipage`
- Verifique se, após o login, os utmi_p e utmi_pc do UTM não estão sendo mantidos



## Workaround


Use outro tipo de UTMs, por exemplo, utm_source e umt_campaign.

