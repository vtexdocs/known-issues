---
title: 'Website Binding com informações antigas do License Manager'
id: 1F8B0AD7IEGgmqWswAAkYe
status: PUBLISHED
createdAt: 2017-04-10T13:26:43.145Z
updatedAt: 2022-12-22T20:46:11.599Z
publishedAt: 2022-12-22T20:46:11.599Z
firstPublishedAt: 2017-04-10T13:43:26.648Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: License Manager
slugEN: website-binding-with-old-license-manager-details
locale: pt
kiStatus: Backlog
internalReference: null
---

## Sumário

A ferramenta __Website Binding__ é responsável por fazer a ponte entre o CMS (Portal) e as informações definidas no License Manager de um __storename__ específico.

Se, em algum momento, o lojista mudar as informações de uma __storename__  com novas informações, o Portal irá adicionar essas informações ao Website Binding existente, ao invés de sobrescrever.

Possíveis problemas com esse bug envolvem XML, que ao ser gerado usa o primeiro domínio encontrado no Binding. 

O exemplo da loja __Delacasa__ ilustra o bug:

Antes de se chamar __delacasa__ haviam criado o domínimo __decoramovel__, o Portal criou o Binding e posteriormente adicionou as novas informações do novo domínio no mesmo Binding.

As novas informações inseridas no LM:
![license-manager-delacasa](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Identity/website-binding-com-informacoes-antigas-do-license-manager_1.JPG) 

O dicionário do Website (mundinho) como ficou, deixando o comportamento em evidência:
![dicionario-delacasa](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Identity/website-binding-com-informacoes-antigas-do-license-manager_2.JPG) 

A parte de Webiste Binding que mostra o resultado:
![binding-delacasa](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Identity/website-binding-com-informacoes-antigas-do-license-manager_3.JPG)

## Simulação

Criar um __storename__ no License Manager e posteriormente editar as informações desse mesmo storename no License Manager.


## Workaround

O License Manager está salvando as informações no Banco de Dados de forma correta, ou seja, ele sobrescreve as informações. O Portal que ao puxar essas informações está atualizando de forma errada.

O melhor caminho seria criar um novo Website Binding para esse mesmo Website (mundinho).

O novo Binding irá carregar as informações novas.

Após criar o novo, fazer a mudança e posteriormente, se necessário, excluir o antigo.

Importante manter essa ordem, para evitar que o site saia do ar.
![2017-04-10 10 40 41-Index](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Identity/website-binding-com-informacoes-antigas-do-license-manager_4.png)

