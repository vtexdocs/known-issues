---
title: Transação presa na liquidação após falha na captura devido à incompatibilidade de recipientsSplitRemainValue
slug: transacao-presa-na-liquidacao-apos-falha-na-captura-devido-a-incompatibilidade-de-recipientssplitremainvalue
status: PUBLISHED
createdAt: 2025-09-22T16:32:43.831Z
updatedAt: 2025-09-22T16:32:43.831Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaction-stuck-in-settling-after-capture-fails-due-to-recipientssplitremainvalue-mismatch
locale: pt
kiStatus: -
internalReference: 1295769
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


**Sintoma:** Após uma captura parcial seguida de um cancelamento parcial e um reembolso, a transação permanece em `settling` na VTEX.
Embora o gateway possa exibir a cobrança como "capturada/paga" em uma visualização consolidada, na VTEX o endpoint `/settlements` reflete apenas a captura parcial e o reembolso.
As tentativas de captura subsequentes falham devido a uma inconsistência no cálculo de `recipientsSplitRemainValue`.

O campo de dados adicionais `recipientsSplitRemainValue` armazenado para a transação tem um valor de divisão divergente para um ou mais destinatários. Essa incompatibilidade faz com que as validações de liquidação falhem e impede que a VTEX conclua o valor restante da captura.
## Simulação


1. Verifique se a conta está ativada com o sinalizador de recurso `can-retain-settlement.jsonnet`.
2. Crie uma nova transação na conta de teste.
3. Execute uma **captura parcial** da transação.
4. Cancelar parte do valor capturado anteriormente.
5. Reembolsar o valor cancelado.
6. Tentar capturar o valor restante da transação
## Workaround


N/A.



