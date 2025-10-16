---
title: A transação não está carregando - tela em branco
slug: a-transacao-nao-esta-carregando-tela-em-branco
status: PUBLISHED
createdAt: 2025-10-16T20:27:34.485Z
updatedAt: 2025-10-16T20:27:34.485Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-not-loading-blank-screen
locale: pt
kiStatus: Backlog
internalReference: 1157426
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar acessar uma transação específica, ela é carregada indefinidamente em uma tela em branco.
## Simulação



1. Acesse o URL diretamente:
`https://.myvtex.com/admin/pci-gateway/#/transactions/`
2. Verifique na guia de rede das ferramentas de desenvolvimento se a única rota que não está sendo carregada é `/interactions`.
3. Como validação final, tente acessar a rota `/interactions` diretamente e receba um erro `504 Gateway Timeout`
## Workaround


É impossível excluir o registro de interações, mas o serviço externo que chama o gateway várias vezes pode reduzir sua frequência, impedindo a ocorrência de novos casos.



