---
title: 'Ocorreu o erro "Erro ao listar as dependências do espaço de trabalho" ao tentar acessar uma conta.'
slug: ocorreu-o-erro-erro-ao-listar-as-dependencias-do-espaco-de-trabalho-ao-tentar-acessar-uma-conta
status: PUBLISHED
createdAt: 2025-07-16T16:56:56.000Z
updatedAt: 2026-10-02T16:24:57.000Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-listing-workspace-dependencies-when-trying-to-access-an-account
locale: pt
kiStatus: Fixed
internalReference: 1260934
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar acessar uma conta que está inativa há muito tempo ou que não foi atualizada, você pode ver o seguinte erro:

{"code": "route_map_error","message": "Erro ao buscar dados de origem para o mapa de rotas: Erro ao listar as dependências do espaço de trabalho: (500 generic_error em http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Erro ao listar as dependências do espaço de trabalho: Falha ao obter as dependências instaladas: Falha ao ler os dados do cache: Não foi possível buscar os dados do cache remoto: foram obtidos 4 elementos no endereço de informações do cluster, esperados 2 ou 3","requestId": ""}

Isso ocorre porque o gerenciador de servidores não atualiza esses dados. contas, visto que estão inacessíveis há muito tempo. O problema está relacionado a uma atualização em nossa infraestrutura de cache.

## Simulação

É difícil simular; você precisaria de uma conta antiga. Esse problema também impedirá o acesso ao administrador da conta; não é possível fazer login usando a CLI. É algo que provavelmente ocorrerá em contas de franquia ou de vendedor.

## Workaround

Abra um chamado para a PS Apps para que possamos implementar a solução alternativa.