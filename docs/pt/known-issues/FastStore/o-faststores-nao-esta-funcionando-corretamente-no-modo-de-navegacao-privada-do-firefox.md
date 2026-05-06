---
title: 'O Faststores não está funcionando corretamente no Modo de Navegação Privada do Firefox'
slug: o-faststores-nao-esta-funcionando-corretamente-no-modo-de-navegacao-privada-do-firefox
status: PUBLISHED
createdAt: 2023-05-19T14:56:40.000Z
updatedAt: 2023-05-19T14:56:40.000Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststores-not-working-correctly-in-firefox-private-mode
locale: pt
kiStatus: Backlog
internalReference: 828685
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Existe um bug no Mozilla Firefox, especialmente no modo de navegação privada, que afeta o armazenamento do IndexedDB, e o Faststore depende disso para funcionar corretamente. Com isso, o site inteiro não funcionará, pois depende das informações do IndexedDB para o funcionamento adequado.

Aqui estão algumas perguntas frequentes relacionadas ao problema:

https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=1267582
https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=781982

## Simulação

- Abra uma loja no Faststore na aba de navegação anônima.
- Você pode verificar se há uma limitação na criação do armazenamento indexedDB, prejudicando o funcionamento da loja.

## Workaround

Não