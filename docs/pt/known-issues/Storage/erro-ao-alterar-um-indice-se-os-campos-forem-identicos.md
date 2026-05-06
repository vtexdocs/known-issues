---
title: 'Erro ao alterar um índice se os campos forem idênticos.'
slug: erro-ao-alterar-um-indice-se-os-campos-forem-identicos
status: PUBLISHED
createdAt: 2023-07-03T21:48:35.000Z
updatedAt: 2025-10-21T22:14:14.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-changing-an-index-if-the-fields-are-identical
locale: pt
kiStatus: Fixed
internalReference: 854634
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A atualização de um índice de esquema pode resultar em um erro 500 (Erro interno do servidor) quando não há alterações a serem feitas, o que significa que os valores dos campos são idênticos aos atuais.
A execução de uma solicitação GET na API para verificar os índices revela que nenhuma atualização é necessária, uma vez que o índice é idêntico ao corpo fornecido na solicitação PUT.

## Simulação

1. Envie uma solicitação PUT para atualizar um índice de esquema por meio da API, fornecendo a carga útil necessária no corpo da solicitação.
2. Verifique a resposta da API e observe se ela retorna um **Erro 500 do servidor interno**.
3. Realize uma solicitação GET subsequente na API para recuperar os índices de esquema e compare-os com o corpo fornecido na solicitação PUT.

## Workaround

N/A