---
title: Pagamentos duplicados com as mesmas informações
slug: pagamentos-duplicados-com-as-mesmas-informacoes
status: PUBLISHED
createdAt: 2025-10-16T20:28:01.397Z
updatedAt: 2025-10-16T20:28:01.397Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duplicated-payments-with-the-same-information
locale: pt
kiStatus: Backlog
internalReference: 1154246
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Pagamentos duplicados com as mesmas informações enviadas ao gateway, levando ao cancelamento da transação.

É possível confirmar o cenário verificando algumas informações, como:


- O registro de erros retornado na transação

Ex:

**PaymentGateway**
_O valor da transação (111503,00) não é igual à soma dos pagamentos (223006,00)._



-

Usando a API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, verifique o número de objetos na matriz transaction.payments. Se forem encontrados dois objetos, esse KI se encaixa no cenário.

## Simulação


Não é possível simular


## Workaround


Não há nenhuma solução alternativa disponível.



