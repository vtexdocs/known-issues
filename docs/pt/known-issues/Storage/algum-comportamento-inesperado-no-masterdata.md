---
title: 'Algum comportamento inesperado no MasterData'
slug: algum-comportamento-inesperado-no-masterdata
status: PUBLISHED
createdAt: 2022-09-30T16:55:02.000Z
updatedAt: 2025-10-10T19:11:34.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: some-unexpected-behavior-in-masterdata
locale: pt
kiStatus: Backlog
internalReference: 669048
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Mesmo com dados disponíveis (documentos), as informações não são retornadas conforme o esperado.
Esse comportamento pode afetar algumas das seguintes funcionalidades:

- As imagens no Editor do Site (CMS) não estão disponíveis, devido à mensagem de erro "_Algo deu errado. Tente novamente._";
- Não é possível acessar entidades e seus documentos devido à mensagem de erro "_Ocorreu um erro inesperado. Tente novamente. Se o problema persistir, entre em contato com o suporte._";
- A `_sort` não é respeitada na API de Pesquisa de Documentos;
- Nenhuma informação é retornada ao usar a API de Pesquisa de Documentos (uma resposta vazia, como `[]`), mesmo quando há documentos.

## Simulação

Como se trata de um comportamento ocasional (evento relacionado ao cluster), ele não pode ser simulado.

## Workaround

Uma possível solução alternativa é executar o processo descrito na documentação pública "_Os formulários de Cliente e Endereço não existem em multistores_."
Se o problema persistir, abra um ticket com o suporte da VTEX.