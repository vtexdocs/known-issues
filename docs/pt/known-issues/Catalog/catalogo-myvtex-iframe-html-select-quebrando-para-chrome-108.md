---
title: 'Catálogo Myvtex Iframe HTML Select Quebrando para Chrome 108'
slug: catalogo-myvtex-iframe-html-select-quebrando-para-chrome-108
status: PUBLISHED
createdAt: 2022-12-06T21:58:05.000Z
updatedAt: 2026-09-23T17:42:02.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-myvtex-iframe-html-select-breaking-for-chrome-108
locale: pt
kiStatus: Backlog
internalReference: 711637
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Este é um efeito colateral de uma atualização do Chrome que foi agendada para correção pela equipe do Google na próxima semana, 12/12/2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

O efeito sentido pelo administrador do VTEX é que os usuários do Chrome v108 estão tendo problemas para selecionar itens em menus suspensos. Por exemplo, na guia de configuração de SKU, ao tentar selecionar um valor no menu suspenso, nenhuma ação é gerada (a lista completa de valores possíveis deveria ser exibida):

![](https://vtexhelp.zendesk.com/attachments/token/JvqH3KkI0sgflVmKG3IOCfHa1/?name=image.png)

## Simulação

Usando a versão mais recente do Chrome, v 108.0.5359.95, tente acessar um menu suspenso usando a versão administrativa do myvtex.

## Workaround

Existem diversas soluções alternativas, como:

1) Usar outros navegadores
2) Acessar a mesma interface de usuário pelo vtexcommercestable.com.br
3) Alterar o valor via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification