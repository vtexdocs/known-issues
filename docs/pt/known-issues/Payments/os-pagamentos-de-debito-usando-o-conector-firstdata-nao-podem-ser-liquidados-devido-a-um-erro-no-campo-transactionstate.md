---
title: 'Os pagamentos de débito usando o conector Firstdata não podem ser liquidados devido a um erro no campo TransactionState'
slug: os-pagamentos-de-debito-usando-o-conector-firstdata-nao-podem-ser-liquidados-devido-a-um-erro-no-campo-transactionstate
status: PUBLISHED
createdAt: 2025-11-14T19:26:57.125Z
updatedAt: 2025-11-14T19:26:57.125Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: debit-payments-using-firstdata-connector-cannot-be-settled-due-to-an-error-in-the-transactionstate-field
locale: pt
kiStatus: Backlog
internalReference: 461095
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao utilizar o conector Firstdata para processar pagamentos de débito, nosso código foi projetado para esperar que o campo TransactionState seja definido como "CAPTURED". No entanto, encontramos um problema em que o provedor está enviando os valores "CAPTURED" e "SETTLED", o que está causando um erro:


    Mensagem de erro: Erro desconhecido no AutoSettle. Há um erro no documento XML (1, 745). & Erro ao executar a operação de liquidação. Consulte a exceção interna. Conector: Firstdata. Mensagem: A string de entrada não estava no formato correto.

## Simulação


Não é possível simular, pois esse é um comportamento intermitente que depende da resposta do provedor de pagamento.


## Workaround


N/A



