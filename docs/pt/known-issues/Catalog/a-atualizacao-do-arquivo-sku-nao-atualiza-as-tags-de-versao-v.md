---
title: 'A atualização do arquivo SKU não atualiza as tags de versão ?v'
slug: a-atualizacao-do-arquivo-sku-nao-atualiza-as-tags-de-versao-v
status: PUBLISHED
createdAt: 2023-06-29T14:37:41.000Z
updatedAt: 2023-06-29T14:37:41.000Z
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

Atualmente, quando um arquivo de imagem de SKU é atualizado via API para ocupar a mesma posição que o anterior, sua tag de versão (?v=) na página do produto não é atualizada corretamente.

## Simulação

- Para um SKU que já contenha arquivos, tente atualizar uma imagem por uma nova.
- Para uma interpretação correta da alteração do arquivo pelo usuário e/ou pelos sistemas, a tag de versão (?v=) sob a imagem href no HTML da página do produto deve ser atualizada.
- No entanto, isso não ocorre ao usar esta API para realizar tais atualizações.

## Workaround

Excluir todos os arquivos do SKU e reinseri-los do zero força a atualização.

OU

A exclusão por um indexador força a atualização.