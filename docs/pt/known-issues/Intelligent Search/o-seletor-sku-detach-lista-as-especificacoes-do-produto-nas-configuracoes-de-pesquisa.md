---
title: 'O seletor SKU Detach lista as especificações do produto nas configurações de pesquisa'
slug: o-seletor-sku-detach-lista-as-especificacoes-do-produto-nas-configuracoes-de-pesquisa
status: PUBLISHED
createdAt: 2025-12-10T18:20:11.087Z
updatedAt: 2025-12-10T18:20:11.087Z
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


O seletor para **Usar especificações de SKU para exibir produtos individuais nos resultados da pesquisa** está listando especificações de produtos além das especificações de SKU em **Admin > Pesquisa inteligente > Configurações de pesquisa**.

O impacto é o risco de configuração incorreta se uma **especificação de produto** for selecionada, causando um comportamento inconsistente ao tentar exibir SKUs individuais com base em uma especificação.
## Simulação



1. Navegue até **Admin > Pesquisa inteligente > Configurações de pesquisa**.
2. No campo **Use SKU specifications to display individual products in search results**, abra o menu suspenso/lista de especificações da opção.
3. Observe que a lista inclui tanto **especificações de SKU** quanto **especificações de produto**.


## Workaround


Se uma especificação de produto for selecionada, remova a especificação selecionada do campo **Use SKU specifications to display individual products in search results**.



