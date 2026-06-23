---
title: 'A API de Inserção de Arquivos SKU pode gerar imagens duplicadas se falhar.'
slug: a-api-de-insercao-de-arquivos-sku-pode-gerar-imagens-duplicadas-se-falhar
status: PUBLISHED
createdAt: 2026-06-23T16:52:48.000Z
updatedAt: 2026-06-23T16:52:48.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-insert-file-api-may-generate-duplicate-images-if-it-fails
locale: pt
kiStatus: Backlog
internalReference: 1425160
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, a API INSERT SKU FILE é usada para inserir ou associar uma imagem a um SKU.

Se essa API falhar durante o processo devido a um erro de tempo limite, ela pode inserir a imagem com uma mensagem de erro incorreta.

A imagem não deve ser inserida nesses casos, pois isso pode levar sistemas/automações a adicionar o mesmo arquivo duas vezes.

## Simulação

O problema é difícil de simular, portanto, o seguinte é um cenário "mais provável" de como replicá-lo - lembrando que os timeouts normalmente não são replicáveis ​​em situações de teste.

1 - Usando a API de inserção de arquivo SKU https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file, tente adicionar um arquivo grande a um SKU (o tamanho aumenta a probabilidade de o problema ocorrer).

2 - Além disso, se você tiver uma conexão mais lenta, é mais provável que o problema ocorra. O uso simultâneo da API também contribui para o problema.

3 - Se a resposta de timeout 500 for gerada, verifique o SKU na interface do catálogo --> a imagem estará lá, apesar da resposta de erro.

4 - A imagem não deveria ter sido adicionada ou excluída após o erro de processamento parcial.

## Workaround

Adicione os arquivos pela interface do usuário/planilha OU verifique as condições que causam o tempo limite e tente evitá-las (por exemplo, use arquivos menores, espace mais as solicitações da API, use um GET após o INSERT nas automações da API para verificar se o arquivo foi realmente criado, etc.).