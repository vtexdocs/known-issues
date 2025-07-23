---
title: 'O serviço de impostos usa dados de documentos em vez de e-mail do cliente'
id: IOu1ZV40Q5yHjgbcS9C15
status: PUBLISHED
createdAt: 2022-03-23T17:50:15.754Z
updatedAt: 2024-02-16T20:28:42.991Z
publishedAt: 2024-02-16T20:28:42.991Z
firstPublishedAt: 2022-03-23T17:50:16.302Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-uses-document-data-instead-of-customer-email
locale: pt
kiStatus: No Fix
internalReference: 548671
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



O checkout, ao montar a carga tributária para o serviço de impostos, utiliza os dados do documento (seja corporativo ou não) no lugar do e-mail. Desta forma, a variável `clienteEmail` mantém a definição do documento que foi recebido e não o e-mail em si.



## Simulação


Fazer uma simulação para o FFM passando corretamente os dados do cliente no `clientProfileData` e notar utilizando o modo de depuração a solicitação que é feita ao serviço de impostos a variável `clientEmail` utilizando a informação que foi passada no `corporateDocument` ou `document` (dependendo do tipo de documento)



## Workaround


Não leve em conta o `clienteEmail`, mas o e-mail que está dentro do `clienteData`. Aí os dados estão corretos.

