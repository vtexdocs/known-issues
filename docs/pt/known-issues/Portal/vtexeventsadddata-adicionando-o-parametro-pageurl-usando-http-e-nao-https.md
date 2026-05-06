---
title: 'vtex.events.addData adicionando o parâmetro pageUrl usando http, e não https'
slug: vtexeventsadddata-adicionando-o-parametro-pageurl-usando-http-e-nao-https
status: PUBLISHED
createdAt: 2021-03-24T14:48:37.000Z
updatedAt: 2022-01-21T18:02:41.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: vtexeventsadddata-adding-pageurl-parameter-using-http-not-https
locale: pt
kiStatus: Backlog
internalReference: 348128
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

`vtex.events.addData`: adição do parâmetro `pageUrl` usando HTTP, e não HTTPS

## Simulação

- Verifique o código-fonte de uma conta do Portal VTEX
- O pageUrl utilizará HTTP:

 <script>
 vtex.events.addData({"pageCategory":"Home","pageDepartment":null,"pageUrl":"**http**://account.myvtex.com/", ...})
    </script>​

## Workaround

Não há solução alternativa