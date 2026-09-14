---
title: 'Caractere especial no nome do vendedor Denunciar'
slug: caractere-especial-no-nome-do-vendedor-denunciar
status: PUBLISHED
createdAt: 2023-02-17T16:18:06.000Z
updatedAt: 2026-09-14T22:45:30.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: special-character-in-seller-name-report
locale: pt
kiStatus: Fixed
internalReference: 756243
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Especificamente para o caractere especial ":", quando temos um vendedor com esse caractere especial no nome e tentamos filtrá-lo para geração de relatórios, obtemos a seguinte mensagem ao visualizá-lo nas "ferramentas de desenvolvedor":

"Não é possível retornar nulo para o campo não anulável ReportDetails.rowNumber."

## Simulação

Para simular esse comportamento, é necessário selecionar um vendedor que contenha esse caractere especial no nome e tentar remover um relatório dele.

## Workaround

Para a solução alternativa, esse caractere especial deve ser removido do nome do vendedor.