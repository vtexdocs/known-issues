---
title: Compradores que não conseguem acessar a etapa de pagamento diretamente com um perfil completo e opção de retirada disponível
slug: compradores-que-nao-conseguem-acessar-a-etapa-de-pagamento-diretamente-com-um-perfil-completo-e-opcao-de-retirada-disponivel
status: PUBLISHED
createdAt: 
updatedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shoppers-not-able-to-access-the-payment-step-directly-with-a-complete-profile-and-available-pickup-option
locale: pt
kiStatus: Backlog
internalReference: 1243953
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao tentar acessar a etapa de pagamento do checkout diretamente pelo URL (`/checkout?orderFormId={orderFormId}#/payment`), o comprador é levado para a etapa de envio.

Isso acontece se o usuário (e-mail) presente nas informações clientProfileData do formulário de pedido tiver um perfil completo **e** houver uma opção de retirada disponível para o carrinho.
## Simulação



- Crie um carrinho de um usuário que tenha um perfil completo e copie o orderFormId dele;
- Em uma nova guia anônima, tente acessar a página de pagamento desse carrinho diretamente usando o link `/checkout?orderFormId={orderFormId}#/payment`;
- Se houver uma opção de retirada disponível, o comprador será direcionado para a etapa de envio
## Workaround


N/A



