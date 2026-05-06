---
title: 'A página “Coleções” na seção “Detalhes da organização” mostra apenas 20 coleções'
slug: a-pagina-colecoes-na-secao-detalhes-da-organizacao-mostra-apenas-20-colecoes
status: PUBLISHED
createdAt: 2023-08-31T20:02:23.000Z
updatedAt: 2024-04-23T21:35:17.000Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: collections-page-in-organization-details-shows-only-20-collections
locale: pt
kiStatus: Fixed
internalReference: 891511
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A página “Coleções” nos Detalhes da Organização exibe apenas 20 coleções, mesmo após alterar o número de linhas na parte inferior da página.

## Simulação

- Certifique-se de que há mais de 20 coleções ativas;
- No painel de administração, acesse a página “Organizações B2B” e selecione uma organização;
- Acesse a guia “Coleções”; você verá apenas 20 coleções disponíveis.

## Workaround

Se a coleção desejada não aparecer na guia Coleções, atribua-a usando o GraphQL IDE:

- Acesse o GraphQL IDE;
- Selecione o aplicativo `vtex.b2b-organizations-graphql`;
- Use a mutação abaixo e adicione os valores para `id`, `name`, `collections.id` e `collections.name`

 mutation { updateOrganization ( id: "" name: "" status: "active" collections: [{ id: "" name: "" }] ){ status message }}