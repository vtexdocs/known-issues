---
title: 'A validação da API Attachment Update e Create no campo DomainValues não está funcionando'
slug: a-validacao-da-api-attachment-update-e-create-no-campo-domainvalues-nao-esta-funcionando
status: PUBLISHED
createdAt: 2025-11-14T17:14:30.826Z
updatedAt: 2025-11-14T17:14:30.826Z
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


Por meio da UI (diretamente no VTEX admin) é possível criar um anexo sem o campo **Valores permitidos** preenchido:
 ![](https://vtexhelp.zendesk.com/attachments/token/8rFw6593yoVr64CViajezsXW0/?name=image.png)

No entanto, por meio da API, há essa validação para esse campo:

    <Error> <Message>DomainValues in Domain na posição 0 não pode ser nulo ou um valor vazio</Message></Error>


Isso significa que você não pode criar um anexo como esse:

    { "Id": 6, "Name": "Test", "IsRequired": false, "IsActive": true, "Domains": [ { "FieldName": "test", "MaxCaracters": "20", "DomainValues": ""      }  ]}


## Simulação



1. Use a seguinte API: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/attachment
2. Tente deixar vazio o campo DomainValues
3. Verifique se a mensagem de erro mencionada acima é retornada
## Workaround


Crie o anexo por meio do Admin.



