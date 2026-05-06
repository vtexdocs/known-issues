---
title: 'Caractere especial no nome do vendedor - Relatório'
slug: caractere-especial-no-nome-do-vendedor-relatorio
status: PUBLISHED
createdAt: 2023-02-17T13:18:06.000Z
updatedAt: 2023-02-17T13:18:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: pt
kiStatus: Backlog
internalReference: 756243
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Especificamente no caso do caractere especial ":", quando temos um vendedor com esse caractere no nome e tentamos filtrá-lo para a geração de relatórios, observamos o seguinte ao visualizar em "devtools":

"Não é possível retornar null para o campo não nulo ReportDetails.rowNumber."

## Simulação

Para simular esse comportamento, é necessário selecionar um vendedor que contenha esse caractere especial no nome e tentar remover um relatório dele.

## Workaround

Como solução alternativa, esse caractere especial deve ser removido do nome do vendedor.