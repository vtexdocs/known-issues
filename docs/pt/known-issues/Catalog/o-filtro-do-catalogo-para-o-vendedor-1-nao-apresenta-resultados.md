---
title: 'O filtro do catálogo para o vendedor = 1 não apresenta resultados'
slug: o-filtro-do-catalogo-para-o-vendedor-1-nao-apresenta-resultados
status: PUBLISHED
createdAt: 2023-05-03T14:37:26.000Z
updatedAt: 2023-05-03T14:37:26.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filter-for-seller-1-brings-empty-results
locale: pt
kiStatus: Backlog
internalReference: 801538
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, ao filtrar exclusivamente pelo vendedor principal nos menus do Catálogo, nenhum resultado é exibido. Isso ocorre porque esse filtro está procurando incorretamente por um vendedor específico, quando, na verdade, o vendedor = 1 (o vendedor principal da conta) é o próprio marketplace.

## Simulação

1. Acesse qualquer menu do Catálogo, como Importar/Exportar
2. Filtre pelo vendedor principal da conta:

 ![](https://vtexhelp.zendesk.com/attachments/token/6dygVHVlzTTdqYD3jOyV10DaZ/?name=image.png)
3. Nenhum resultado será exibido

## Workaround

Usando uma política comercial na qual apenas o vendedor 1 está presente, filtre por essa política comercial específica e, consequentemente, você estará filtrando pelo vendedor principal.