---
title: 'Erro na importação do produto com arquivo não modificado'
slug: erro-na-importacao-do-produto-com-arquivo-nao-modificado
status: PUBLISHED
createdAt: 2026-05-04T15:02:19.000Z
updatedAt: 2026-09-22T20:20:23.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: product-import-error-with-unmodified-file
locale: pt
kiStatus: Backlog
internalReference: 1400586
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos um problema com o módulo de Importação/Exportação, que consiste basicamente em arquivos não modificados da Exportação entrarem em conflito com a Importação.

## Simulação

Faça o download de um arquivo no novo módulo de Exportação, por exemplo, "Produtos e SKUs", sem salvar nenhuma alteração no arquivo Excel. Em seguida, tente importar o mesmo arquivo usando o módulo de Importação, com a mesma opção "Produtos e SKUs". Isso resultará em um erro, devido ao conflito de formato entre o arquivo exportado e o importado. No entanto, qualquer tentativa de salvar as alterações no arquivo Excel resolverá o problema.

## Workaround

Faça o download do arquivo Excel, aplique as alterações e salve. Dessa forma, a Importação aceitará o arquivo.