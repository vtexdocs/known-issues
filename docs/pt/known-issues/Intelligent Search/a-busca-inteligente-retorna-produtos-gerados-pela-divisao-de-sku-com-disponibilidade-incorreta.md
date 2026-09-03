---
title: 'A Busca Inteligente retorna produtos gerados pela divisão de SKU com disponibilidade incorreta.'
slug: a-busca-inteligente-retorna-produtos-gerados-pela-divisao-de-sku-com-disponibilidade-incorreta
status: PUBLISHED
createdAt: 2026-09-03T23:18:59.000Z
updatedAt: 2026-09-03T23:19:41.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-returns-products-generated-by-sku-split-with-incorrect-availability
locale: pt
kiStatus: Backlog
internalReference: 1456597
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma especificação de SKU é configurada como um atributo dividido, a Busca Inteligente gera um produto derivado para cada "SKU dividido". No entanto, os dados de disponibilidade indexados para esses produtos derivados não são específicos para o SKU dividido individual, mas sim agregam a disponibilidade de todos os SKUs que compartilham esse saldo de estoque, consolidando-a a partir do saldo de estoque do produto original.

Como resultado, um produto gerado por divisão cujo SKU está realmente indisponível (estoque zero confirmado no checkout) ainda pode ser retornado pela consulta de busca principal com availableQuantity: 0, em vez de ser tratado corretamente como indisponível/oculto, porque a disponibilidade indexada não reflete o estoque real daquele SKU específico.

Esse problema ocorre exclusivamente em cenários onde a regionalização está habilitada, já que o campo de disponibilidade afetado só entra em jogo quando o estoque é avaliado por vendedor/região, e não por meio de um único valor de disponibilidade para toda a loja.

## Simulação

- Configure uma especificação de SKU como um atributo dividido para um produto com vários SKUs compartilhando o mesmo saldo de estoque em uma loja com regionalização habilitada.

- Certifique-se de que pelo menos um SKU nesse saldo de estoque tenha estoque disponível e outro tenha estoque zero (indisponível confirmado no checkout).

- Indexe o catálogo com a Busca Inteligente habilitada.

- Busque o produto sem aplicar o atributo dividido como filtro.

- O produto gerado pela divisão correspondente ao SKU indisponível ainda é retornado, com `availableQuantity: 0`, em vez de ser excluído.

## Workaround

N/A