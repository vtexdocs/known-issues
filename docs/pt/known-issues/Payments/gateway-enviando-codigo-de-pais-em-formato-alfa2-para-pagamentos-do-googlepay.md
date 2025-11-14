---
title: 'Gateway enviando código de país em formato alfa-2 para pagamentos do GooglePay'
slug: gateway-enviando-codigo-de-pais-em-formato-alfa2-para-pagamentos-do-googlepay
status: PUBLISHED
createdAt: 2025-11-14T19:27:51.668Z
updatedAt: 2025-11-14T19:27:51.668Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gateway-sending-country-code-in-alpha2-format-for-googlepay-payments
locale: pt
kiStatus: Backlog
internalReference: 1191562
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O gateway envia o código do país do endereço de cobrança no formato alfa-2 para o provedor no caso de pagamentos do GooglePay.
## Simulação


Isso acontece com todas as transações do Google Pay, pois o Google usa um formato diferente do esperado em nosso protocolo.
## Workaround


O provedor deve identificar e aceitar a transação mesmo que o endereço de cobrança tenha um formato diferente nos casos de transações do GooglePay.



