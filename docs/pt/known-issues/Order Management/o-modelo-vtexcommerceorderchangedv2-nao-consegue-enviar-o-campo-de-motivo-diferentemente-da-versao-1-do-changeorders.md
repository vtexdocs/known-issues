---
title: 'O modelo vtexcommerce-order-changed-v2 não consegue enviar o campo de motivo, diferentemente da versão 1 do changeOrders.'
slug: o-modelo-vtexcommerceorderchangedv2-nao-consegue-enviar-o-campo-de-motivo-diferentemente-da-versao-1-do-changeorders
status: PUBLISHED
createdAt: 2025-09-11T22:22:10.000Z
updatedAt: 2026-10-29T22:03:44.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: the-vtexcommerceorderchangedv2-template-cannot-send-the-reason-field-as-in-version-1-of-changeorders
locale: pt
kiStatus: Fixed
internalReference: 1290946
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Não é possível enviar o e-mail transacional "vtexcommerce-order-changed-v2" com o campo "motivo", como era feito no modelo "vtexcommerce-order-changed". Isso ocorre porque o campo "motivo" está disponível na API "OrderModification" e não na API GetOrder, como era na alteração V1.

## Simulação

Para simular esse cenário, você precisa configurar o modelo vtexcommerce-order-changed-v2 e exibir o campo "motivo". Você verá que o campo estará em branco!

## Workaround

Atualmente, não temos uma solução alternativa para esse cenário!