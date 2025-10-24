---
title: 'O "Valor a ser usado" do cartão-presente não permite que o usuário altere o valor quando a moeda não tem decimais'
slug: o-valor-a-ser-usado-do-cartaopresente-nao-permite-que-o-usuario-altere-o-valor-quando-a-moeda-nao-tem-decimais
status: PUBLISHED
createdAt: 2025-10-16T20:52:41.300Z
updatedAt: 2025-10-16T20:52:41.300Z
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


Quando o usuário está no checkout, vai para a sessão de pagamento e opta por usar o crédito, o valor não pode ser alterado. O usuário tem permissão para usar o valor total.
## Simulação



- Defina o "Número de dígitos decimais a serem considerados" como 0 na Configuração geral de pedidos;
- Tente alterar o "Valor a ser usado" na etapa de pagamento
## Workaround


N/A


