---
title: 'Erro na criação do cartão-presente pelo administrador'
slug: erro-na-criacao-do-cartaopresente-pelo-administrador
status: PUBLISHED
createdAt: 2024-02-21T22:45:10.000Z
updatedAt: 2024-02-21T22:45:10.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-creation-error-via-admin
locale: pt
kiStatus: Backlog
internalReference: 986327
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Algumas contas não conseguirão criar um cartão-presente pela primeira vez pelo painel de administração; a mensagem abaixo aparecerá na tela:

`Ocorreu um erro`
`Erro ao conectar-se ao servidor backend.`
`Por favor, tente acessar nossa loja novamente em alguns instantes.`

## Simulação

Isso só pode ser reproduzido em lojas que enfrentam esse problema; após preencher todas as informações do Vale-presente e clicar no botão `Salvar`, os usuários verão a mensagem de erro mencionada acima.

## Workaround

Se o primeiro Vale-presente for criado via API, o erro deixará de ocorrer; os comerciantes poderão criar Vales-presente pelo painel de administração normalmente a partir de então.