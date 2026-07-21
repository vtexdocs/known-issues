---
title: 'Um tempo limite excedido na consulta de análise pode impedir o carregamento do log de inventário.'
slug: um-tempo-limite-excedido-na-consulta-de-analise-pode-impedir-o-carregamento-do-log-de-inventario
status: PUBLISHED
createdAt: 2025-01-08T16:01:46.000Z
updatedAt: 2026-07-22T00:00:47.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: timeout-in-analytics-query-can-prevent-inventory-log-from-loading
locale: pt
kiStatus: Fixed
internalReference: 1159693
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Na interface de inventário, o registro de atualizações às vezes não carrega para SKUs específicos, exibindo a mensagem de erro: `Ocorreu um erro ao carregar os dados. Tente novamente.` A solicitação falha com a mensagem de exceção: `Falha na solicitação com o código de status 500`, o que indica um tempo limite na consulta ao Analytics (onde os dados são armazenados). Como resultado, nenhum registro para o SKU é exibido na interface.

Esse tempo limite pode ocorrer devido ao alto volume de atualizações para o SKU ou outros fatores que podem fazer com que a consulta exceda o tempo máximo de execução permitido de 40 segundos.

## Simulação

Como a variável é o tempo de resposta da consulta ao Analytics, não é possível replicar o problema de forma concisa.

## Workaround

Em alguns casos, atualizar a página resolve o problema e permite que o registro de inventário carregue corretamente.