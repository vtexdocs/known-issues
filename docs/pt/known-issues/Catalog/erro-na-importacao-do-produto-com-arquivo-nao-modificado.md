---
title: 'Erro na importação do produto com arquivo não modificado'
slug: erro-na-importacao-do-produto-com-arquivo-nao-modificado
status: PUBLISHED
createdAt: 2026-05-04T12:07:01.712Z
updatedAt: 2026-05-04T12:07:01.712Z
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

Atualmente, estamos enfrentando um problema com o módulo de Importação/Exportação, que consiste basicamente em um conflito entre arquivos não modificados da Exportação e da Importação.

## Simulação

Baixe um arquivo no novo módulo de Exportação, por exemplo, “Produtos e SKUs”. Sem salvar nenhuma alteração no arquivo do Excel, tente importar o mesmo arquivo usando o módulo de Importação com a mesma opção “Produtos e SKUs”. Isso resultará em um erro, pois o formato da exportação entra em conflito com a importação. No entanto, qualquer tentativa de salvar uma alteração no arquivo do Excel resolverá o problema.

## Workaround

Baixe o arquivo do Excel, aplique as alterações e salve; ao fazer isso, a importação aceitará o arquivo.