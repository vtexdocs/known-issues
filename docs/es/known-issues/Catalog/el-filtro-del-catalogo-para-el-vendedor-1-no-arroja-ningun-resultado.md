---
title: 'El filtro del catálogo para el vendedor = 1 no arroja ningún resultado'
slug: el-filtro-del-catalogo-para-el-vendedor-1-no-arroja-ningun-resultado
status: PUBLISHED
createdAt: 2023-05-03T14:37:26.000Z
updatedAt: 2023-05-03T14:37:26.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filter-for-seller-1-brings-empty-results
locale: es
kiStatus: Backlog
internalReference: 801538
---

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

## Sumario

Actualmente, al filtrar exclusivamente por el vendedor principal en los menús del Catálogo, no se muestran resultados. Esto ocurre porque este filtro busca erróneamente a un vendedor específico, cuando en realidad el vendedor = 1 (el vendedor principal de la cuenta) es el propio mercado.

## Simulación

1. Ve a cualquier menú del catálogo, como Importar/Exportar
2. Filtra por el vendedor principal de la cuenta:

 ![](https://vtexhelp.zendesk.com/attachments/token/6dygVHVlzTTdqYD3jOyV10DaZ/?name=image.png)
3. No se mostrarán resultados

## Workaround

Utilizando una política comercial en la que solo esté presente el vendedor 1, filtra por esta política comercial concreta y, de este modo, estarás filtrando por el vendedor principal.