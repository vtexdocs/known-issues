---
title: 'Análise de pesquisa: eventos duplicados'
slug: analise-de-pesquisa-eventos-duplicados
status: PUBLISHED
createdAt: 2023-03-15T19:38:51.000Z
updatedAt: 2024-08-05T16:28:34.000Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-analytics-duplicated-events
locale: pt
kiStatus: Fixed
internalReference: 771986
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns eventos dos relatórios da Pesquisa Inteligente estão duplicados, o que pode afetar a visualização das análises no módulo de administração da pesquisa.


#### Perguntas frequentes

**1. Isso afeta todos os eventos do VTEX (por exemplo, Captura de Solicitação, painéis da página inicial de administração, etc.)?**

Não, as análises da Pesquisa Inteligente são calculadas de forma diferente e independente dessas métricas e eventos, por enquanto. Esse problema afeta apenas a página Pesquisa > Análises.

**2. Todas as métricas estão sendo calculadas em excesso?**

Sim, todas as métricas brutas exibidas na página Pesquisa > Análises estão sendo calculadas em excesso no momento.

São elas: contagem de pesquisas, cliques em um termo, cliques únicos em um termo, contagem de transações após a pesquisa de um termo e receita gerada por essas transações, taxa de cliques e conversão.

**3. Os dados da opção “Exportar para CSV” também foram afetados?**

Sim, os dados exportados para CSV também são afetados pelos dados calculados em excesso.

**4. Isso afeta o algoritmo de relevância de pesquisa e os resultados de pesquisa?**

Não, embora o algoritmo de relevância de pesquisa também utilize os eventos de análise para calcular a pontuação de popularidade do produto, ele não utiliza as métricas agregadas.

## Simulação

O cenário pode ser observado ao verificar a página de administração de pesquisa para os relatórios/análises.

## Workaround

N/A