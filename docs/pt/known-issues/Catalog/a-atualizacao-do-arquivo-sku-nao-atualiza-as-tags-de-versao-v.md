---
title: 'A atualização do arquivo SKU não atualiza as tags de versão ?v'
slug: a-atualizacao-do-arquivo-sku-nao-atualiza-as-tags-de-versao-v
status: PUBLISHED
createdAt: 2025-11-14T19:14:19.274Z
updatedAt: 2025-11-14T19:14:19.274Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-file-update-does-not-update-v-version-tags
locale: pt
kiStatus: Backlog
internalReference: 852869
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Atualmente, quando um arquivo de imagem SKU é atualizado por meio da API para ficar na mesma posição de um arquivo anterior, sua tag de versão (?v=) na página do produto não é atualizada corretamente.
## Simulação




- Para um sku que já tenha arquivos, tente atualizar uma imagem para uma nova.
- Para uma interpretação adequada do arquivo que está sendo alterado para o usuário e/ou sistemas, a tag de versão (?v=) sob a imagem href no HTML da página do produto deve ser atualizada.
- No entanto, isso não acontece quando se usa essa API para realizar essas atualizações.

## Workaround


Excluir todos os arquivos SKU e reinseri-los do zero força a atualização.

OU

A exclusão de um indexador força a atualização.