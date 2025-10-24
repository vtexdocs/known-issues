---
title: 'Análise de risco cancelada antes do esperado devido ao limite fixo de tentativas'
slug: analise-de-risco-cancelada-antes-do-esperado-devido-ao-limite-fixo-de-tentativas
status: PUBLISHED
createdAt: 2025-08-28T13:19:44.719Z
updatedAt: 2025-08-28T13:19:44.719Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: risk-analysis-canceled-earlier-than-expected-due-to-fixed-retry-limit
locale: pt
kiStatus: Backlog
internalReference: 1282965
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em uma transação com um conector antifraude criado usando o protocolo antifraude padrão da VTEX, é possível notar que, quando o campo **hook** é enviado, a transação é cancelada antes do esperado. Por padrão, o controlador antifraude coloca em fila **24 tentativas** em vez do número desejado definido pelo provedor quando o método com hook é acionado. Isso resulta em muito menos tentativas de análise do que o esperado.

A mensagem a seguir é uma forte evidência de que o problema ocorreu:

    Não foi possível fazer a análise de risco da transação . O status atual da transação era AnalyzingRisk. Tentativas de autorização: 24. Mensagem de exceção: Não foi possível confirmar a transação com Id = . Confirmação pendente. Tentativas de autorização: 24.Tentativas concluídas.

## Simulação



1. Configure um conector antifraude que tenha o campo **hook**.
2. Crie uma transação que use uma regra com um conector antifraude (AFPP).
3. Verifique as iterações: haverá apenas 24 tentativas de análise de risco. Depois disso, a transação entrará no fluxo de cancelamento.


## Workaround


Não há solução alternativa.



