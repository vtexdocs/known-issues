---
title: 'A API "Obter todas as sugestões de SKU" não mantém a mesma ordem dos SKUs ao alterar os limites'
slug: a-api-obter-todas-as-sugestoes-de-sku-nao-mantem-a-mesma-ordem-dos-skus-ao-alterar-os-limites
status: PUBLISHED
createdAt: 2021-05-11T22:01:47.000Z
updatedAt: 2022-12-05T17:49:32.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: get-all-sku-suggestions-api-doesnt-keep-same-sku-order-when-changing-limits
locale: pt
kiStatus: No Fix
internalReference: 367187
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A API “Obter todas as sugestões de SKU” tem um limite de 20 SKUs por página.

Documentação da API: https://developers.vtex.com/vtex-rest-api/reference/get-suggestions#getsuggestions

No dia a dia, isso atrapalha o funcionamento do Marketplace, pois toda vez que o Marketplace faz uma solicitação alterando os limites para obter os próximos 20 SKUs, a ordem dos SKUs também muda, dando a impressão de que há SKUs duplicados.

Ao solicitar essa API usando parâmetros de consulta como "sellerId", esse comportamento ocorre. Ao solicitar a API sem parâmetros de consulta, é possível usar o recurso "Next" para evitar esse problema.

## Simulação

1. Solicite a API "Get all SKU suggestions" usando o parâmetro de consulta: "sellerId";
2. Altere os limites nos parâmetros "**_from"** e "**_to"** para obter os próximos SKUs;
3. Verifique se há algum SKU nesta página que já tenha aparecido nas páginas anteriores.

## Workaround

Para evitar essa situação, use a planilha de exportação na interface do usuário ou use a API sem parâmetros.