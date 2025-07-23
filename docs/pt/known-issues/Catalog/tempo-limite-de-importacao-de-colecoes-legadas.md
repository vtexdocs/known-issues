---
title: 'Tempo Limite de Importação de Coleções Legadas'
id: 3sNnbMg00W11l46LPr130g
status: PUBLISHED
createdAt: 2022-02-25T12:21:12.605Z
updatedAt: 2022-12-20T16:30:55.153Z
publishedAt: 2022-12-20T16:30:55.153Z
firstPublishedAt: 2022-02-25T12:21:12.913Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: legacy-collection-import-timeout
locale: pt
kiStatus: Backlog
internalReference: 483785
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, quando um usuário tenta importar dados através do botão de inserção de dados a granel, se a folha a ser utilizada for muito extensa, o processo pode falhar.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/tempo-limite-de-importacao-de-colecoes-legadas_1.png)







##

## Simulação


1) Ir para CMS --> Cobranças

2) Criar uma nova coleção e uma inclusão de grupo

3) Use o botão "Bulk Insert SKUs" para importar dados e selecione uma folha com, por exemplo, 65000 skus.

4) Uma mensagem de carga será mostrada por ~50s

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/tempo-limite-de-importacao-de-colecoes-legadas_2.png)

E então o processo acabará por falhar.







##

## Workaround


1) Utilize as caixas de seleção lateral para selecionar as Marcas e/ou Categorias de forma massiva

2) Importação gradual utilizando folhas de tamanho menor

