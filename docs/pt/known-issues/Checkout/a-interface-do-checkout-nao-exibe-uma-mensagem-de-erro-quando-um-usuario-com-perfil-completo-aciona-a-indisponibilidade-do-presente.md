---
title: 'A interface do checkout não exibe uma mensagem de erro quando um usuário com perfil completo aciona a indisponibilidade do presente'
slug: a-interface-do-checkout-nao-exibe-uma-mensagem-de-erro-quando-um-usuario-com-perfil-completo-aciona-a-indisponibilidade-do-presente
status: PUBLISHED
createdAt: 2026-03-19T17:41:19.601Z
updatedAt: 2026-03-19T17:41:19.601Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-does-not-display-an-error-message-when-user-with-complete-profile-triggers-gift-unavailability
locale: pt
kiStatus: Backlog
internalReference: 1381105
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um carrinho inclui um item de presente e um perfil completo do comprador é carregado com um endereço que não possui um SLA para o presente, o item de presente é removido silenciosamente do carrinho. A interface do usuário não exibe nenhuma mensagem de erro, embora a mensagem esteja presente na API `orderForm`.

## Simulação

O problema ocorre durante a etapa **/shipping** na interface de checkout quando um perfil completo do comprador é carregado e o item de presente não possui um SLA válido ou estoque disponível para a região do usuário.


- Certifique-se de que uma promoção de presente esteja ativa
- Confirme que o item de presente não tenha um SLA para o endereço do usuário
- Monte um carrinho que acione a promoção de presente
- Selecione o presente e prossiga diretamente para a página de perfil (não insira o endereço na página `/cart`).
- Insira um e-mail associado a um perfil completo do comprador

## Workaround

N/A