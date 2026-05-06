---
title: 'As opções de parcelamento não são atualizadas automaticamente na PDP/PLP'
slug: as-opcoes-de-parcelamento-nao-sao-atualizadas-automaticamente-na-pdpplp
status: PUBLISHED
createdAt: 2024-02-23T12:31:14.000Z
updatedAt: 2024-02-23T12:31:14.000Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: installment-options-not-updating-automatically-on-pdpplp
locale: pt
kiStatus: Backlog
internalReference: 987467
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando uma conta altera as opções de parcelamento de um produto, mesmo que o produto esteja indexado corretamente, as opções de parcelamento não são atualizadas na PLP nem na PDP (às vezes em ambas).

## Simulação

1. Crie uma opção de parcelamento e verifique se ela é refletida corretamente no PDP/PLP
2. Atualize essa mesma opção de parcelamento
3. Verifique se nem todos os PDPs e PLPs foram atualizados com as novas informações corretas.

## Workaround

Reindexe os produtos afetados novamente.