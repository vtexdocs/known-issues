---
title: 'Tempo limite para cobranças'
slug: tempo-limite-para-cobrancas
status: PUBLISHED
createdAt: 2021-09-21T16:52:29.000Z
updatedAt: 2025-10-02T22:53:23.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: collections-timeout
locale: pt
kiStatus: Fixed
internalReference: 434026
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Frequentemente, ao tentar salvar dados de um grupo de coleções usando o aplicativo de coleções, no caminho /admin/a, e ao tentar clicar em “Salvar Grupo”, o usuário, em casos de catálogos extensos (grande quantidade de categorias, marcas e produtos), receberá uma mensagem de erro de tempo limite e não conseguirá salvar suas alterações.

Isso também pode ocorrer no novo módulo de coleções.

## Simulação

1) Acesse o aplicativo da interface do usuário do CMS usando uma loja que possua uma base de catálogo extensa, por exemplo, >10.000 produtos.
2) Acesse “Agrupamentos de Produtos (Coleções)” e selecione “_novo grupo_”
3)  Crie um grupo e, em seguida, marque algumas caixas de seleção no formulário
4) Tente salvar essas alterações
5) Se a solicitação demorar mais de 50 segundos para ser salva, o que costuma ocorrer em contas com grande volume de dados, a solicitação será interrompida e os dados não serão salvos.

## Workaround

Usando nossos endpoints da API de coleções: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, no entanto, é importante observar que, em alguns casos, quando há uma grande quantidade de dados sendo atualizados, o tempo limite ainda pode ocorrer via API.