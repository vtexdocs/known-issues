---
title: 'A caixa de login do ID VTEX fica quase invisível na página de finalização da compra quando a página é rolada para baixo.'
slug: a-caixa-de-login-do-id-vtex-fica-quase-invisivel-na-pagina-de-finalizacao-da-compra-quando-a-pagina-e-rolada-para-baixo
status: PUBLISHED
createdAt: 2020-10-16T02:26:44.000Z
updatedAt: 2026-09-17T16:02:18.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vtex-id-login-box-is-barely-visible-in-checkout-when-the-page-is-scrolled-down
locale: pt
kiStatus: No Fix
internalReference: 296905
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O campo de login do ID VTEX no Checkout permanece fixo próximo ao topo da página. Quando o comprador rola a página para baixo, o campo permanece oculto no topo e apenas o indicador de carregamento fica visível, impedindo que o comprador perceba que o login é necessário.

Isso é especialmente crítico quando o login é solicitado após três tentativas de pagamento falhas, já que o comprador geralmente está abaixo do topo da página nesse momento.

## Simulação

1. Bloqueie um comprador após 3 tentativas de pagamento falhas (geralmente com cartão de crédito).

2. Tente pagar novamente, solicitando o login antes da conclusão da compra.

3. Role a página para baixo em uma viewport com altura reduzida.

4. O campo de login não está visível — apenas o indicador de carregamento é exibido.

## Workaround

A loja deve implementar seu próprio CSS para que o campo de login acompanhe a rolagem da página.