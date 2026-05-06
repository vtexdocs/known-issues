---
title: 'A interface do usuário não exibe o formulário para editar o endereço quando se opta por adicionar um novo endereço primeiro'
slug: a-interface-do-usuario-nao-exibe-o-formulario-para-editar-o-endereco-quando-se-opta-por-adicionar-um-novo-endereco-primeiro
status: PUBLISHED
createdAt: 2023-02-06T13:15:43.000Z
updatedAt: 2023-06-23T17:46:52.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: ui-doesnt-show-the-form-to-edit-address-when-selecting-to-add-a-new-address-first
locale: pt
kiStatus: Fixed
internalReference: 747772
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

A interface do usuário não exibe o formulário correto para editar o endereço selecionado na etapa de envio quando se opta por adicionar um novo endereço primeiro.

## Simulação

- Tenha um usuário com um perfil completo;
- Clique para adicionar um novo endereço, não digite/selecione nada e volte para a lista de endereços;
- Clique para editar o endereço selecionado;
- Você verá o mesmo formulário que aparece ao adicionar um novo endereço.

## Workaround

Atualize a página para poder editar o endereço selecionado novamente.