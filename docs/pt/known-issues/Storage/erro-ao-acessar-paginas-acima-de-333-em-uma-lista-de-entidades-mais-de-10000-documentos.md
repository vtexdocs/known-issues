---
title: 'Erro ao acessar páginas acima de 333 em uma lista de entidades (mais de 10.000 documentos)'
slug: erro-ao-acessar-paginas-acima-de-333-em-uma-lista-de-entidades-mais-de-10000-documentos
status: PUBLISHED
createdAt: 2025-11-14T19:39:10.015Z
updatedAt: 2025-11-14T19:39:10.015Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-reaching-pages-over-333-on-a-entity-list-more-than-10000-documents
locale: pt
kiStatus: Backlog
internalReference: 334407
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Quando a loja tem mais de 10.000 documentos, ou seja, mais de 333 páginas, ao tentar acessar as páginas mais recentes no CRM, ocorre um erro de mensagem:

    VTEX - Dados mestre: Ocorreu um erro inesperado no sistema. Por favor, tente novamente, caso o erro persista entre em contato com a VTEX.

 ![](https://vtexhelp.zendesk.com/attachments/token/5wXQPX2etczf6IiyzGFLAtIvp/?name=inline1653316518.png)
## Simulação



1. Vá para um CRM em uma entidade com muitos dados (mais de 10 mil documentos);
2. O erro ocorrerá ao tentar acessar uma página que recuperaria o 10.000º documento ou mais. Normalmente, na página 334 (10.000 / 30 = 333,33 ~~ 334)


## Workaround


Se o armazenamento desejar recuperar os dados mais recentes, ele poderá usar a API Scroll documents:

- MasterData v1: https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/scroll
- MasterData v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/scroll