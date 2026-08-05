---
title: 'A opção de importação "Substituir todos os preços fixos" não funciona para excluir todos os preços.'
slug: a-opcao-de-importacao-substituir-todos-os-precos-fixos-nao-funciona-para-excluir-todos-os-precos
status: PUBLISHED
createdAt: 2026-07-29T22:31:52.000Z
updatedAt: 2026-08-05T16:42:39.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: overwrite-all-fixed-prices-import-option-does-not-function-to-delete-all-prices
locale: pt
kiStatus: No Fix
internalReference: 1441146
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, na importação de preços, a opção "Substituir todos os preços fixos" não funciona para excluir todos os preços. É necessário informar pelo menos uma linha de preço fixo por SKU para que o sistema reconheça o SKU e exclua todos os outros preços, exceto o preço informado.

## Simulação

Tente importar uma tabela de preços fixos com a opção "Substituir preços fixos" ativada e apenas um SKU. Nenhum outro SKU terá seus preços excluídos com essa opção; portanto, ela não funciona como uma "funcionalidade de exclusão em massa de preços fixos".

Em vez disso, a função de exclusão funciona da seguinte forma:

![](https://vtexhelp.zendesk.com/attachments/token/Z6DNEJ5tdFTb3eLBfcEoBsnJq/?name=image.png)

## Workaround

Crie uma tabela de preços "descartável" para definir preços fixos fictícios. Dessa forma, uma linha por SKU será informada e todas as outras tabelas de preços válidas serão excluídas.