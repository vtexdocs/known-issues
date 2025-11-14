---
title: 'O conector legado da Adyen não consegue recusar de forma assíncrona a captura de pagamentos'
slug: o-conector-legado-da-adyen-nao-consegue-recusar-de-forma-assincrona-a-captura-de-pagamentos
status: PUBLISHED
createdAt: 2025-11-14T19:31:40.728Z
updatedAt: 2025-11-14T19:31:40.728Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: pt
kiStatus: Backlog
internalReference: 976005
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O conector antigo da Adyen captura o pagamento sempre que recebe o campo `"response":"[capture-received]"`. No entanto, esse evento indica apenas que a captura foi recebida e será processada de forma assíncrona. Esse comportamento impede que as capturas sejam negadas, pois a notificação assíncrona encontra um pagamento já capturado e não o reembolsa.
## Simulação


Depende da resposta de captura da Adyen; portanto, um pagamento precisa ser capturado para receber uma notificação de falha de captura.
## Workaround


N/A



