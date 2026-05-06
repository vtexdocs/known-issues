---
title: 'Não é possível criar um intervalo de entrega devido a uma inconsistência entre `estimateDate` e `lastDeliveryDay`, o que implica um custo de tempo elevado'
slug: nao-e-possivel-criar-um-intervalo-de-entrega-devido-a-uma-inconsistencia-entre-estimatedate-e-lastdeliveryday-o-que-implica-um-custo-de-tempo-elevado
status: PUBLISHED
createdAt: 2024-03-06T19:38:06.000Z
updatedAt: 2024-03-06T19:38:06.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: no-delivery-window-can-be-created-due-to-inconsistence-in-estimatedate-and-lastdeliveryday-for-high-timecost
locale: pt
kiStatus: Backlog
internalReference: 995491
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O `estimateDate` leva em conta o tempo total de entrega, mas considera apenas os dias em que a transportadora realiza entregas; portanto, neste exemplo, ele não leva em conta os finais de semana.
Já o `lastDeliveryDay` é calculado em dias corridos (dias consecutivos), ou seja, `data de hoje + tempo de entrega + número máximo de dias` configurado para a entrega programada; como conta dias consecutivos, ele leva em conta os finais de semana.

Para que o sistema monte a janela de entrega disponível, ele comparará se:

 lastDeliveryDay > estimateDate : TRUE


E somente se essa condição for atendida, ele criará a janela de entrega.

Mas com um `timecost` de trânsito total excessivamente alto, há uma inconsistência entre as variáveis `estimateDate` e `lastDeliveryDay`; a condição retornará `false` e, portanto, nenhuma janela de entrega será criada.

## Simulação

Altere a configuração de envio para o seguinte:

- Dias e horas de processamento do armazém com 100 dias;
- Custo de tempo no arquivo de taxas da planilha com 1 dia;
- Remova fins de semana e feriados da configuração da política de envio;
- Programe a entrega de segunda a sexta-feira, das 0h às 23h59;
- Tempo máximo de entrega na configuração de programação de entrega para 5 dias;

Essa configuração resultará em `lastDeliveryDay=10/05/2024` e `estimateDate=14/06/2024`;
E, assim, a condição será falsa:

 10/05/2024 > 14/06/2024 : FALSO


e nenhuma janela de entrega será criada;

## Workaround

Não há solução alternativa disponível.