---
title: 'Reembolso calculado incorretamente pelo gateway em transações divididas'
slug: reembolso-calculado-incorretamente-pelo-gateway-em-transacoes-divididas
status: PUBLISHED
createdAt: 2025-10-16T20:42:28.117Z
updatedAt: 2025-10-16T20:42:28.117Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: refund-miscalculated-by-gateway-in-split-transactions
locale: pt
kiStatus: Backlog
internalReference: 1196767
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


As solicitações de reembolso do gateway têm apenas o valor do montante da comissão, mesmo que a solicitação do sistema de gerenciamento de pedidos tenha sido enviada com o valor total.

Para identificar esse problema conhecido, você deve: Verificar o valor total solicitado nos pedidos e comparar com o valor calculado e solicitado pelo gateway ao provedor. Em seguida, verificar se o valor é diferente entre eles, se o mesmo valor de comissão está no objeto do destinatário.
## Simulação


Não é possível simular.


## Workaround


Não há nenhuma solução alternativa disponível.



