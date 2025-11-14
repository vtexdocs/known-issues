---
title: 'O pagamento criado sem conector leva ao cancelamento da transação'
slug: o-pagamento-criado-sem-conector-leva-ao-cancelamento-da-transacao
status: PUBLISHED
createdAt: 2025-11-14T19:30:07.464Z
updatedAt: 2025-11-14T19:30:07.464Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: payment-created-without-connector-leads-to-canceled-transaction
locale: pt
kiStatus: Backlog
internalReference: 1323547
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns fluxos de checkout, o pagamento falha porque o campo `connector` obrigatório não está incluído na carga `/payment`. Como resultado, o pagamento é criado sem um conector atribuído, o que impede que ele seja processado corretamente pelo provedor. Esse problema geralmente ocorre quando a API de pagamentos é chamada programaticamente sem definir o campo `connector` ou quando nenhuma regra ou afiliação é corretamente vinculada antes da transferência do provedor.
## Simulação


Não é possível simular.


## Workaround


N/A.


