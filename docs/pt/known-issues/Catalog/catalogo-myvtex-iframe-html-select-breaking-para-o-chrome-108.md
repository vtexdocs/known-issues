---
title: 'Catálogo Myvtex Iframe HTML Select Breaking para o Chrome 108'
slug: catalogo-myvtex-iframe-html-select-breaking-para-o-chrome-108
status: PUBLISHED
createdAt: 2022-12-06T18:58:05.000Z
updatedAt: 2022-12-06T18:58:21.000Z
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

Trata-se de um efeito colateral de uma atualização do Chrome para a qual a equipe do Google agendou uma correção para a próxima semana, 12/12/2022: https://bugs.chromium.org/p/chromium/issues/detail?id=1395079&q=dropdown&can=2

O efeito observado no painel de administração da VTEX é que usuários do Chrome v108 estão tendo dificuldade para selecionar itens em menus suspensos; por exemplo, na aba de configuração de SKU, ao tentar selecionar um valor no menu suspenso, nenhuma ação é gerada (a lista completa de valores possíveis deveria ser exibida):

 ![](https://vtexhelp.zendesk.com/attachments/token/JvqH3KkI0sgflVmKG3IOCfHa1/?name=image.png)

## Simulação

Usando a versão mais recente do Chrome, v 108.0.5359.95, tente acessar um menu suspenso usando a versão de administração do myvtex.

## Workaround

Há uma infinidade de soluções alternativas, tais como:

1) Usar outros navegadores
2) Acessar a mesma interface do usuário via vtexcommercestable.com.br
3) Alterar o valor via API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-specification