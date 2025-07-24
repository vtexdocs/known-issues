---
title: "Erro ao listar as dependências do espaço de trabalho" ao tentar acessar uma conta
slug: erro-ao-listar-as-dependencias-do-espaco-de-trabalho-ao-tentar-acessar-uma-conta
status: PUBLISHED
createdAt: 2025-07-24T17:35:48.130Z
updatedAt: 2025-07-24T17:35:48.130Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-listing-workspace-dependencies-when-trying-to-access-an-account
locale: pt
kiStatus: Backlog
internalReference: 1260934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar acessar uma conta que está há muito tempo sem acesso ou que não foi atualizada, você pode ver o seguinte erro:


    {"code": "route_map_error", "message": "Erro ao buscar dados de origem para o mapa de rotas: Error listing workspace dependencies: (500 generic_error at http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Error listing workspace dependencies: Falha ao obter as dependências instaladas: Failed to read data from cache: Unable to fetch data from remote cache: got 4 elements in cluster info address, expected 2 or 3", "requestId": ""}


Isso acontece porque a governanta não atualiza essas contas, pois elas ficam muito tempo sem acesso. O problema está relacionado a uma atualização em nossa infraestrutura de cache.
## Simulação


É difícil simular; você precisaria de uma conta antiga. Esse problema também impedirá o acesso ao administrador da conta; não é possível fazer login usando a CLI também. É algo mais provável de acontecer em contas de franquia ou de vendedor.


## Workaround


Abra um tíquete para o PS Apps para que possamos executar a solução alternativa para esse problema.



