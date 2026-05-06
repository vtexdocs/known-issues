---
title: 'A função de representação de usuário não está enviando o cookie de autenticação de representação em algumas chamadas'
slug: a-funcao-de-representacao-de-usuario-nao-esta-enviando-o-cookie-de-autenticacao-de-representacao-em-algumas-chamadas
status: PUBLISHED
createdAt: 2023-04-13T21:23:52.000Z
updatedAt: 2023-04-13T21:23:52.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: impersonate-user-not-sending-impersonated-authentication-cookie-for-some-calls
locale: pt
kiStatus: Backlog
internalReference: 790185
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando você está no acesso de telemarketing e tenta assumir a identidade de um usuário que possui acesso a uma política comercial com restrições, algumas camadas do GraphQL não enviam o cookie do usuário cuja identidade foi assumida, causando uma resposta de acesso proibido das APIs

## Simulação

1. Crie um usuário administrador com acesso ao call center
2. Crie uma política comercial (TP) com uma restrição
3. Crie um usuário na conta e conceda acesso à condição de TP fechada por meio dos dados mestres
4. Faça login na conta com o usuário de call center criado na etapa 1
5. Assuma a identidade do usuário criado na etapa 3
6. Verifique qualquer PDP

O comportamento esperado não é encontrado na página, pois a autenticação utilizada não permite o acesso à TP do usuário cuja identidade foi assumida e não estamos enviando a sessão de impersonificação para algumas chamadas GraphQL

## Workaround

1. Crie um usuário na loja com o mesmo e-mail do acesso do administrador
2. Conceda acesso à condição TP para o e-mail do administrador

Com isso, você poderá acessar as condições do usuário representada