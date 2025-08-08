---
title: 'Timeout da lista de marcas de coleção no Admin'
id: 4de4lqAIhr9mU77EPAbvq1
status: PUBLISHED
createdAt: 2022-08-17T15:58:26.950Z
updatedAt: 2024-07-01T18:48:37.335Z
publishedAt: 2024-07-01T18:48:37.335Z
firstPublishedAt: 2022-08-17T15:58:27.573Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: admin-collection-brand-list-timeout
locale: pt
kiStatus: No Fix
internalReference: 639905
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, para lojas que têm mais de 4000 marcas em seu catálogo, a seguinte listagem de marcas não carrega nenhuma marca quando se tenta criar uma nova coleção:

 ![](https://raw.githubusercontent.com/vtexdocs/known-issues/refs/heads/main/docs/pt/known-issues/Catalog/timeout-da-lista-de-marcas-de-colecao-no-admin_1.png)

Isto ocorre devido a um timeout (você pode ver que há um longo tempo de carga e depois ele exibe como "sem marcas").






## Simulação


1 - Ir para o novo módulo de coleções administrativas em uma loja com mais de 4000 marcas. ex: mystore.vtex.com/admin/collections.

2- Clique no botão + criar coleções

3 - um spinner será mostrado por ~50s e depois uma mensagem de "sem marcas", o que é incorreto.





## Workaround


n/d

