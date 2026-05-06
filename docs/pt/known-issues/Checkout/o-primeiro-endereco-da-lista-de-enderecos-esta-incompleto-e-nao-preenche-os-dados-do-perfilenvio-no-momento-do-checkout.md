---
title: 'O primeiro endereço da lista de endereços está incompleto e não preenche os dados do perfil/envio no momento do checkout'
slug: o-primeiro-endereco-da-lista-de-enderecos-esta-incompleto-e-nao-preenche-os-dados-do-perfilenvio-no-momento-do-checkout
status: PUBLISHED
createdAt: 2021-05-11T15:02:30.000Z
updatedAt: 2024-01-03T20:49:28.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: first-address-in-the-address-list-incomplete-does-not-fill-the-profileshipping-data-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 366975
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um usuário possui mais de um endereço em seu perfil e o primeiro endereço da lista está incompleto, independentemente de os demais serem válidos, o checkout não preenche automaticamente os dados do perfil/envio após a inserção do e-mail.

## Simulação

- Adicione 2 endereços a um perfil, sendo que o primeiro está incompleto;
- Monte um carrinho e adicione o e-mail;
- Nenhum dado de perfil/endereço é preenchido.

## Workaround

Remova o endereço incompleto do perfil por meio dos Dados Mestres