---
title: 'A função de pesquisa na Gestão de Estoque não está funcionando corretamente nas contas do portal do vendedor'
slug: a-funcao-de-pesquisa-na-gestao-de-estoque-nao-esta-funcionando-corretamente-nas-contas-do-portal-do-vendedor
status: PUBLISHED
createdAt: 2022-11-08T18:54:46.000Z
updatedAt: 2023-02-24T18:21:10.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: inventory-management-search-not-working-properly-on-seller-portal-accounts
locale: pt
kiStatus: Backlog
internalReference: 694254
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A pesquisa de gerenciamento de estoque não funciona como esperado nas contas do portal do vendedor. Isso ocorre porque esse tipo de conta utiliza uma versão diferente do catálogo.

O módulo de Logística utiliza, nesta interface, uma API do catalogV1.

No entanto, não temos um proxy do catálogo do portal do vendedor para essa API no catalogV1.

O impacto é que, às vezes, o resultado exibido no menu suspenso e na lista de resultados pode ser diferente se o cliente estiver pesquisando por um termo.

O problema não parece ocorrer ao usar IDs de produto e SKU.

Outro impacto é que, se o filtro for usado, o nome dos SKUs dos produtos não aparece na interface do usuário.

## Simulação

1. Pesquise um nome de produto específico;
2. Verifique se o menu suspenso exibe o produto;
3. Verifique se o resultado da pesquisa exibe o produto.

## Workaround

Pesquise pelo ID do produto e pelo ID do SKU.