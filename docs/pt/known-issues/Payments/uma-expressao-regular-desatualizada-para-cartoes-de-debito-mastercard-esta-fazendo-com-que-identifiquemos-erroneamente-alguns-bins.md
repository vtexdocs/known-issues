---
title: 'Uma expressão regular desatualizada para cartões de débito Mastercard está fazendo com que identifiquemos erroneamente alguns BINs'
slug: uma-expressao-regular-desatualizada-para-cartoes-de-debito-mastercard-esta-fazendo-com-que-identifiquemos-erroneamente-alguns-bins
status: PUBLISHED
createdAt: 2022-08-19T23:55:49.000Z
updatedAt: 2024-04-02T19:12:45.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-mastercard-debit-regex-is-causing-us-to-misidentify-some-bins
locale: pt
kiStatus: Backlog
internalReference: 642136
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Alguns BINs não estão sendo identificados corretamente no momento do checkout. A marca do cartão é determinada por uma expressão regular que pode estar desatualizada, fazendo com que a marca do cartão não seja identificada ou seja identificada incorretamente.

## Simulação

1. Configure duas condições de pagamento, uma para cartão de débito Mastercard
2. Adicione um item aleatório ao seu carrinho na loja e escolha pagar com cartão de débito
3. Preencha o número do cartão com o BIN do cartão de débito Mastercard 551898 e complete-o com números aleatórios
4. Preencha o restante das informações do cartão com dados falsos
5. Como o cartão não pôde ser identificado, o checkout solicitará a confirmação do número do cartão e a marca do cartão já poderá estar selecionada como outra marca

## Workaround

Não há solução alternativa.