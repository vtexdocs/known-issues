---
title: 'Pedidos que não alcançam o status "faturado" mesmo após a fatura ter sido inserida corretamente.'
slug: pedidos-que-nao-alcancam-o-status-faturado-mesmo-apos-a-fatura-ter-sido-inserida-corretamente
status: PUBLISHED
createdAt: 2026-03-03T19:44:03.280Z
updatedAt: 2026-03-03T19:44:03.280Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-that-fail-to-reach-the-invoiced-status-even-after-the-invoice-has-been-correctly-entered
locale: pt
kiStatus: Backlog
internalReference: 1372902
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos que, em alguns cenários, o pedido do Marketplace não atinge o status “faturado”, permanecendo em “pagamento aprovado” ou outro status que não seja faturado, mesmo que a fatura esteja preenchida corretamente e o valor corresponda ao valor total do pedido. O pedido do vendedor progride corretamente para o status faturado.

Observamos que esse cenário ocorre devido a um conflito ao salvar a fatura no SNO, exigindo que reindexemos a fatura no SNO, o que faz com que o pedido alcance o status corretamente faturado.

## Simulação

Não temos como simular esse cenário!

## Workaround

Vamos reindexar manualmente a fatura no SNO!