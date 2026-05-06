---
title: 'Ao criar redirecionamentos incorretos que contenham caracteres ou parâmetros que não deveriam ser enviados, o upload/download do CSV pela CLI não funciona'
slug: ao-criar-redirecionamentos-incorretos-que-contenham-caracteres-ou-parametros-que-nao-deveriam-ser-enviados-o-uploaddownload-do-csv-pela-cli-nao-funciona
status: PUBLISHED
createdAt: 2024-01-25T19:00:01.000Z
updatedAt: 2024-01-25T19:00:01.000Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: creating-wrong-redirects-containing-charactersqueries-that-shouldnt-be-uploaded-the-uploaddownload-of-the-csv-through-the-cli-doesnt-work
locale: pt
kiStatus: No Fix
internalReference: 971936
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após criar redirecionamentos incorretos contendo caracteres que não devem ser enviados (por exemplo: #, consultas) ou redirecionamentos que deveriam ser criados no nível do servidor, o envio/baixamento em massa do CSV por meio da CLI deixa de funcionar.

## Simulação

Crie um redirecionamento para uma consulta, por exemplo: /?binding=XXXXX
Exclua o redirecionamento pelo IDE do GraphQL (não será possível excluí-lo de outra forma)
Tente baixar ou enviar o CSV dos redirecionamentos pela CLI e você não conseguirá fazê-lo.

 ![](https://vtexhelp.zendesk.com/attachments/token/etn94WlrSAYOFFj0rZfVwoowE/?name=image.png)

## Workaround

Atualmente, não há solução alternativa para isso, e o download em massa via CLI ficará inutilizável.