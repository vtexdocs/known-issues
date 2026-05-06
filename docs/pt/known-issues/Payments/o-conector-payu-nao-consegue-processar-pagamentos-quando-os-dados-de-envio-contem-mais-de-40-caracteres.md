---
title: 'O conector PayU não consegue processar pagamentos quando os dados de envio contêm mais de 40 caracteres.'
slug: o-conector-payu-nao-consegue-processar-pagamentos-quando-os-dados-de-envio-contem-mais-de-40-caracteres
status: PUBLISHED
createdAt: 2023-09-18T21:02:18.000Z
updatedAt: 2023-09-18T21:02:18.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-payu-connector-is-unable-to-process-payments-when-there-is-shipping-data-containing-more-than-40-characters
locale: pt
kiStatus: Backlog
internalReference: 902539
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O conector da PayU não processa os dados de endereço recebidos do checkout e os envia ao provedor tal como estão, sem nenhuma modificação. No entanto, a documentação do provedor indica que esses dados não devem exceder 40 caracteres.

Isso faz com que a transação seja cancelada devido a um erro de autorização de pagamento com a mensagem:

 mensagem: O tamanho deve estar entre 0 e 40 propriedade: , mensagem: O tamanho deve estar entre 0 e 40

## Simulação

- Durante a etapa de envio no checkout, selecione um endereço de entrega com mais de 40 caracteres, como 'Región Del Libertador General Bernardo O’Higgins (VI)' no Chile.
- Selecione um método de pagamento processado pelo conector PayU.

## Workaround

N/A