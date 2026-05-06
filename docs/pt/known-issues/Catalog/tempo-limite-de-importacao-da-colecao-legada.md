---
title: 'Tempo limite de importação da coleção legada'
slug: tempo-limite-de-importacao-da-colecao-legada
status: PUBLISHED
createdAt: 2021-12-08T13:58:45.000Z
updatedAt: 2022-12-20T16:30:31.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-import-timeout
locale: pt
kiStatus: Backlog
internalReference: 483785
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, quando um usuário tenta importar dados por meio do botão de inserção em massa de SKUs, se a planilha utilizada for muito extensa, o processo pode falhar.

 ![](https://vtexhelp.zendesk.com/attachments/token/9TSm4inXTV8cFvuiHwLP9uMpb/?name=inline-929450477.png)

## Simulação

1) Vá para CMS --> Coleções

2) Crie uma nova coleção e um grupo de inclusão

3) Use o botão “Inserção em massa de SKUs” para importar dados e selecione uma planilha com, por exemplo, 65.000 SKUs.

4) Uma mensagem de carregamento será exibida por cerca de 50 segundos

 ![](https://vtexhelp.zendesk.com/attachments/token/jd4fu2dmlX2d3WQUWxycsGOIg/?name=inline-243279848.png)

E então o processo acabará falhando.

## Workaround

1) Use as caixas de seleção laterais para selecionar em massa Marcas e/ou Categorias

2) Importe gradualmente usando planilhas menores