---
title: 'Um valor válido da especificação do produto pode ser deixado em branco no painel de administração do catálogo'
slug: um-valor-valido-da-especificacao-do-produto-pode-ser-deixado-em-branco-no-painel-de-administracao-do-catalogo
status: PUBLISHED
createdAt: 2024-01-16T00:27:58.000Z
updatedAt: 2024-01-16T00:27:58.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-valid-product-specification-value-can-be-returned-blank-in-the-catalog-admin
locale: pt
kiStatus: Backlog
internalReference: 966499
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Espera-se que o painel de administração de especificações de produtos sempre exiba os valores corretos para as especificações de um produto. No entanto, isso nem sempre ocorre.
O valor da especificação pode ser exibido em branco no painel de administração, como se não houvesse nenhum valor associado.
Além do problema de visualização, se o usuário salvar o produto usando o administrador de produtos, o valor em branco da especificação substituirá o valor original

## Simulação

Abra um formulário de especificações do produto e compare o valor exibido no administrador com o valor retornado pela API.

## Workaround

Gerencie as especificações do produto via API