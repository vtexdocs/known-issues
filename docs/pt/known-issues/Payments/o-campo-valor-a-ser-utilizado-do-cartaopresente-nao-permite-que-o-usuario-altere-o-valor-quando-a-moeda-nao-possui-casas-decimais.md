---
title: 'O campo "Valor a ser utilizado" do cartão-presente não permite que o usuário altere o valor quando a moeda não possui casas decimais'
slug: o-campo-valor-a-ser-utilizado-do-cartaopresente-nao-permite-que-o-usuario-altere-o-valor-quando-a-moeda-nao-possui-casas-decimais
status: PUBLISHED
createdAt: 2021-03-02T17:07:27.000Z
updatedAt: 2025-05-14T16:17:31.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: amount-to-use-from-gift-card-does-not-allow-user-to-change-the-value-when-the-currency-doesnt-have-decimals
locale: pt
kiStatus: Backlog
internalReference: 339664
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o usuário está no checkout, passa para a etapa de pagamento e opta por usar o crédito, o valor não pode ser alterado. O usuário só pode usar o valor total.

## Simulação

- Defina o "Número de casas decimais a serem consideradas" como 0 na Configuração Geral de Pedidos;
- Tente alterar o "Valor a ser usado" na etapa de pagamento.

## Workaround

N/A