---
title: 'Problemas ao cancelar transações com o conector Sitef'
slug: problemas-ao-cancelar-transacoes-com-o-conector-sitef
status: PUBLISHED
createdAt: 2021-04-02T02:15:15.000Z
updatedAt: 2026-06-05T21:19:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problems-to-cancel-a-transactions-with-sitef-connector
locale: pt
kiStatus: No Fix
internalReference: 351783
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante o fluxo de cancelamento de transações processadas pelo conector **Sitef**, o conector **não consegue retornar os dados de resposta esperados** de forma intermitente. Como resultado, a transação fica presa no status **"Cancelando"** e nunca passa para **"Cancelada"**, o que impede que o estoque do comerciante seja liberado.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. A falha ocorre intermitentemente em produção para transações processadas pelo conector Sitef quando um cancelamento é acionado.

## Workaround

Não há solução alternativa disponível.