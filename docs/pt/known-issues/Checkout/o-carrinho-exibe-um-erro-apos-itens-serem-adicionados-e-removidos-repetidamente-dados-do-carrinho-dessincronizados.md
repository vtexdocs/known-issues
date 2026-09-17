---
title: 'O carrinho exibe um erro após itens serem adicionados e removidos repetidamente (dados do carrinho dessincronizados).'
slug: o-carrinho-exibe-um-erro-apos-itens-serem-adicionados-e-removidos-repetidamente-dados-do-carrinho-dessincronizados
status: PUBLISHED
createdAt: 2021-11-30T17:16:13.000Z
updatedAt: 2026-09-17T15:32:07.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-shows-an-error-after-items-are-added-and-removed-repeatedly-cart-data-out-of-sync
locale: pt
kiStatus: No Fix
internalReference: 478063
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Após o comprador adicionar e remover itens do carrinho diversas vezes, o carrinho exibe uma mensagem de erro. Nesse ponto, o carrinho fica dessincronizado: ele tenta atualizar itens que não estão mais no carrinho.

## Simulação

Não reproduzível sob demanda. Todos os testes realizados antes do registro desta KI adicionaram e removeram itens sem problemas.

1. Itens adicionados e removidos do carrinho diversas vezes.

2. Uma mensagem de erro é exibida no carrinho logo após essa sequência.

## Workaround

Não há solução alternativa disponível.