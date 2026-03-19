---
title: 'Reembolso limitado incorretamente devido a um recibo duplicado causado por uma condição de corrida (fatura OMS/restituições)'
slug: reembolso-limitado-incorretamente-devido-a-um-recibo-duplicado-causado-por-uma-condicao-de-corrida-fatura-omsrestituicoes
status: PUBLISHED
createdAt: 2026-03-19T14:05:56.864Z
updatedAt: 2026-03-19T14:05:56.864Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: refund-limited-incorrectly-due-to-duplicated-receipt-from-race-condition-oms-invoicerestutions
locale: pt
kiStatus: Backlog
internalReference: 1380918
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao emitir um reembolso por meio da entrada de fatura no OMS com restituições, alguns pedidos são bloqueados com o erro: “`Não é possível usar a restituição para reembolsar mais do que xxx`”, mesmo que a transação de pagamento ainda apresente um saldo reembolsável superior. O sintoma visível é um limite de reembolso inferior ao esperado, calculado no pedido. No caso investigado, a equipe de engenharia identificou um recibo duplicado salvo no JSON do pedido, causado por uma condição de corrida em um worker que recupera recibos, o que reduz o valor reembolsável percebido pelo sistema. Afeta comerciantes que realizam reembolsos por meio de restituições do OMS em pedidos nos quais o worker de recuperação de recibos entra em conflito com a persistência normal de recibos.

## Simulação

Não há maneira conhecida de replicar esse cenário.

## Workaround

-

Abra um ticket para o PS para remover o recibo duplicado do JSON do pedido, de modo que o saldo reembolsável seja recalculado corretamente. Isso não pode ser corrigido via Admin ou APIs públicas.




- Se for necessário um reembolso urgente antes da correção do PS:
  -

Execute o reembolso restante diretamente no painel do gateway de pagamento para reembolsar o comprador e adicione uma nota interna no pedido para reconciliação. Observe que isso não ajustará os saldos reembolsáveis do OMS e deverá ser regularizado após a correção da Engenharia.



- Se você suspeitar desse cenário:
  - Compare os totais reembolsados pelo gateway com a soma dos recibos registrados no pedido; procure por valores duplicados para o mesmo evento. Forneça ao PS os carimbos de data/hora, o JSON do pedido e a carga útil de entrada da fatura com falha.