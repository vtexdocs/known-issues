---
title: 'O upload de arquivos não está funcionando em admin/portal/#/sites/default/code'
slug: o-upload-de-arquivos-nao-esta-funcionando-em-adminportalsitesdefaultcode
status: PUBLISHED
createdAt: 2023-09-12T13:37:21.000Z
updatedAt: 2023-09-12T13:37:21.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: upload-file-not-working-on-adminportalsitesdefaultcode
locale: pt
kiStatus: Backlog
internalReference: 897956
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar fazer upload de um novo arquivo em admin/portal/#/sites/default/code, nada acontece. Ao verificar o console no devTools, vemos uma mensagem de erro:
"eventTrackerService não está definido"

## Simulação

1. Acesse admin/portal/#/sites/default/code
2. Vá para Novo -> Carregar Arquivo -> selecione o arquivo que deseja importar -> clique em criar
 ![](https://vtexhelp.zendesk.com/attachments/token/4uSgPeUxG9xAOkTq1HUs8khX6/?name=image.png)
3. Verifique se nada acontece.

## Workaround

A solução alternativa é criar o arquivo diretamente nesta interface do usuário.
Vá para Novo -> Arquivo -> nomeie seu arquivo e clique em criar -> insira o código e clique em salvar.