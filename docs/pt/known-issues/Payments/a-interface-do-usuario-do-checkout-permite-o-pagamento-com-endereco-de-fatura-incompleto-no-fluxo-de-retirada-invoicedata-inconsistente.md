---
title: 'A interface do usuário do checkout permite o pagamento com endereço de fatura incompleto no fluxo de retirada (invoiceData inconsistente)'
slug: a-interface-do-usuario-do-checkout-permite-o-pagamento-com-endereco-de-fatura-incompleto-no-fluxo-de-retirada-invoicedata-inconsistente
status: PUBLISHED
createdAt: 2025-12-02T14:36:51.484Z
updatedAt: 2025-12-02T14:36:51.484Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: checkout-ui-allows-payment-with-incomplete-invoice-address-in-pickup-flow-inconsistent-invoicedata
locale: pt
kiStatus: Backlog
internalReference: 1333831
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O checkout pode prosseguir para a etapa de pagamento com um endereço de fatura incompleto (invoiceData) quando o método de envio for pickup. O sintoma visível é um endereço de fatura sem os campos obrigatórios (por exemplo, número), o que posteriormente causa falha no Anti-Fraud ou no processamento do pagamento.

A evidência na transação é:

    ClearSale retorna uma RestServiceException: {"Message": "The request is invalid.", "ModelState":{"[0].billing.address.number":["Invalid type. expected String but got Null."],"[0].shipping.address.number":["Invalid type. expected String but got Null."]}}
Isso afeta os compradores em cenários de retirada, quando um endereço do tipo fatura existe sem um número de rua, e foi observado mesmo quando a interface do usuário da loja deveria exigir o campo de número.
## Simulação


Não é possível simular.


## Workaround


Atualize/corrija o endereço da fatura do comprador diretamente nos dados mestre para que os campos obrigatórios (incluindo o número) estejam presentes e consistentes.


