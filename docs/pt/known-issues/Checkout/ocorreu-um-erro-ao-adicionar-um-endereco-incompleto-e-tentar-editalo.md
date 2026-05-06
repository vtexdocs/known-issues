---
title: '"Ocorreu um erro" ao adicionar um endereço incompleto e tentar editá-lo'
slug: ocorreu-um-erro-ao-adicionar-um-endereco-incompleto-e-tentar-editalo
status: PUBLISHED
createdAt: 2024-01-02T21:10:59.000Z
updatedAt: 2024-01-02T21:10:59.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: something-went-wrong-when-adding-an-incomplete-address-and-tried-to-edit-it
locale: pt
kiStatus: Backlog
internalReference: 960064
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Durante a etapa de finalização da compra, utilizando um cliente com perfil completo, na etapa de preenchimento dos dados de entrega, ao clicar na opção “Entregar em outro endereço”, se apenas o CEP for inserido e o cliente voltar à lista de endereços (usando o botão “Voltar à agenda de endereços”) e clicar em “Atualizar informações do endereço selecionado”, ocorre um erro com a mensagem “Algo deu errado”.

## Simulação

- Adicione itens ao carrinho e use um e-mail com  um perfil completo;
- Durante a etapa de finalização da compra, ao preencher os dados de entrega, clique em “Entregar em outro endereço”;
- Adicione um código postal e retorne aos dados de entrega clicando no botão “Voltar à lista de endereços”;
- Clique em “Atualizar informações do endereço selecionado”.

## Workaround

- Atualize a página se o erro aparecer.