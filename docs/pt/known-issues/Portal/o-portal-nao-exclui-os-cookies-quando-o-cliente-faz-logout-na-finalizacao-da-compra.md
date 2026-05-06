---
title: 'O portal não exclui os cookies quando o cliente faz logout na finalização da compra'
slug: o-portal-nao-exclui-os-cookies-quando-o-cliente-faz-logout-na-finalizacao-da-compra
status: PUBLISHED
createdAt: 2021-08-23T15:40:35.000Z
updatedAt: 2025-05-16T23:06:55.000Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-doesnt-delete-cookies-when-client-logout-at-checkout
locale: pt
kiStatus: No Fix
internalReference: 417322
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

No checkout de uma loja, temos a opção de sair da conta.

Infelizmente, a solicitação enviada ao aplicativo do portal não exclui os cookies do usuário, que permanecem no formulário de pedido (OrderForm) junto com o e-mail do cliente; por isso, o cliente não consegue sair da conta usando essa opção. Esse comportamento ocorre em lojas que utilizam uma solução de vitrine diferente do “Legacy CMS Portal”.

## Simulação

1. Acesse o site da loja (`www.store.com`) e faça login em Minha conta usando e-mail e código;
2. Após o login, crie um carrinho e vá para o checkout;
3. Conclua a etapa Perfil e vá para Envio; em seguida, tente sair do sistema pelo link “Não sou eu, encerrar sessão”.

O checkout executa a solicitação normalmente, enviando a solicitação junto com o `orderFormId`

No entanto, o Aplicativo do Portal não exclui o cookie desse usuário e, portanto, retorna o mesmo usuário. O e-mail é mantido no formulário de pedido e, consequentemente, o usuário não é desconectado.

## Workaround

Abra um ticket com a VTEX solicitando a ativação do logout com o VTEX ID.