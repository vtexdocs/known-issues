---
title: 'Magazine Luiza A integração não suporta vários pacotes'
slug: magazine-luiza-a-integracao-nao-suporta-varios-pacotes
status: PUBLISHED
createdAt: 2026-02-24T23:42:06.000Z
updatedAt: 2026-09-22T19:11:30.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: magazine-luiza-integration-not-support-multiple-packages
locale: pt
kiStatus: Backlog
internalReference: 1369259
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Pedidos do marketplace **Magazine Luiza** integrados ao VTEX podem ser divididos em dois pacotes, gerando, consequentemente, **duas faturas**. No entanto, o Magalu aceita atualmente **apenas uma única fatura por pedido**.

Por conta disso, o Magalu sinaliza o pedido como **“Fatura Inválida (NF inválida)”** e não prossegue com o fluxo, mesmo quando o pedido já está marcado como entregue no VTEX.

No Bridge, o status do pedido permanece como **“Faturado (Faturado)”**, e o status **Entregue** não é refletido corretamente.

![](https://vtexhelp.zendesk.com/attachments/token/sZfLKTWPRFsSIMFBZ2lO1LUz7/?name=image.png)

## Simulação

- Receber um pedido da Magalu que, ao ser processado no VTEX, resulta em transportadoras diferentes para cada item, fazendo com que o pedido seja dividido em dois pacotes.

- Emitir as faturas seguindo o fluxo padrão do VTEX, que gera duas faturas, uma para cada pacote.

## Workaround

N/A