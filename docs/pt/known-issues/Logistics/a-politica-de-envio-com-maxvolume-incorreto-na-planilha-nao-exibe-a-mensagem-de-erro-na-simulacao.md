---
title: 'A política de envio com MaxVolume incorreto na planilha não exibe a mensagem de erro na simulação.'
slug: a-politica-de-envio-com-maxvolume-incorreto-na-planilha-nao-exibe-a-mensagem-de-erro-na-simulacao
status: PUBLISHED
createdAt: 2021-06-10T23:32:40.000Z
updatedAt: 2026-08-12T20:51:18.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: shipping-policy-with-incorrect-maxvolume-on-spreadsheet-does-not-show-message-error-on-simulation
locale: pt
kiStatus: Backlog
internalReference: 380471
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando a Política de Envio tem o valor MaxVolume abaixo do valor especificado na planilha, nenhuma mensagem de erro é exibida na

## Simulação

.

Portanto, a conta não sabe por que essa política de envio está sendo descartada.

## **Simulação**
Para visualizar o problema, o valor de MaxVolume na planilha deve ser menor que o volume calculado para o produto.

Neste cenário, o valor abaixo do permitido no campo MaxVolume impede a aplicação da política de envio, o que está correto! O problema é que o sistema não exibe nenhuma mensagem de erro relacionada a essa Política de Envio.

## Workaround

Não há solução alternativa para este caso.