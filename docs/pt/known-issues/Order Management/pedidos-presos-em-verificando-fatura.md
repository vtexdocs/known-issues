---
title: 'Pedidos presos em “Verificando fatura”'
slug: pedidos-presos-em-verificando-fatura
status: PUBLISHED
createdAt: 2026-09-23T17:44:32.000Z
updatedAt: 2026-09-23T17:45:50.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: orders-stuck-in-verifying-invoice
locale: pt
kiStatus: No Fix
internalReference: 1465086
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em cenários onde o vendedor envia a fatura, o pedido do vendedor passa diretamente para o status "Faturado", enquanto o pedido do marketplace permanece no status "Verificando Fatura". Isso ocorre porque o marketplace precisa receber a confirmação do gateway de que o pedido foi liquidado; se um erro no gateway impedir a emissão da fatura, o pedido do marketplace fica preso em "Verificando Fatura", enquanto o pedido do vendedor permanece "Faturado". Isso impossibilita o ajuste dos pedidos, pois não conseguimos cancelar nem faturar o pedido do marketplace nessa situação.

## Simulação

Não há uma maneira fácil de reproduzir o cenário.

## Workaround

Não temos uma solução alternativa para este cenário!