---
title: 'Pedidos cancelados quando a autorização de pagamento não recebe resposta do gateway de pagamento.'
slug: pedidos-cancelados-quando-a-autorizacao-de-pagamento-nao-recebe-resposta-do-gateway-de-pagamento
status: PUBLISHED
createdAt: 2026-10-08T17:32:21.000Z
updatedAt: 2026-10-08T17:32:21.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: orders-cancelled-when-payment-authorization-gets-no-response-from-the-payment-gateway
locale: pt
kiStatus: Backlog
internalReference: 1471795
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos pagos com cartão são cancelados cerca de 100 segundos após serem feitos, mesmo que a transação tenha sido criada e os dados de pagamento recebidos normalmente. No pedido, o motivo do cancelamento é `Erro de criação: Não foi possível criar o pedido solicitado. Tente novamente. :: Ocorreu um erro de comunicação com o gateway`; na transação, o pagamento permanece em `Recebido`, nunca chega a `Autorizando`, não há resposta do conector (exibida como `N/A (Sem autorização de pagamento)` nos relatórios de transação) e é cancelado cerca de 5 minutos depois com `Pagamento cancelado com sucesso. Este pagamento não possui autorização.`. O adquirente não tem registro da solicitação e o comprador não é cobrado; o comprador aguarda na tela de processamento de pagamento até que o pedido falhe.

Isso afeta apenas a etapa de autorização: Não se trata de um problema geral; outros pedidos da mesma conta são autorizados normalmente e a mesma compra realizada novamente alguns minutos depois é concluída com sucesso.

## Simulação

Não é possível simular.

## Workaround

Não há solução alternativa disponível. O comprador deve refazer o pedido.