---
title: Alguns comportamentos inesperados no MasterData
slug: alguns-comportamentos-inesperados-no-masterdata
status: PUBLISHED
createdAt: 2025-10-10T16:12:00.992Z
updatedAt: 2025-10-10T16:12:00.992Z
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


Mesmo com dados disponíveis (documentos), as informações não são retornadas como esperado.
Esse comportamento pode afetar algumas das seguintes funcionalidades:

- As imagens no Editor do site (CMS) não estão disponíveis, devido à mensagem de erro "_Algo deu errado. Por favor, tente novamente.";
- Não é possível acessar entidades e seus documentos devido à mensagem de erro "_Ocorreu um erro inesperado. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte._";
- O `_sort` não é respeitado na API Search documents;
- Nenhuma informação é retornada ao usar a API Search Documents (uma resposta vazia, como `[]`), mesmo quando eles contêm documentos.
## Simulação


Como esse é um comportamento ocasional (evento relacionado ao cluster), ele não pode ser simulado.


## Workaround


Uma possível solução alternativa é executar o processo descrito na documentação pública "_Formulários de cliente e endereço não existem em vários armazenamentos_".
Se o problema persistir, abra um tíquete com o suporte da VTEX.


