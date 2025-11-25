---
title: 'As inconsistências da Pesquisa de catálogo podem não retornar produtos devido a um problema de indexação'
slug: as-inconsistencias-da-pesquisa-de-catalogo-podem-nao-retornar-produtos-devido-a-um-problema-de-indexacao
status: PUBLISHED
createdAt: 2025-11-25T17:01:01.513Z
updatedAt: 2025-11-25T17:01:01.513Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-search-inconsistencies-may-not-return-products-due-to-an-indexing-issue
locale: pt
kiStatus: Backlog
internalReference: 1330325
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Intermitentemente, os produtos podem não ser atualizados corretamente no CatalogSearch durante o processo de indexação. Como efeito colateral, o produto não aparecerá no Catalog Search, afetando as lojas do Store Framework ou o uso da API. Outro efeito colateral inclui o fato de o CatalogSearch retornar menos itens do que o solicitado (de acordo com os parâmetros de paginação). Isso também afeta as lojas do Portal (CMS herdado). Para fins de contexto, as lojas do Store Framework dependem dessa API para o PDP e, nesses casos, o PDP não pode ser carregado, enquanto um PLP que usa a Intelligent Search ainda pode exibir o item.
## Simulação


Acesse o PDP de uma SKU afetada em que um 404 é retornado; examine os registros de indexação no Catalog e verifique a sessão GenerateAndSaveIndexDocuments. Se houver uma mensagem "skipping commit", o documento interno não está indexado corretamente
## Workaround


Edite as informações do produto para acionar uma indexação com o objetivo de atualizar as informações registradas no banco de dados CatalogSearch. Em grande escala, execute uma reindexação completa na conta.



