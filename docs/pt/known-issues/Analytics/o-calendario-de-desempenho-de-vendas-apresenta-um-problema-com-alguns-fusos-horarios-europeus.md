---
title: 'O Calendário de Desempenho de Vendas apresenta um problema com alguns fusos horários europeus'
slug: o-calendario-de-desempenho-de-vendas-apresenta-um-problema-com-alguns-fusos-horarios-europeus
status: PUBLISHED
createdAt: 2022-12-16T20:25:00.000Z
updatedAt: 2023-03-06T16:20:24.000Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slugEN: sales-performance-calendar-has-a-problem-with-some-european-time-zones
locale: pt
kiStatus: Backlog
internalReference: 718470
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No nosso painel de **Desempenho de Vendas**, disponibilizamos nos filtros a possibilidade de selecionar um período personalizado para visualizar as informações correspondentes. No entanto, neste momento, estamos enfrentando um problema com o nosso calendário em relação a alguns **fusos horários europeus** (até o momento, identificamos o problema apenas no **Reino Unido e em Portugal**).

O problema é que, para o mês de **outubro**, especificamente, o **dia 30** está oculto; além disso, ao selecionar um período que inclua esse dia de forma geral, isso gera um problema na análise dos dados para o período selecionado.

## Simulação

1. Você precisa alterar o fuso horário do seu computador para o Reino Unido ou Portugal
2. Em seguida, acesse o calendário no **Painel de Vendas, especificamente em outubro**
3. Tente localizar o dia **30** no calendário.

## Workaround

Quando você estiver em um fuso horário que apresente esse problema, recomenda-se selecionar um período diferente para evitar erros nos resultados.