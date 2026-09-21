---
title: 'Não é possível salvar o cartão em Meus Cartões quando o método de pagamento possui uma condição especial com subconta.'
slug: nao-e-possivel-salvar-o-cartao-em-meus-cartoes-quando-o-metodo-de-pagamento-possui-uma-condicao-especial-com-subconta
status: PUBLISHED
createdAt: 2025-08-29T22:03:35.000Z
updatedAt: 2026-09-21T19:16:03.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: cannot-save-card-in-mycards-when-the-payment-method-has-a-special-condition-with-subaccount
locale: pt
kiStatus: Backlog
internalReference: 1283953
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o método de pagamento usado para a transação de validação do cartão possui uma condição especial do tipo "nomes de conta" (que inclui uma subconta), o cartão não pode ser salvo em Meus Cartões.

## Simulação

1. Crie um método de pagamento que tenha a condição especial "nomes de conta" e selecione mais de uma conta.

2. Use este método de pagamento para as transações de validação do cartão (transação padrão de US$ 1,50).

3. Tente salvar um cartão em Meus Cartões, a partir de Minha Conta.

4. O cartão não será salvo e uma mensagem de erro será exibida.

## Workaround

Não há solução alternativa para este problema. Recomendamos que o comerciante utilize um método de pagamento diferente para as transações de validação do cartão, sem a condição especial do tipo "nomes de conta".