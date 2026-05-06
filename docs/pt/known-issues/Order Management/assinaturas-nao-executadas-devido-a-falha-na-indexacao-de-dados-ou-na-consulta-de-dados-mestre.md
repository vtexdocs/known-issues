---
title: 'Assinaturas não executadas devido a falha na indexação de dados ou na consulta de dados mestre'
slug: assinaturas-nao-executadas-devido-a-falha-na-indexacao-de-dados-ou-na-consulta-de-dados-mestre
status: PUBLISHED
createdAt: 2024-01-04T20:26:48.000Z
updatedAt: 2024-07-09T17:24:26.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: subscriptions-not-executed-due-to-data-indexing-failure-or-masterdata-query-failure
locale: pt
kiStatus: Backlog
internalReference: 961526
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A criação de solicitações de assinatura depende do resultado de uma consulta feita ao banco de dados de assinaturas; essa consulta é realizada periodicamente para identificar quais assinaturas devem ser executadas nesse período. Se essa consulta falhar ou não retornar uma determinada assinatura, seu ciclo não será executado e nenhum erro será registrado, resultando assim em uma assinatura com a data `nextPurchaseDate` no passado.

## Simulação

Não temos como simular esse cenário devido à dependência de outros sistemas.

## Workaround

Para ajustar a `nextPurchaseDate`, o usuário final pode pausar a assinatura e reativá-la. Essa ação fará com que o sistema de assinaturas recalcule a data de execução e a `nextPurchaseDate` será atualizada corretamente.

Ou o cliente pode atualizar a `nextPurchaseDate` da assinatura do usuário para uma data futura por meio da API.