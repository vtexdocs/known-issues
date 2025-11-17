---
title: 'No Payout Split, o objeto recipiens não é enviado no método de pagamento do Apple Pay'
slug: no-payout-split-o-objeto-recipiens-nao-e-enviado-no-metodo-de-pagamento-do-apple-pay
status: PUBLISHED
createdAt: 2025-11-17T18:45:28.311Z
updatedAt: 2025-11-17T18:45:28.311Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: in-payout-split-the-recipiens-object-is-not-sent-in-the-apple-pay-payment-method
locale: pt
kiStatus: Fixed
internalReference: 1094952
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Não é possível criar/enviar o objeto de um destinatário para o método de pagamento Apple Pay, mesmo com todas as configurações necessárias ativadas.
## Simulação



1. Habilite a divisão de contas a receber em um conector que permita a divisão usando o método de pagamento Apple Pay.
2. Compre um item do vendedor, que tem uma comissão.
3. Verifique se, no processo em que os destinatários devem ser enviados, na autorização ou captura, o objeto não existe
## Workaround


N/A



