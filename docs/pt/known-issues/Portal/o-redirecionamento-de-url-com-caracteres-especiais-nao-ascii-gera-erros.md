---
title: 'O redirecionamento de URL com caracteres especiais não ASCII gera erros'
slug: o-redirecionamento-de-url-com-caracteres-especiais-nao-ascii-gera-erros
status: PUBLISHED
createdAt: 2021-10-26T15:52:00.000Z
updatedAt: 2023-02-10T13:05:07.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: url-redirect-with-special-characters-non-ascii-return-errors
locale: pt
kiStatus: Backlog
internalReference: 457047
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se criarmos um redirecionamento com alguns caracteres especiais, por exemplo, `/televisão`, ele não funcionará; receberemos o seguinte erro:

 Link: account.vtexcommercestable.com.br/televisão Erro: A resposta do servidor upstream retornou caracteres inválidos no cabeçalho

## Simulação

- Crie um redirecionamento 301 no CMS, por exemplo, de `/` para `/televisão`
- Verifique o corpo da resposta;

## Workaround

Não use caracteres especiais no redirecionamento.