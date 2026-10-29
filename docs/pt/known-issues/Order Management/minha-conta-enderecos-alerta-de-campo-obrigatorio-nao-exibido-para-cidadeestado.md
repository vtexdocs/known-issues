---
title: 'Minha conta > Endereços - Alerta de campo obrigatório não exibido para cidade/estado'
slug: minha-conta-enderecos-alerta-de-campo-obrigatorio-nao-exibido-para-cidadeestado
status: PUBLISHED
createdAt: 2021-05-26T01:37:18.000Z
updatedAt: 2026-10-29T22:07:06.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: my-account-addresses-required-field-alert-not-showing-for-citystate
locale: pt
kiStatus: Fixed
internalReference: 373277
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao analisar alguns fluxos de criação de endereços em **Minha Conta**, observamos que o alerta de campo obrigatório não é exibido para campos como **cidade** e/ou **estado** (dependendo do país). Por exemplo, para o Brasil, esses campos são preenchidos automaticamente e bloqueados para edição.

Por outro lado, em alguns fluxos, esse campo precisa ser selecionado para outros países.

O problema é que, ao tentar criar um endereço sem selecionar nenhuma opção em cidade ou estado, nada acontece e a interface do usuário não avisa que esse campo precisa ser preenchido para concluir o cadastro.

![](https://vtexhelp.zendesk.com/attachments/token/1EKrEPHMR41ufIFg7c1wDFT6k/?name=inline867128956.png)​

## Simulação

Passos para reproduzir:

1. Teste na sua conta:

2. Acesse como um cliente. Você pode usar o <email test>

3. Tente criar um novo endereço para **ARG**

4. Preencha o formulário com o CEP "**1000**". O formulário será preenchido automaticamente nesses campos.

5. Selecione **Alterar**

6. Tente selecionar outra "**Província**" e não insira uma cidade.

7. Tente **adicionar** o endereço.

## Workaround

Selecione uma cidade ou estado antes de adicionar o endereço.