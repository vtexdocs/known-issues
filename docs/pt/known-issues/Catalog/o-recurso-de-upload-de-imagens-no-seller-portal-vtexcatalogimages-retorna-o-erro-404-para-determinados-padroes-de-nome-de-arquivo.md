---
title: 'O recurso de upload de imagens no Seller Portal (vtex.catalog-images) retorna o erro 404 para determinados padrões de nome de arquivo.'
slug: o-recurso-de-upload-de-imagens-no-seller-portal-vtexcatalogimages-retorna-o-erro-404-para-determinados-padroes-de-nome-de-arquivo
status: PUBLISHED
createdAt: 2026-07-23T21:45:00.000Z
updatedAt: 2026-07-23T21:45:00.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: seller-portal-image-upload-vtexcatalogimages-returns-404-for-certain-filename-patterns
locale: pt
kiStatus: Backlog
internalReference: 1438867
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao fazer o upload de imagens pelo aplicativo `vtex.catalog-images` (usado pelo Seller Portal/fluxos de ingestão de imagens do catálogo), alguns padrões de nome de arquivo fazem com que o aplicativo gere uma URL `{account}.vtexassets.com` que retorna um erro 404, mesmo que a própria solicitação de upload retorne um erro 200 com uma URL aparentemente válida. Isso foi relatado pelo menos 3 vezes com diferentes variações do mesmo sintoma subjacente:

- Nomes de arquivo contendo 3 ou mais sublinhados consecutivos (por exemplo, `hello___world.jpeg`) entram em conflito com a lógica interna de separação por hash do aplicativo, produzindo um slug inválido.

- Nomes de arquivo sem extensão ou imagens provenientes de URLs externas sem extensão também produzem URLs irresolúveis.

## Simulação

- Chamada `POST https://app.io.vtex.com/vtex.catalog-images/v0/{account}/master/images/save/{filename}` com um nome de arquivo contendo `___` (3 ou mais sublinhados consecutivos), por exemplo, `hello___world.jpeg`.

- A resposta retorna 200 com um `fullUrl` como `https://{account}.vtexassets.com/assets/vtex.catalog-images/products/hello___world___{hash}.jpeg`.

- Acesso direto a esse `fullUrl` → retorna 404, mesmo que o mesmo fluxo com um nome de arquivo sem sublinhados repetidos (por exemplo, `hello_world.jpeg`) seja resolvido corretamente.

## Workaround

Evite nomes de arquivo com 3 ou mais sublinhados consecutivos e sempre inclua uma extensão de arquivo válida antes de fazer o upload através de `vtex.catalog-images`.