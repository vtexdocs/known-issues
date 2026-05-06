---
title: 'A pré-visualização do envio exibe incorretamente a data prevista para a entrega'
slug: a-previsualizacao-do-envio-exibe-incorretamente-a-data-prevista-para-a-entrega
status: PUBLISHED
createdAt: 2023-01-31T19:36:45.000Z
updatedAt: 2023-01-31T19:36:45.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-displaying-the-date-when-its-scheduled-delivery
locale: pt
kiStatus: Backlog
internalReference: 743774
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface de checkout converte a hora usando o fuso horário do computador, exibindo a data de entrega incorretamente na pré-visualização do envio (carrinho) quando os itens têm entrega agendada.

## Simulação

- Configure um intervalo de entrega programada para começar às 0h
- Defina um fuso horário que subtraia do UTC+00:00 no computador
- Você verá que a data exibida é a do dia anterior

## Workaround

Configure intervalos de entrega programada durante o dia, como o horário comercial, já que esse é o horário mais comum para entregas