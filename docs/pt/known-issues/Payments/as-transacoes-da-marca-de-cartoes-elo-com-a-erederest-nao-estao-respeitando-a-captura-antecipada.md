---
title: 'As transações da marca de cartões Elo com a ERedeRest não estão respeitando a captura antecipada'
slug: as-transacoes-da-marca-de-cartoes-elo-com-a-erederest-nao-estao-respeitando-a-captura-antecipada
status: PUBLISHED
createdAt: 2021-03-30T23:57:36.000Z
updatedAt: 2026-06-05T21:25:49.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: elos-card-brand-transactions-with-erederest-are-not-respecting-early-capture
locale: pt
kiStatus: No Fix
internalReference: 350814
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Para transações processadas através do conector **ERedeRest** utilizando a marca de cartão **Elo**, a configuração de **captura antecipada** não é respeitada. A transação é capturada **imediatamente após a autorização**, independentemente do atraso configurado para a captura antecipada.

## Simulação

Crie uma transação utilizando a afiliação ERedeRest com a captura antecipada configurada e processe um pagamento com um cartão **Elo**. A captura ocorrerá imediatamente após a autorização, em vez de aguardar o atraso configurado.

## Workaround

N/A