---
title: 'O conector legado da Adyen não consegue negar assincronamente a captura de pagamentos'
id: 5tdNyMfA5zeNg4sCbPQgUc
status: PUBLISHED
createdAt: 2024-02-02T15:15:57.980Z
updatedAt: 2024-02-02T15:15:58.839Z
publishedAt: 2024-02-02T15:15:58.839Z
firstPublishedAt: 2024-02-02T15:15:58.839Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-legacy-adyen-connector-is-unable-of-asynchronously-denying-payment-capture
locale: pt
kiStatus: Backlog
internalReference: 976005
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O conector antigo da Adyen captura o pagamento sempre que recebe o campo `"response":"[capture-received]"`. No entanto, esse evento indica apenas que a captura foi recebida e será processada de forma assíncrona. Esse comportamento evita que as capturas sejam negadas, pois a notificação assíncrona encontra um pagamento já capturado e não o reembolsa.

## Simulação


Depende da resposta de captura da Adyen; portanto, um pagamento precisa ser capturado para receber uma notificação de falha de captura.



## Workaround


N/A





