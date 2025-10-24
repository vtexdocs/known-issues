---
title: 'Tempo limite das coleções'
slug: tempo-limite-das-colecoes
status: PUBLISHED
createdAt: 2025-10-02T19:53:48.379Z
updatedAt: 2025-10-02T19:53:48.379Z
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


Muitas vezes, ao tentar salvar os dados de um grupo de coleções usando o aplicativo de coleções, no caminho /admin/a, e tentar salvar o grupo, o usuário, em casos de catálogos grandes (grande quantidade de categorias, marcas, produtos), recebe uma mensagem de erro de tempo limite e não consegue salvar as alterações.

Isso também pode acontecer com o novo módulo de coleções.
## Simulação


1) Acesse o aplicativo CMS UI usando uma loja que tenha uma base de catálogo grande, por exemplo, >10000 produtos.
2) Vá para "Product Clusters (Collections)" (Grupos de produtos (coleções)) e selecione "_new group_" (novo grupo)
3) Crie um grupo e, em seguida, marque algumas caixas de seleção no formulário
4) Tente salvar essas alterações
5) Se a solicitação demorar mais de 50 segundos para ser salva, o que geralmente acontece em contas com uma grande quantidade de dados, a solicitação será interrompida e os dados não serão salvos
## Workaround


Usando nossos pontos de extremidade da API de coleções: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/collection?endpoint=post-/api/catalog/pvt/collection, no entanto, é importante observar que, em alguns casos, quando há uma grande quantidade de dados sendo atualizados, o tempo limite ainda pode ocorrer por meio da API.


