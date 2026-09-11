---
title: 'Transição de "pagamento aprovado" atrasada para métodos de pagamento com aprovação rápida/automática (fluxo de trabalho não está pronto quando a notificação de autorização chega).'
slug: transicao-de-pagamento-aprovado-atrasada-para-metodos-de-pagamento-com-aprovacao-rapidaautomatica-fluxo-de-trabalho-nao-esta-pronto-quando-a-notificacao-de-autorizacao-chega
status: PUBLISHED
createdAt: 2026-09-11T20:31:22.000Z
updatedAt: 2026-09-11T20:31:22.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: delayed-paymentapproved-transition-for-fastautoapproval-payment-methods-workflow-not-ready-when-authorization-notification-arrives
locale: pt
kiStatus: Backlog
internalReference: 1460238
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos um problema que afeta pedidos pagos com métodos de pagamento rápidos/automáticos (por exemplo, Promissory, PSE e métodos similares de confirmação instantânea), nos quais a notificação de autorização de pagamento chega antes que o fluxo de trabalho do pedido esteja pronto para processá-la.

Quando essa condição de corrida ocorre, a transição automática de `pagamento pendente` para `pagamento aprovado` falha com um erro como:

"Transição automática falhou. O contador de tentativas atual é 1. Falha com a mensagem: Falha ao executar a ação 'aprovar pagamento'. Conteúdo: '{"error":{"code":"001","message":"Não foi possível comunicar com o vendedor {sellerId}"},"operationId":"{operationId}","fields":null}'"

O pedido só se recupera quando a próxima tentativa agendada do mecanismo de fluxo de trabalho é executada, por padrão, **900 segundos (15 minutos)** após a tentativa falha, sem nenhuma configuração adicional para essa transição. Durante esse período, o pedido permanece travado, exibindo um status anterior, mesmo que o pagamento já tenha sido autorizado.

Isso é diferente dos atrasos causados ​​pelo gateway de pagamento/análise antifraude em pagamentos com cartão. Em cenários com cartão, o fluxo de trabalho aguarda e reage corretamente ao tempo real de autorização, e nenhum bug está presente. Este KI cobre apenas a condição de corrida do método de aprovação automática.

## Simulação

1. Faça um pedido usando um método de pagamento com aprovação instantânea/automática (por exemplo, Promissória, PSE).

2. Se a confirmação de autorização chegar antes que a etapa do fluxo de trabalho do pedido esteja pronta para processar a transição `approve-payment`, a transição automática falha com o erro "Não foi possível comunicar com o vendedor" acima.

3. O status do pedido só é atualizado para "pagamento aprovado" após a próxima tentativa agendada (aproximadamente 15 minutos depois, política de repetição padrão), mesmo que o pagamento tenha sido autorizado imediatamente.

## Workaround

Não temos uma solução alternativa no momento. O pedido se recupera automaticamente na próxima tentativa agendada (em até ~15 minutos), portanto, nenhuma intervenção manual é necessária, mas a conta/cliente final percebe que o pedido permanece no estado "ainda não aprovado" durante esse período.