---
title: 'Transações com 2 pagamentos com cartão de crédito ficam travadas quando ocorrem várias tentativas de liquidação no modo de captura total.'
slug: transacoes-com-2-pagamentos-com-cartao-de-credito-ficam-travadas-quando-ocorrem-varias-tentativas-de-liquidacao-no-modo-de-captura-total
status: PUBLISHED
createdAt: 2026-07-20T20:37:30.000Z
updatedAt: 2026-07-20T20:37:30.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-with-2-credit-card-payments-stuck-when-multiple-settlement-attempts-occur-in-total-capture-mode
locale: pt
kiStatus: Backlog
internalReference: 1436981
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As transações podem ficar travadas nos estados "Aprovado" ou "Em Liquidação", sem progredir para o estado final "Concluído" ou "Cancelado", quando as seguintes condições forem atendidas:

- A transação contém 2 pagamentos diferentes com cartão de crédito;

- Os pagamentos são processados ​​no modelo de liquidação total;

- Os pagamentos recebem mais de uma tentativa de liquidação, não acionada pela liquidação automática.

A primeira tentativa de liquidação liquida o valor total da transação em ambos os pagamentos. As tentativas subsequentes não falham visivelmente, mas como não há valor restante para capturar, o fluxo da transação permanece travado.

## Simulação

Não é possível simular.

## Workaround

Nenhuma solução alternativa disponível.