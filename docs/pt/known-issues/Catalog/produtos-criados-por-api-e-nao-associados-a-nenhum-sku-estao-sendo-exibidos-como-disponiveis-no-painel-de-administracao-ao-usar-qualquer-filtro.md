---
title: 'Produtos criados por API e não associados a nenhum SKU estão sendo exibidos como disponíveis no painel de administração ao usar qualquer filtro.'
slug: produtos-criados-por-api-e-nao-associados-a-nenhum-sku-estao-sendo-exibidos-como-disponiveis-no-painel-de-administracao-ao-usar-qualquer-filtro
status: PUBLISHED
createdAt: 2021-12-22T20:00:29.000Z
updatedAt: 2026-09-24T14:40:21.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: products-created-by-api-and-not-associated-with-any-sku-are-being-shown-as-available-on-the-admin-when-using-any-filter
locale: pt
kiStatus: Fixed
internalReference: 492648
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Produtos criados pela API e não associados a nenhum SKU são exibidos como disponíveis no painel administrativo ao usar qualquer filtro, mas não são exibidos no painel administrativo se pesquisarmos diretamente pelo ID do produto.

## Simulação

- Criar um produto usando a API do Catálogo: `/api/catalog/pvt/product?an=`;

- Pesquisar este produto no painel administrativo usando o filtro de ID do produto: myvtex.com/admin/Site/Produto.aspx. O produto não será retornado;

- Pesquisar este produto no painel administrativo usando qualquer outro filtro, por exemplo, o filtro de Categoria. O produto será exibido como disponível, mas não está disponível.

![](https://vtexhelp.zendesk.com/attachments/token/yclXUD1jCWcb4efGFE18MigeN/?name=inline1508453060.png)

Esses novos produtos sem SKU não estão disponíveis na loja, portanto o problema está apenas na interface do usuário.

## Workaround

Não há solução alternativa.