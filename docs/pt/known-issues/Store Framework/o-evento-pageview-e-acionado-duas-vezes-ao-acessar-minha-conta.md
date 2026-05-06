---
title: 'O evento pageView é acionado duas vezes ao acessar "Minha conta"'
slug: o-evento-pageview-e-acionado-duas-vezes-ao-acessar-minha-conta
status: PUBLISHED
createdAt: 2023-07-03T16:32:48.000Z
updatedAt: 2023-07-03T16:32:48.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pageview-is-triggered-twice-when-accessing-my-account
locale: pt
kiStatus: Backlog
internalReference: 854480
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao acessar a página "Minha conta", o evento pageView é acionado duas vezes, duplicando os dados no Analytics.

## Simulação

- Configure o Google Tag Manager no aplicativo,
- Acesse a página "Minha conta";
- Abra as Ferramentas do desenvolvedor do navegador e digite "dataLayer" no Console; serão exibidos dois eventos pageView.

## Workaround

N/A