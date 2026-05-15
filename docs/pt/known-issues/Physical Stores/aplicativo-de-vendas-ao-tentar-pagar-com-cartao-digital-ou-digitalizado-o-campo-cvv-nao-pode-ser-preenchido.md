---
title: 'Aplicativo de vendas Ao tentar pagar com cartão digital ou digitalizado, o campo CVV não pode ser preenchido'
slug: aplicativo-de-vendas-ao-tentar-pagar-com-cartao-digital-ou-digitalizado-o-campo-cvv-nao-pode-ser-preenchido
status: PUBLISHED
createdAt: 2026-03-18T23:07:59.000Z
updatedAt: 2026-05-15T19:48:05.000Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: sales-app-when-attempting-to-pay-with-digit-or-scan-card-the-cvv-field-cant-be-filled
locale: pt
kiStatus: Fixed
internalReference: 1380651
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No método de pagamento em que o cliente pode inserir ou digitalizar os dados do cartão de crédito, o campo CVV tem comprimento 0, o que impossibilita a inserção de qualquer valor.

## Simulação

Pelo menos um método de pagamento com cartão de crédito deve estar ativo no aplicativo de vendas
Crie um carrinho e vá para a etapa final (pagamento)
 - Para simular com o recurso de leitura do cartão, acesse pelo aplicativo móvel.

## Workaround

n/a