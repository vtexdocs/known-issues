---
title: 'Link para download da exportação de dados mestres indisponível'
slug: link-para-download-da-exportacao-de-dados-mestres-indisponivel
status: PUBLISHED
createdAt: 2022-07-08T13:50:18.000Z
updatedAt: 2023-07-28T17:13:59.000Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: masterdata-export-download-link-unavailable
locale: pt
kiStatus: Backlog
internalReference: 613864
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, para entidades de dados com vários campos, quando se tenta exportar uma planilha e baixá-la, seja por e-mail ou diretamente pela interface do usuário, o link de download não salva o arquivo no seu navegador.

## Simulação

1 - para uma entidade de dados na qual você tenha vários campos, tente exportar todos os seus campos ao mesmo tempo ou em vários registros

2 - o link de download não irá gerar um arquivo no seu navegador

 ![](https://vtexhelp.zendesk.com/attachments/token/nQdUqbk7BiOK5RcigZhNZR9Rr/?name=image.png)

## Workaround

**Clique com o botão direito do mouse no link de download e copie o link; em seguida, cole-o em outra guia e o download será iniciado ou** obtenha os dados via API https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search e/ou baixe os dados em várias planilhas menores