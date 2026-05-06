---
title: 'Formato incorreto do endereço nos endereços de cobrança da seção "Meus cartões"'
slug: formato-incorreto-do-endereco-nos-enderecos-de-cobranca-da-secao-meus-cartoes
status: PUBLISHED
createdAt: 2023-04-17T17:40:08.000Z
updatedAt: 2023-04-17T17:40:08.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incorrect-address-format-on-the-my-cards-billing-addresses
locale: pt
kiStatus: Backlog
internalReference: 791779
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao adicionar um novo endereço de cobrança no vtex.my-cards, é exibido um formato de endereço incorreto. Isso ocorre quando o usuário tenta adicionar um novo cartão de crédito e acontece apenas quando o novo endereço que o usuário está tentando digitar é de um país diferente. O que acontece, por exemplo, é que, se o usuário escolher um novo endereço dos EUA, enquanto os demais são do Canadá, todos os endereços do Canadá serão formatados como se fossem dos EUA.

## Simulação

1. Clique em “Adicionar um novo cartão” na página de cartões de crédito
2. Escolha um endereço salvo diferente na seção “Endereço de cobrança do cartão”
3. Quando escolhemos um endereço canadense, todos os endereços são exibidos como canadenses, mesmo que sejam endereços dos EUA
4. Quando escolhemos um endereço dos EUA, todos os endereços são exibidos como dos EUA, mesmo que sejam endereços canadenses

## Workaround

N/A