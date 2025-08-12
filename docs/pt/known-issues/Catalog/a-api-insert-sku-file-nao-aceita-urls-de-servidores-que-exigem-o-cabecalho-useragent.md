---
title: A API Insert SKU File não aceita URLs de servidores que exigem o cabeçalho "User-Agent"
slug: a-api-insert-sku-file-nao-aceita-urls-de-servidores-que-exigem-o-cabecalho-useragent
status: PUBLISHED
createdAt: 2025-08-12T18:56:25.129Z
updatedAt: 2025-08-12T18:56:25.129Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
locale: pt
kiStatus: Backlog
internalReference: 1069222
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O **User-Agent** é uma cadeia de texto que um navegador da Web ou outro cliente envia a um servidor da Web em um cabeçalho de solicitação HTTP para se identificar. Essa cadeia contém informações sobre o tipo de navegador, o sistema operacional e, às vezes, detalhes adicionais como a versão do navegador e o mecanismo de renderização usado.

Isso geralmente é solicitado como medida de segurança por servidores, como os que hospedam imagens, que podem ser passadas via URL no corpo da solicitação da API de inserção de arquivo SKU.

Esse tipo de autenticação, no entanto, não é enviado atualmente pelo servidor VTEX ao reunir as imagens para uma SKU, portanto, servidores de terceiros podem bloquear a solicitação.

## Simulação



1. Usando a API de arquivo SKU (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file) Create ou Update (métodos de gravação), passando um URL que tem requisitos de agente de usuário do lado do servidor para buscar dados
2. Uma resposta do tipo HTTP 4xx será exibida, seja uma resposta genérica 400 ou uma resposta mais específica 403, dependendo do tipo de resposta implementada.

Também pode ser possível ver isso acontecendo por meio de ferramentas como o Postman, enviando um cabeçalho "User-Agent" vazio na solicitação.
## Workaround


Opte pelo upload de arquivos por meio de planilha, dados de formulário (usando as APIs) ou desative os requisitos de agente de usuário no lado do servidor.



