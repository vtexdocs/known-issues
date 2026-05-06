---
title: 'A rota /_search do sistema de cartões-presente, ocasionalmente, não retorna vouchers quando o cabeçalho REST-range é inferior a 10.'
slug: a-rota-search-do-sistema-de-cartoespresente-ocasionalmente-nao-retorna-vouchers-quando-o-cabecalho-restrange-e-inferior-a-10
status: PUBLISHED
createdAt: 2023-03-13T22:29:20.000Z
updatedAt: 2023-03-13T22:29:20.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-search-route-of-the-gift-card-system-intermittently-does-not-return-vouchers-when-the-restrange-header-is-less-than-10
locale: pt
kiStatus: Backlog
internalReference: 770337
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em um cenário em que o cliente possui vouchers de fidelidade e chega ao checkout, espera-se que a rota /_search retorne todos os vouchers vinculados a esse usuário. No entanto, o checkout passa o cabeçalho com REST-range = 0-9. Em algumas contas, esse intervalo não é suficiente e a API retorna uma matriz vazia. Quando simulamos a chamada diretamente para a API com um intervalo maior que 10, conseguimos recuperar pelo menos um voucher.

## Simulação

Para simular essa situação, faça um POST para esta rota https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search passando o cabeçalho REST-range=giftcard=0-9.

## Workaround

Use um número maior do que o intervalo de 0 a 9. No entanto, o checkout não personaliza esse campo.