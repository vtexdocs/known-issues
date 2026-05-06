---
title: 'O processo de finalização da compra não deixa claro se há divergências entre o cliente identificado no carrinho e o usuário conectado à loja'
slug: o-processo-de-finalizacao-da-compra-nao-deixa-claro-se-ha-divergencias-entre-o-cliente-identificado-no-carrinho-e-o-usuario-conectado-a-loja
status: PUBLISHED
createdAt: 2021-10-04T22:46:58.000Z
updatedAt: 2026-02-09T17:10:43.000Z
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

As alterações na autenticação do usuário feitas por meio do VTEX ID não atualizam automaticamente as informações pessoais do formulário de pedido (perfil e endereço).

Isso pode levar a alguns comportamentos indesejados, tais como:


1. O usuário autenticado adiciona informações pessoais ao carrinho, depois sai da conta por meio de “Minha conta” ou faz login com um e-mail diferente, mas as informações pessoais permanecem visíveis no carrinho.

2. Um usuário não autenticado com perfil completo se identifica por e-mail, o que faz com que suas informações pessoais sejam preenchidas automaticamente e ocultadas no carrinho; em seguida, ele faz login com um e-mail diferente, mas as informações pessoais permanecem ocultas no carrinho (e não podem ser editadas)

3. Os dados pessoais são atualizados no perfil do usuário pela página “Minha conta”, mas essa alteração não é refletida no formulário de pedido existente no qual esse usuário está identificado

## Simulação

**Cenário 1:**


- Autenticar-se na loja usando um e-mail
- Criar um novo carrinho e adicionar dados pessoais com o mesmo e-mail
- Retornar à loja, depois sair ou fazer login com um usuário diferente
- Voltar ao carrinho; os dados pessoais adicionados anteriormente ainda estarão disponíveis e visíveis

**Cenário 2:**


- Sem autenticação, criar um novo carrinho e adicionar o e-mail a partir de um perfil completo (os dados pessoais serão preenchidos e ocultados automaticamente)
- Fazer login com um usuário diferente (especialmente usando Google/Facebook como provedores de identidade)
- Volte ao carrinho; os dados pessoais adicionados anteriormente ainda estarão disponíveis e ocultos, e não será possível editar as informações

**Cenário 3:**


- Crie um novo carrinho e adicione informações pessoais
- Volte à loja virtual e, em seguida, faça login com o mesmo e-mail usado no carrinho
- Atualize algumas informações de perfil ou endereço
- Volte ao carrinho; os dados pessoais não terão sido atualizados

## Workaround

Alguns cenários podem ser resolvidos implementando a limpeza de dados do carrinho ao sair da conta, conforme a documentação a seguir, usando o Session Watcher e a API `/changeToAnonymousUser`:

https://developers.vtex.com/docs/guides/vtex-io-documentation-cleaning-cart-data-on-log-out%0A