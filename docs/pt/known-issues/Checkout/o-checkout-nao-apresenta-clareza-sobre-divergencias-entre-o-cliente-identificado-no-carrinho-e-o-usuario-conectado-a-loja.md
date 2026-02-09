---
title: 'O checkout não apresenta clareza sobre divergências entre o cliente identificado no carrinho e o usuário conectado à loja.'
slug: o-checkout-nao-apresenta-clareza-sobre-divergencias-entre-o-cliente-identificado-no-carrinho-e-o-usuario-conectado-a-loja
status: PUBLISHED
createdAt: 2026-02-09T14:11:31.114Z
updatedAt: 2026-02-09T14:11:31.114Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-has-no-clarity-about-divergences-between-the-customer-identified-in-the-cart-and-the-user-logged-in-to-the-store
locale: pt
kiStatus: Backlog
internalReference: 442267
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

 As alterações na autenticação do usuário feitas através do VTEX ID não atualizam automaticamente as informações pessoais do formulário de pedido (perfil e endereço). Isso pode levar a alguns comportamentos indesejados, tais como: 1. O usuário autenticado adiciona informações pessoais ao carrinho, depois sai da conta através de “Minha conta” ou faz login com um e-mail diferente, mas as informações pessoais permanecem visíveis no carrinho.

2. O usuário não autenticado com perfil completo se identifica por e-mail, o que faz com que suas informações pessoais sejam preenchidas automaticamente e ocultadas no carrinho, depois faz login com um e-mail diferente, mas as informações pessoais permanecem ocultas no carrinho (e não podem ser editadas) 3. Os dados pessoais são atualizados no perfil do usuário através da página “Minha conta”, mas essa alteração não é refletida no formulário de pedido existente no qual esse usuário está identificado
## Simulação


## Workaround

