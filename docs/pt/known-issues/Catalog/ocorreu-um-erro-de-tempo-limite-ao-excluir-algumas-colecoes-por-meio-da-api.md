---
title: 'Ocorreu um erro de tempo limite ao excluir algumas coleções por meio da API.'
slug: ocorreu-um-erro-de-tempo-limite-ao-excluir-algumas-colecoes-por-meio-da-api
status: PUBLISHED
createdAt: 2026-08-13T00:42:15.000Z
updatedAt: 2026-08-13T00:42:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: timeout-returned-when-deleting-some-collections-through-api
locale: pt
kiStatus: Backlog
internalReference: 1447421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao excluir algumas coleções por meio da API Excluir Coleção, a API pode retornar um código de resposta 500 juntamente com um tempo de execução superior a 15 segundos. Ao analisar a coleção que se tenta excluir, provavelmente ela não terá muitos produtos, mas ao analisar as subcoleções associadas a ela, haverá muitos registros, especificamente um para cada SKU associado na subcoleção. Subcoleções com uma grande quantidade de SKUs podem fazer com que o processo de exclusão demore mais do que o esperado e falhe internamente devido a um tempo limite excedido.

## Simulação

- Criar e adicionar produtos a uma coleção;

- Adicionar muitos produtos que tenham mais de um SKU (chegando a mais de 12 mil SKUs, por exemplo);

- Tentar excluir a coleção por meio da API Excluir Coleção;

- A API retornará uma resposta 500 e um tempo de execução de cerca de 15 a 20 segundos até a tentativa falhar.

## Workaround

Antes de usar o endpoint Excluir Coleção, exclua todas as subcoleções inerentes ao ID da coleção que você está excluindo. Ao remover todas as subcoleções do contexto da coleção, o processo de exclusão não demorará muito mais e não falhará com um tempo limite excedido.