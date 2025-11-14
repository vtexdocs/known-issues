---
title: 'As subcontas não são alocadas automaticamente em um cluster'
slug: as-subcontas-nao-sao-alocadas-automaticamente-em-um-cluster
status: PUBLISHED
createdAt: 2025-11-14T16:21:20.207Z
updatedAt: 2025-11-14T16:21:20.207Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: subaccounts-are-not-automatically-allocated-to-a-cluster
locale: pt
kiStatus: Backlog
internalReference: 1227332
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As subcontas não são alocadas automaticamente em um cluster após a criação. Como resultado, a pesquisa de dados mestre não funciona corretamente para essas subcontas.
## Simulação



1. Crie ou acesse uma subconta que não tenha sido alocada manualmente a um cluster.
2.

Tentativa de chamar a API de pesquisa de dados mestre, como:

    GET https://..com/api/dataentities/CL/search?_fields=id
3. Observe que a resposta retorna um erro 500, indicando que a pesquisa de dados mestre não está funcionando
## Workaround


A API desta documentação também pode alocar uma conta em um cluster - os formulários de cliente e endereço não existem em vários armazenamentos. Para usá-lo, o usuário deve ter o recurso ADMIN_DS em sua função.



