---
title: 'A funcionalidade “Salvar cartão” em “Minha conta” não funciona para o PayUGlobal'
slug: a-funcionalidade-salvar-cartao-em-minha-conta-nao-funciona-para-o-payuglobal
status: PUBLISHED
createdAt: 2020-11-25T17:22:09.000Z
updatedAt: 2026-06-05T21:14:04.000Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-functionality-of-save-card-in-my-account-do-not-work-for-payuglobal
locale: pt
kiStatus: No Fix
internalReference: 309354
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um cliente tenta **salvar um cartão de crédito em Minha conta** em uma loja que utiliza o conector **PayU Global**, a operação falha com um erro e o cartão não é salvo. Uma transação de validação de **R$ 1,50** é criada e imediatamente cancelada como parte do fluxo de salvamento do cartão, mas o processo não é concluído com sucesso.

## Simulação

Não foi possível reproduzir o problema em um ambiente controlado. Para observar o problema, crie uma conta em uma loja que utilize o conector PayU Global e tente salvar um cartão de crédito em Minha conta. A operação falhará e uma transação de validação cancelada de R$ 1,50 ficará visível no Gateway.

## Workaround

Não há solução alternativa disponível.