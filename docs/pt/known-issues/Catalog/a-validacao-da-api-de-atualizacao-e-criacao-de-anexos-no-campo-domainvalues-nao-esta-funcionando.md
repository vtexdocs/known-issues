---
title: 'A validação da API de atualização e criação de anexos no campo DomainValues não está funcionando'
slug: a-validacao-da-api-de-atualizacao-e-criacao-de-anexos-no-campo-domainvalues-nao-esta-funcionando
status: PUBLISHED
createdAt: 2023-02-09T16:09:48.000Z
updatedAt: 2023-02-09T16:09:48.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachment-update-and-create-api-validation-on-field-domainvalues-not-working
locale: pt
kiStatus: Backlog
internalReference: 751091
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Através da interface do usuário (diretamente no painel de administração do VTEX), é possível criar um anexo sem preencher o campo **Valores permitidos**:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

No entanto, via API, existe essa validação para esse campo:

 <Error> <Message>DomainValues no Domain na posição 0 não pode ser nulo ou um valor vazio</Message></Error>


Isso significa que você não pode criar um anexo assim:

 { "Id": 6, "Name": "Test", "IsRequired": false, "IsActive": true, "Domains": [     { "FieldName": "test", "MaxCaracters": "20",          "DomainValues": "" }  ]}

## Simulação

1. Use a seguinte API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/attachment
2. Tente deixar o campo DomainValues vazio
3. Verifique se a mensagem de erro mencionada acima é retornada.

## Workaround

Crie o anexo através do Admin.