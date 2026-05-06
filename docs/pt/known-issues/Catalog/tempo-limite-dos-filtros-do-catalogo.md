---
title: 'Tempo limite dos filtros do catálogo'
slug: tempo-limite-dos-filtros-do-catalogo
status: PUBLISHED
createdAt: 2023-10-19T17:11:21.000Z
updatedAt: 2023-10-19T17:11:21.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: pt
kiStatus: Backlog
internalReference: 922350
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas com um grande número de SKUs (1 milhão ou mais), frequentemente, ao filtrar usando os filtros da interface do catálogo — seja no menu principal ou na seção de relatórios —, se a consulta de filtragem retornar um resultado muito extenso, a interface de usuário entra em tempo limite (erro 504 de tempo limite do gateway)

## Simulação

Não há uma maneira confiável de simular isso de forma consistente — apenas consultas grandes específicas para poucas contas resultam no erro.

## Workaround

Solicite uma “limpeza do filtro do usuário” à equipe de produto.

Além disso, se a mesma consulta estiver gerando um tempo limite com frequência (ou seja, você filtra por um departamento específico e ocorre um tempo limite), considere aplicar filtros que selecionem um subconjunto do que você deseja (no mesmo exemplo, uma categoria dentro do departamento em questão)