---
title: 'O aplicativo Mensagens está demorando muito para exibir as informações'
slug: o-aplicativo-mensagens-esta-demorando-muito-para-exibir-as-informacoes
status: PUBLISHED
createdAt: 2022-04-26T20:00:55.000Z
updatedAt: 2024-01-30T14:16:42.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: messages-app-taking-too-long-to-return-the-informations
locale: pt
kiStatus: Backlog
internalReference: 567305
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No processo de indexação, chamamos o aplicativo de mensagens para salvar as informações traduzidas dos produtos; o principal problema é que as solicitações estão demorando muito para retornar e, com isso, algumas lojas que possuem muitos idiomas ou não são indexadas completamente ou têm suas indexações paralisadas.

## Simulação

Verifique qualquer loja que tenha um grande número de idiomas, mais de 10, e isso começará a tornar a resposta das mensagens mais lenta.
Isso pode afetar outros sistemas que dependem das mensagens para traduzir informações.

## Workaround

N/A