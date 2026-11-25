---
title: 'A API Insert SKU File não aceita URLs de servidores que exigem o cabeçalho "User-Agent".'
slug: a-api-insert-sku-file-nao-aceita-urls-de-servidores-que-exigem-o-cabecalho-useragent
status: PUBLISHED
createdAt: 2024-07-22T22:48:57.000Z
updatedAt: 2026-11-25T19:29:01.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: insert-sku-file-api-doesnt-accept-urls-from-servers-that-require-useragent-header
locale: pt
kiStatus: Fixed
internalReference: 1069222
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O **User-Agent** é uma sequência de texto que um navegador web ou outro cliente envia a um servidor web no cabeçalho de uma requisição HTTP para se identificar. Essa sequência contém informações sobre o tipo de navegador, sistema operacional e, às vezes, detalhes adicionais como a versão do navegador e o mecanismo de renderização utilizado.

Isso geralmente é solicitado como medida de segurança por servidores, como aqueles que hospedam imagens, e pode ser passado via URL no corpo da requisição da API de inserção de arquivo SKU.

No entanto, esse tipo de autenticação não é enviado atualmente pelo servidor VTEX ao coletar as imagens para um SKU, portanto, servidores de terceiros podem bloquear a requisição.

## Simulação

1. Usando a API de arquivo SKU, seja no método Create ou Update (write) (https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file), passando uma URL que possui requisitos de user-agent no servidor para buscar dados.
2. Uma resposta HTTP do tipo 4xx será exibida, seja um 400 genérico ou um 403 mais específico, dependendo do tipo de resposta implementado.

Também é possível observar esse comportamento em ferramentas como o Postman, enviando um cabeçalho "User-Agent" vazio na requisição.

## Workaround

Opte pelo upload do arquivo via planilha, formulário (usando as APIs) ou desabilite os requisitos de user-agent no servidor.