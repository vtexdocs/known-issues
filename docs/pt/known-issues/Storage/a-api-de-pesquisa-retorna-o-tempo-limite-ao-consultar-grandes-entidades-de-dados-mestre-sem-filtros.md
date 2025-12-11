---
title: 'A API de pesquisa retorna o tempo limite ao consultar grandes entidades de dados mestre sem filtros'
slug: a-api-de-pesquisa-retorna-o-tempo-limite-ao-consultar-grandes-entidades-de-dados-mestre-sem-filtros
status: PUBLISHED
createdAt: 2025-12-11T13:04:42.367Z
updatedAt: 2025-12-11T13:04:42.367Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: search-api-returns-timeout-when-querying-large-master-data-entities-without-filters
locale: pt
kiStatus: Backlog
internalReference: 1338401
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As solicitações da API de pesquisa de dados mestres podem apresentar tempos limite ao consultar entidades de dados que contêm um grande volume de documentos (por exemplo, dezenas ou centenas de milhões). Isso ocorre porque a operação de pesquisa tem como padrão calcular o número total exato de registros correspondentes. Em conjuntos de dados extremamente grandes, esse cálculo exige uma varredura completa que excede o limite de tempo limite da API
## Simulação



1. Identifique uma entidade de dados mestre com um volume muito alto de documentos (por exemplo, > 50 milhões).
2. Execute uma solicitação de pesquisa genérica `GET` para a API de pesquisa sem aplicar filtros específicos ou indexados.
3. Observe que a solicitação leva muito tempo para ser processada e, por fim, falha com um erro de tempo limite (408 Request Timeout)
## Workaround


Para atenuar esse problema, certifique-se de que as consultas de pesquisa incluam filtros específicos - de preferência em campos indexados - para reduzir o escopo da varredura do banco de dados. Evite pesquisas amplas e sem filtro em entidades grandes.



