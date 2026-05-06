---
title: 'A pesquisa não retorna nenhum documento quando o valor contém o símbolo + (mais).'
slug: a-pesquisa-nao-retorna-nenhum-documento-quando-o-valor-contem-o-simbolo-mais
status: PUBLISHED
createdAt: 2023-05-18T18:29:42.000Z
updatedAt: 2024-07-08T21:45:59.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: searching-not-return-document-when-the-value-contains-a-plus-symbol
locale: pt
kiStatus: No Fix
internalReference: 828170
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao pesquisar um documento usando um valor de campo que inclua o símbolo "+", a pesquisa não retorna o documento. Isso ocorre porque o símbolo "+" é interpretado incorretamente, fazendo com que o valor da pesquisa não corresponda ao valor existente.
_Este problema ocorre tanto na API quanto no CRM_

## Simulação

1. Use a API de pesquisa para consultar um campo que inclua o símbolo "+".
2. A pesquisa retornará uma matriz vazia. Exemplo:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=+5512345678901&_fields=id,userId,email,homePhone,firstName


Na interface do CRM:
Se você pesquisar um e-mail que contenha o símbolo "+", um erro será retornado.

 Ocorreu um erro inesperado. Tente novamente. Se o problema persistir, entre em contato com o suporte.

## Workaround

Existem duas maneiras de lidar com esse problema:
Codifique o símbolo "+" como "%2B", de modo que a consulta de pesquisa fique assim:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=%2B5512345678901&_fields=id,userId,email,homePhone,firstName


Use o símbolo "*" como curinga, o que permitirá que a pesquisa corresponda a qualquer(s) caractere(s) antes do valor especificado:

 https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=*12345678901&_fields=id,userId,email,homePhone,firstName

Esse problema ocorre ao pesquisar documentos usando valores de campo que incluem o símbolo "+". A API de pesquisa não interpreta corretamente o símbolo "+", fazendo com que a pesquisa falhe por não corresponder aos valores existentes. Esse problema não se limita ao campo "homePhone", mas pode ocorrer com outros campos, como e-mail, que possam incluir caracteres especiais.
Para contornar esse problema, você pode codificar o símbolo "+" como "%2B" na consulta de pesquisa ou usar o símbolo "*" como curinga para garantir que a pesquisa recupere os documentos corretos.%0A