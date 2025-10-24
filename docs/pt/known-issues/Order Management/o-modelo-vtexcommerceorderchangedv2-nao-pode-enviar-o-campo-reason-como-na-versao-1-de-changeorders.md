---
title: 'O modelo vtexcommerce-order-changed-v2 não pode enviar o campo reason, como na versão 1 de changeOrders.'
slug: o-modelo-vtexcommerceorderchangedv2-nao-pode-enviar-o-campo-reason-como-na-versao-1-de-changeorders
status: PUBLISHED
createdAt: 2025-09-11T19:28:58.880Z
updatedAt: 2025-09-11T19:28:58.880Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
locale: pt
kiStatus: Backlog
internalReference: 1290946
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Não é possível enviar o e-mail transacional "vtexcommerce-order-changed-v2", com o campo "reason", como foi feito no modelo "vtexcommerce-order-changed", isso ocorre porque o campo "reason" está disponível na API "OrderModification" e não na API GetOrder, como estava na alteração V1.
## Simulação


Para simular esse cenário, você precisa configurar o modelo vtexcommerce-order-changed-v2 e exibir o campo reason. Você verá que o campo estará em branco!


## Workaround


No momento, não temos nenhuma solução alternativa para esse cenário!



