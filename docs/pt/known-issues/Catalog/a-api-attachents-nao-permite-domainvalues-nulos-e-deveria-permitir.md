---
title: 'A API Attachents não permite "domainValues" nulos (e deveria permitir).'
slug: a-api-attachents-nao-permite-domainvalues-nulos-e-deveria-permitir
status: PUBLISHED
createdAt: 2023-09-11T22:02:39.000Z
updatedAt: 2026-09-23T17:04:15.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachents-api-doesnt-allow-null-domainvalues-and-it-should
locale: pt
kiStatus: Backlog
internalReference: 897480
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As solicitações de atualização para a API /api/catalog/pvt/attachment/ não permitem atualizações para o campo Valor do domínio com valor nulo.

Este campo aceita valores nulos, portanto, a resposta da API está incorreta:

`{`
`  "Message": "DomainValues in Domain at position 1 can not be null or empty value"`
`}`

## Simulação

1 - Crie um anexo via interface do usuário ou API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - Tente atualizá-lo enviando o campo domainValue como nulo, por exemplo:

`{`
`  "Id": 123,"`
`  "Name": "payload with null domain,"`
`  "IsRequired": true,"`
` "IsActive": true,`
` "Domains": [`
` {`
` "FieldName": "Teste básico",`
` "MaxCaracters": "354534",`
` "DomainValues": ""`
` }`
` ]`
`}`

3 - Uma resposta do tipo "Solicitação inválida" será exibida, quando, na verdade, deveria aceitar valores nulos para este campo.

## Workaround

Atualize os valores permitidos manualmente, pela interface do usuário, ou crie-os já como nulos (o método POST funciona, o PUT não).