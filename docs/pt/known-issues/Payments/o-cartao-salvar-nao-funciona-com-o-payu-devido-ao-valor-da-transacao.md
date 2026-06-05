---
title: 'O cartão "Salvar" não funciona com o PayU devido ao valor da transação'
slug: o-cartao-salvar-nao-funciona-com-o-payu-devido-ao-valor-da-transacao
status: PUBLISHED
createdAt: 2021-02-15T20:17:51.000Z
updatedAt: 2026-06-05T21:23:56.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: save-card-doesnt-work-for-payu-due-to-the-amount-of-validation
locale: pt
kiStatus: No Fix
internalReference: 334891
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao tentar salvar um cartão usando a parceria com a PayU em lojas da Argentina (América Latina), ocorre um erro devido ao valor baixo que cobramos para validar o cartão de crédito. Por esse motivo, não é possível utilizar essa funcionalidade.

## Simulação

1. Acesse uma loja que utilize a PayU como afiliada
2. Tente salvar o cartão em Minhas Contas
3. Verifique a transação gerada por causa disso
4. Ela apresentará o seguinte erro:

    Código do conector: ERROR - Mensagem: Resposta inesperada: propriedade: order.description, mensagem: O tamanho deve estar entre 1 e 255 - Mensagem de origem: propriedade: order.description, mensagem: O tamanho deve estar entre 1 e 255

##

## Workaround

Não há solução alternativa para isso no momento.