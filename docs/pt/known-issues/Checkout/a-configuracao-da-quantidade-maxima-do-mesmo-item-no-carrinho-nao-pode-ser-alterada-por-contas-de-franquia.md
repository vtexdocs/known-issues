---
title: 'A configuração da quantidade máxima do mesmo item no carrinho não pode ser alterada por contas de franquia'
slug: a-configuracao-da-quantidade-maxima-do-mesmo-item-no-carrinho-nao-pode-ser-alterada-por-contas-de-franquia
status: PUBLISHED
createdAt: 2021-01-18T18:00:30.000Z
updatedAt: 2025-04-22T22:36:34.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: maximum-quantity-setting-of-the-same-item-in-the-cart-cannot-be-changed-by-franchise-accounts
locale: pt
kiStatus: Backlog
internalReference: 325273
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A configuração da quantidade máxima de um mesmo item no carrinho não pode ser alterada pelas contas de franquia (vendedor de marca branca) nem pelo portal do vendedor, uma vez que é definida em uma tela do catálogo antigo (/admin/Site/ConfigForm.aspx) – módulo que foi removido das contas de franquia, já que elas herdam os produtos da conta principal.

## Simulação

- Acesse um ambiente de conta de franquia ou de vendedor whitelabel
- Acesse a tela “CMS > Configurações > guia Geral” no painel de administração ou vá diretamente para a página /admin/Site/ConfigForm.aspx
- Observe que não é possível acessar o conteúdo desta área

## Workaround

Solicite a configuração por meio de um ticket à VTEX.