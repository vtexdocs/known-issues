---
title: 'A API do Attachents não permite valores nulos em "domainValues" (e deveria permitir)'
slug: a-api-do-attachents-nao-permite-valores-nulos-em-domainvalues-e-deveria-permitir
status: PUBLISHED
createdAt: 2023-09-11T19:02:39.000Z
updatedAt: 2023-09-11T19:02:39.000Z
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

As solicitações de atualização para a API /api/catalog/pvt/attachment/ não permitem que o campo "Value" do domínio seja atualizado com um valor nulo.

Esse campo é nulo, portanto, a resposta da API está incorreta:

`{`
`  "Message": "DomainValues no domínio na posição 1 não pode ser nulo ou um valor vazio"`
`}`

## Simulação

1 - Crie um anexo via interface do usuário ou API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - tente atualizá-lo enviando o campo `domainValue` como nulo, por exemplo:

`{`
`  "Id": 123,`
`  "Name": "payload com domínio nulo",`
`  "IsRequired": true,`
`  "IsActive": true,`
`  "Domains": [`
` {`
` "FieldName": "Teste básico",`
` "MaxCaracters": "354534",`
` "DomainValues": ""`
` }`
`  ]`
`}`

3 - será exibido um tipo de resposta "Bad request", quando na verdade deveria aceitar valores nulos para este campo.

## Workaround

Atualize os valores permitidos manualmente, via interface do usuário, ou crie-os já como nulos (o método POST está funcionando, o PUT não).