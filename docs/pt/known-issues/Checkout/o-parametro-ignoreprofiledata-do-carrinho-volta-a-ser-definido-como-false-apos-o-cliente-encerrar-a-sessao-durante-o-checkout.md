---
title: 'O parâmetro `ignoreProfileData` do carrinho volta a ser definido como `false` após o cliente encerrar a sessão durante o checkout'
slug: o-parametro-ignoreprofiledata-do-carrinho-volta-a-ser-definido-como-false-apos-o-cliente-encerrar-a-sessao-durante-o-checkout
status: PUBLISHED
createdAt: 2026-05-04T21:58:37.496Z
updatedAt: 2026-05-04T21:58:37.496Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: cart-parameter-ignoreprofiledata-reverted-to-false-after-shopper-signs-out-in-checkout
locale: pt
kiStatus: Backlog
internalReference: 1401421
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em lojas com a configuração do formulário de pedido `"ignoreProfileData": true`, ao sair da conta após a inserção do e-mail usando o botão `Não é você? Sair`, o parâmetro do carrinho `ignoreProfileData` é revertido para `false`.

Isso faz com que, para qualquer usuário subsequente com um e-mail reconhecido, seus dados pessoais sejam preenchidos automaticamente, apesar do valor `"ignoreProfileData": true` na configuração do formulário de pedido.

 ![](https://vtexhelp.zendesk.com/attachments/token/4vrwdjRkpyimh29VJjzy22IES/?name=image.png)

## Simulação

- Crie um carrinho em uma loja com a configuração do formulário de pedido `"ignoreProfileData": true`;
- Prossiga para o checkout e preencha um e-mail pertencente a um perfil completo;
- Após o reconhecimento do e-mail, os dados do comprador não serão preenchidos;
- Saia da conta com o botão `Não é você? Sair`;
- O parâmetro específico do carrinho `ignoreProfileData` voltará a ser false;
- Preencher qualquer e-mail com um perfil completo levará então ao preenchimento dos dados do comprador.

## Workaround

N/A