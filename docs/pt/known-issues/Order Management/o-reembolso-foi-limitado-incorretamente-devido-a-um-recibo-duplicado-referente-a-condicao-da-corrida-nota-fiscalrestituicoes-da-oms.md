---
title: 'O reembolso foi limitado incorretamente devido a um recibo duplicado referente à condição da corrida (nota fiscal/restituições da OMS).'
slug: o-reembolso-foi-limitado-incorretamente-devido-a-um-recibo-duplicado-referente-a-condicao-da-corrida-nota-fiscalrestituicoes-da-oms
status: PUBLISHED
createdAt: 2026-03-19T17:05:01.000Z
updatedAt: 2026-09-15T21:04:41.000Z
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

Ao emitir um reembolso via entrada de fatura OMS com restituições, alguns pedidos são bloqueados com o erro: `"Não é possível usar a restituição. Reembolso superior a xxx"`, mesmo que a transação de pagamento ainda mostre um saldo reembolsável maior. O sintoma visível é um limite de reembolso calculado para o pedido inferior ao esperado. No caso investigado, a equipe de engenharia identificou um recibo duplicado salvo no JSON do pedido, causado por uma condição de corrida em um processo que recupera recibos, o que reduz o valor reembolsável percebido pelo sistema. Isso afeta os lojistas que realizam reembolsos via restituições OMS em pedidos nos quais o processo de recuperação de recibos entra em conflito com a persistência normal de recibos.

Essa mesma causa raiz também bloqueia a Modificação de Pedido (ChangeOrderV2) ao remover ou diminuir um item em um pedido do Marketplace — em vez do erro de restituição acima, ele se manifesta como `SOSValidationException` **CHK0034** (`"O valor da alteração excede o preço do pedido"`) no PATCH `…/orders/{orderId}/changes`. Confirmado por meio de rastreamento de pilha real em `ParticipantsEnricher.MergeWithParticipantPreviewsAsync`, que executa o mesmo cálculo de saldo de reembolso enquanto propaga a alteração para o participante do Marketplace.

## Simulação

Não há maneira conhecida de replicar esse cenário sob demanda — ele depende de uma condição de corrida entre o processo de recuperação de recibo e a persistência do recibo de reembolso real, que só se manifesta em momentos específicos.

## Workaround

- Abra um chamado para a PS para remover o recibo duplicado do JSON do pedido, para que o saldo reembolsável seja recalculado corretamente. Isso não pode ser corrigido pelo Admin ou pelas APIs públicas. Confirmamos que a correção também funciona para o gatilho ChangeOrderV2 — após a remoção, os tipos de restituição retornaram ao valor correto e a remoção do item bloqueado foi desbloqueada.
- Se um reembolso urgente for necessário antes da correção pela PS:
- Realize o reembolso restante diretamente no painel do gateway de pagamento para reembolsar o comprador e adicione uma nota interna ao pedido para conciliação. Observe que isso não ajustará os saldos reembolsáveis ​​do OMS e deverá ser regularizado após a correção da equipe de Engenharia.

- Se você suspeitar deste cenário:

- Compare os totais reembolsados ​​pelo gateway com a soma dos recibos registrados no pedido; procure por valores duplicados para o mesmo evento. Forneça à PS os registros de data e hora, o JSON do pedido e o payload de entrada da fatura com falha (ou o payload do ChangeOrderV2 com falha, se o gatilho for a remoção de um item).