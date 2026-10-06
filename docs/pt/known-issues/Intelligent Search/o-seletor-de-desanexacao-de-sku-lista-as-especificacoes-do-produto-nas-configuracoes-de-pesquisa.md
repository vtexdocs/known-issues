---
title: 'O seletor de desanexação de SKU lista as especificações do produto nas Configurações de pesquisa.'
slug: o-seletor-de-desanexacao-de-sku-lista-as-especificacoes-do-produto-nas-configuracoes-de-pesquisa
status: PUBLISHED
createdAt: 2025-12-10T21:19:33.000Z
updatedAt: 2026-10-06T17:20:20.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: sku-detach-selector-lists-product-specifications-in-the-search-settings
locale: pt
kiStatus: Backlog
internalReference: 1338042
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O seletor para **Usar especificações de SKU para exibir produtos individuais nos resultados da pesquisa** está listando especificações de produto além das especificações de SKU em **Administração > Pesquisa Inteligente > Configurações de Pesquisa**.

O impacto disso é o risco de configuração incorreta se uma **especificação de produto** for selecionada, causando comportamento inconsistente ao tentar exibir SKUs individuais com base em uma especificação.

## Simulação

1. Navegue até **Administração > Pesquisa Inteligente > Configurações de Pesquisa**.

2. No campo **Usar especificações de SKU para exibir produtos individuais nos resultados da pesquisa**, abra a lista suspensa/lista de especificações da opção.

3. Observe que a lista inclui tanto **especificações de SKU** quanto **especificações de produto**.

## Workaround

Se uma especificação de produto estiver selecionada, remova a especificação selecionada do campo **Usar especificações de SKU para exibir produtos individuais nos resultados da pesquisa**.