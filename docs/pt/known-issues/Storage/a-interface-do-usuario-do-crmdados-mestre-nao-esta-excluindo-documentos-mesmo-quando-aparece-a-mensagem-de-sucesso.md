---
title: 'A interface do usuário do CRM/dados mestre não está excluindo documentos, mesmo quando aparece a mensagem de sucesso'
slug: a-interface-do-usuario-do-crmdados-mestre-nao-esta-excluindo-documentos-mesmo-quando-aparece-a-mensagem-de-sucesso
status: PUBLISHED
createdAt: 2022-11-16T21:51:40.000Z
updatedAt: 2023-03-27T20:10:13.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: the-crmmasterdata-ui-is-not-deleting-documents-even-with-the-success-message
locale: pt
kiStatus: No Fix
internalReference: 699374
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface do CRM não está excluindo documentos, embora a mensagem de sucesso seja exibida.

## Simulação

- Acesse o sistema da aplicação (.vtexcrm.com.br)
- Selecione uma visualização, como Clientes, e clique em ![](https://vtexhelp.zendesk.com/attachments/token/l2EMLx8PT4mDFNKGPAtZQVGxt/?name=image.png)
- Em seguida, o sistema exibirá os documentos pertencentes aos dados da entidade selecionada
- Selecione um documento e clique no botão de exclusão ![](https://vtexhelp.zendesk.com/attachments/token/ipkMJC5WWN1LRfeRAkxr7RUCG/?name=image.png)
- Em seguida, o sistema solicitará a confirmação da ação
- Após a confirmação, a mensagem "_Registro excluído com sucesso!_" é exibida
- Mas o documento ainda aparece na lista quando você clica no botão OK

## Workaround

Executar essa ação por meio da API DELETE Document:

- v1: https://developers.vtex.com/docs/api-reference/masterdata-api#delete-/api/dataentities/-acronym-/documents/-id-
- v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#delete-/api/dataentities/-dataEntityName-/documents/-id-