---
title: 'A exportação da tabela de preços calculados não inclui todos os SKUs'
slug: a-exportacao-da-tabela-de-precos-calculados-nao-inclui-todos-os-skus
status: PUBLISHED
createdAt: 2022-12-23T13:40:41.000Z
updatedAt: 2024-12-19T13:57:35.000Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: calculated-price-table-export-not-bringing-all-skus
locale: pt
kiStatus: Backlog
internalReference: 722005
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao exportar a Tabela de Preços Calculados a partir da interface do módulo de Preços, nem todos os SKUs são incluídos de forma consistente no arquivo exportado. O número de linhas na planilha exportada pode variar entre as exportações, resultando, por vezes, em menos SKUs do que o esperado.

## Simulação

Este problema é intermitente, mas pode ser observado da seguinte forma:

1. Acesse a interface do módulo de Preços.
2. Certifique-se de que nenhum filtro esteja aplicado.
3. Exporte a Tabela de Preços Calculados.
4. Compare o número de linhas na planilha exportada.
5. Repita o processo de exportação várias vezes. Em algumas tentativas, a planilha pode ter menos linhas do que nas exportações anteriores.

## Workaround

Para garantir resultados precisos:

- Exporte a Tabela de Preços Calculados várias vezes e compare as planilhas para verificar o número de linhas da tabela de preços.
- Use a exportação com o maior número de linhas como referência para a Tabela de Preços Calculados completa.