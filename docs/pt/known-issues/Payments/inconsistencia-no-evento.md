---
title: 'Inconsistência no evento'
slug: inconsistencia-no-evento
status: PUBLISHED
createdAt: 2020-07-22T21:31:52.000Z
updatedAt: 2024-05-23T12:45:28.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: event-inconsistency
locale: pt
kiStatus: Fixed
internalReference: 267299
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o usuário finaliza uma compra, é iniciado um novo fluxo de pedidos. A partir desse momento, o gateway VTEX é consultado sempre que forem identificados os seguintes status de pedido: “Pagamento pendente” e “Verificando fatura”. No status “Pagamento pendente”, espera-se que uma notificação de pagamento seja enviada ao módulo Pedidos. Durante esse período, podem ocorrer alguns problemas com o processamento de eventos. Embora não haja uma única causa raiz diretamente relacionada ao problema de processamento de eventos, qualquer outra questão interna ou externa ligada ao sistema de notificação pode fazer com que o fluxo do pedido seja bloqueado no status “pagamento pendente”.

A fila de mensagens fornece um protocolo de comunicação assíncrona, no qual os eventos são colocados em uma fila para serem consumidos em um momento predeterminado no futuro. Assim, já mapeamos alguns cenários em que há uma inconsistência nesse fluxo para categorizá-los e resolvê-los um por um.


- Perda de evento/evento não gerado;
- Evento travado e não processado;
- Erros de processamento que podem causar inconsistências no banco de dados.

Este KI refere-se explicitamente aos cenários mencionados acima e não tem a intenção de esgotar todas as possibilidades de problemas de processamento de eventos que possam ocorrer. Novas causas-raiz ou questões relacionadas, como respostas incorretas do provedor (o que ocorre regularmente), podem levar a situações em que a ordem fica travada. Cada caso precisa ser investigado individualmente para determinar a causa-raiz do problema.

## Simulação

Não há como simular esse comportamento.

## Workaround

Entre em contato com nossa equipe de suporte para reprocessar manualmente o evento.