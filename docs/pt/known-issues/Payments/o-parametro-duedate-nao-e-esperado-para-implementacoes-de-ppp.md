---
title: 'O parâmetro dueDate não é esperado para implementações de PPP'
slug: o-parametro-duedate-nao-e-esperado-para-implementacoes-de-ppp
status: PUBLISHED
createdAt: 2025-12-16T13:55:38.311Z
updatedAt: 2025-12-16T13:55:38.311Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: duedate-parameter-is-not-expected-for-ppp-implementations
locale: pt
kiStatus: Backlog
internalReference: 1340572
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Não se espera que os conectores de pagamento criados de acordo com as respostas do protocolo de provedor de pagamento (PPP) às VTEXs incluam o parâmetro `dueDate`, pois esse parâmetro não está definido na API Payment Details.

Isso pode levar a informações incorretas/incisas em outros fluxos que dependem dessas informações.
## Simulação


O problema não é fácil de simular, mas pode ser observado em qualquer transação de um conector que use o protocolo do provedor de pagamento.
## Workaround


N/A



