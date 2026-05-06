---
title: 'Ao adicionar um novo endereço no campo “Endereço de faturamento”, a API retorna um resultado nulo'
slug: ao-adicionar-um-novo-endereco-no-campo-endereco-de-faturamento-a-api-retorna-um-resultado-nulo
status: PUBLISHED
createdAt: 2023-02-07T13:15:23.000Z
updatedAt: 2023-02-07T13:15:41.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: adding-a-new-address-on-invoice-address-returns-null-api-results
locale: pt
kiStatus: Backlog
internalReference: 748668
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando há mais de um endereço registrado no Sistema de Perfil, é enviada uma solicitação "nula" ao serviço de CEP caso você adicione um novo endereço em "Endereço de faturamento".

## Simulação

- Tenha mais de um endereço registrado no Sistema de Perfis;
- Selecione um ponto de retirada;
- Clique em “Entregar em outro endereço” para adicionar um novo endereço em “Endereço de faturamento” sem selecionar nenhuma outra opção.

A solicitação foi `/api/checkout/pub/postal-code/null/postalcodenumber`, portanto, retorna o erro 500. Devido a esse retorno, o endereço não é preenchido automaticamente usando o serviço de CEP.

## Workaround

Selecione uma opção já registrada antes de adicionar um novo endereço