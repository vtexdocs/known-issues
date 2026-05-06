---
title: 'Os métodos de pagamento exibidos na finalização da compra diferem das condições de pagamento ativas'
slug: os-metodos-de-pagamento-exibidos-na-finalizacao-da-compra-diferem-das-condicoes-de-pagamento-ativas
status: PUBLISHED
createdAt: 2022-09-27T16:25:08.000Z
updatedAt: 2024-06-07T21:23:12.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-methods-displayed-at-checkout-differ-from-active-payment-conditions
locale: pt
kiStatus: Backlog
internalReference: 666469
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Este problema de conhecimento (KI) se manifesta de duas maneiras durante o checkout:

1. As formas de pagamento **não** aparecem na página de checkout, mesmo quando a condição de pagamento associada está ativa há mais de 10 minutos.
2. As formas de pagamento **permanecem** na página de checkout mesmo quando a condição de pagamento associada está desativada há mais de 10 minutos.

Este é um problema intermitente e não há evidências de como reproduzir esse comportamento. Há uma maior incidência em métodos de pagamento personalizados.

## Simulação

N/A

## Workaround

1. Salvar a regra novamente.
2. Reindexar todos os sistemas de pagamento no checkout via API.