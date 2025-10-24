---
title: 'O MDv2 retorna o erro "504 Gateway Timeout" quando tentamos atualizar um documento passando um símbolo ou caractere especial.'
slug: o-mdv2-retorna-o-erro-504-gateway-timeout-quando-tentamos-atualizar-um-documento-passando-um-simbolo-ou-caractere-especial
status: PUBLISHED
createdAt: 2025-10-24T22:00:16.099Z
updatedAt: 2025-10-24T22:00:16.099Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: mdv2-returns-error-504-gateway-timeout-when-we-try-to-update-a-document-passing-a-symbol-or-special-character
locale: pt
kiStatus: Fixed
internalReference: 852966
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O comportamento da API ao tentar atualizar um documento que contém um símbolo em um campo do tipo string, como `"name": "Product1 14€"`, retornará o erro 504 Gateway timeout e não atualizará o documento.
## Simulação



1. Faça uma solicitação PUT para atualizar um documento por meio da API e, no corpo, inclua o caractere especial em um campo do tipo string.

    { "name": "Product1 14€", ...}2.  Observe a resposta da API e verifique se ela retorna o erro 504 Gateway timeout
## Workaround


Exclua o caractere especial e digite o nome do símbolo. Por exemplo: "`14 euros`"