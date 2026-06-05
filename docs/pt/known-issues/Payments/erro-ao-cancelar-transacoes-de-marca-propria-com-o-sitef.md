---
title: 'Erro ao cancelar transações de marca própria com o Sitef'
slug: erro-ao-cancelar-transacoes-de-marca-propria-com-o-sitef
status: PUBLISHED
createdAt: 2021-10-18T20:02:55.000Z
updatedAt: 2026-06-05T21:18:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-to-cancel-private-label-transactions-with-sitef
locale: pt
kiStatus: No Fix
internalReference: 451735
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar cancelar uma transação de **Marca Própria** processada pelo conector **Sitef**, o processo de cancelamento fica incompleto. O fluxo de cancelamento do Sitef requer duas etapas — `beginCancel` e `doCancel` — mas, para transações de Marca Própria, apenas a primeira etapa (`beginCancel`) é executada.
A segunda etapa falha porque o campo `accountId` é `null` para transações de Private Label, o que impede a VTEX de concluir o cancelamento com o conector. Como resultado, a transação é marcada como cancelada na plataforma VTEX, mas **permanece ativa no lado do Sitef**, exigindo intervenção manual diretamente com o Sitef para concluir o cancelamento.

## Simulação

Não é possível reproduzir em um ambiente controlado sem uma conta Sitef com um método de pagamento Private Label configurado e credenciais de cartão de teste. O problema se manifesta em produção quando um cancelamento é acionado em uma transação Private Label capturada por meio do Sitef.

## Workaround

Não há solução alternativa disponível no lado da VTEX. O comerciante deve **entrar em contato diretamente com a Sitef** para cancelar a transação por conta própria.