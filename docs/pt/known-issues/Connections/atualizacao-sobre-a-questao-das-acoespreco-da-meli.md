---
title: 'Atualização sobre a questão das ações/preço da MELI'
slug: atualizacao-sobre-a-questao-das-acoespreco-da-meli
status: PUBLISHED
createdAt: 2023-11-21T13:25:47.000Z
updatedAt: 2024-01-10T17:51:39.000Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-update-stockprice-issue
locale: pt
kiStatus: Fixed
internalReference: 939329
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Atualmente, temos um cenário muito específico que afeta alguns casos em que os SKUs não conseguem atualizar o estoque no MELI.

## Simulação

O que acontece é que, em alguns casos, o campo seller_custom_field, que deveria estar preenchido com o SKU do VTEX, está, na verdade, em branco; por isso, a integração não consegue atualizar o estoque no MELI nesses casos.

## Workaround

Preencha a planilha de migração com esses casos e envie para a equipe de produtos para que ela insira nosso SKU no campo seller_custom_field.