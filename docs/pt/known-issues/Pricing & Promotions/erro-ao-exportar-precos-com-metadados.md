---
title: 'Erro ao exportar preços com metadados'
slug: erro-ao-exportar-precos-com-metadados
status: PUBLISHED
createdAt: 2023-07-12T11:48:49.000Z
updatedAt: 2023-07-12T11:48:49.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-exporting-prices-with-metadata
locale: pt
kiStatus: Backlog
internalReference: 860290
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Às vezes, ao tentar exportar os preços com a opção de metadados ativada e sem usar filtros, pode ocorrer um erro. Ao verificar a mensagem no DevTools, aparecerá algo semelhante a “Polly broken circuit on service...”.

Esse erro ocorre devido à limitação de acesso no módulo do catálogo ao tentar recuperar os metadados de um grande número de SKUs.

## Simulação

1. Exporte os preços com metadados sem usar nenhum filtro;
2. Às vezes, uma mensagem de erro aparecerá;
3. Verifique no devTools se a mensagem é semelhante à acima.

## Workaround

Use os filtros para reduzir a quantidade de SKUs na planilha e o módulo de catálogo retornará os dados sem problemas.