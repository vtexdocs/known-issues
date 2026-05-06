---
title: 'Códigos de produto do mesmo item estão sendo criados separadamente em contas com a opção “Aprovação automática” ativada'
slug: codigos-de-produto-do-mesmo-item-estao-sendo-criados-separadamente-em-contas-com-a-opcao-aprovacao-automatica-ativada
status: PUBLISHED
createdAt: 2024-01-09T12:39:02.000Z
updatedAt: 2024-07-22T19:31:03.000Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: skus-from-the-same-product-being-created-separately-on-accounts-with-autoapprove-flag-enabled
locale: pt
kiStatus: Fixed
internalReference: 962986
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O vendedor envia um lote com SKUs do mesmo produto (todas as variações possíveis do produto).

Em vez de serem criadas como um único produto com suas variações, todas as SKUs estão sendo criadas separadamente.

Esse comportamento ocorre porque a conta do marketplace tem a opção “Autoaprovação” ativada e o vendedor está enviando todas as SKUs de uma só vez.

Normalmente, o sistema possui um bloqueio, por nome do produto, para evitar esse tipo de situação, já que o Matcher possui mais de uma fila processando os SKUs. Mas esse bloqueio não está implementado no fluxo de trabalho de Autoaprovação.

## Simulação

1. Ative o sinalizador de Autoaprovação no Marketplace;
2. O vendedor envia um lote de produtos e seus SKUs (variações) de uma só vez;
3. O primeiro SKU do produto é criado corretamente, mas os demais são criados separadamente.

## Workaround

Para evitar essa situação, há duas maneiras possíveis.

1. O vendedor envia os SKUs gradualmente dentro de um intervalo de tempo;
2. Desative o sinalizador de Autoaprovação no Marketplace.