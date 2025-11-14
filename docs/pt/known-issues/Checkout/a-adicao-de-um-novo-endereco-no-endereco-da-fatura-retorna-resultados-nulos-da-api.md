---
title: 'A adição de um novo endereço no endereço da fatura retorna resultados nulos da API'
slug: a-adicao-de-um-novo-endereco-no-endereco-da-fatura-retorna-resultados-nulos-da-api
status: PUBLISHED
createdAt: 2025-11-14T19:15:45.749Z
updatedAt: 2025-11-14T19:15:45.749Z
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


Quando há mais de um endereço registrado no sistema de perfis, há uma solicitação "nula" para o serviço de CEP se você adicionar um novo endereço em "Endereço da fatura".
## Simulação



- Tenha mais de um endereço registrado no Profile System;
- Selecione um ponto de coleta;
- Clique em "Deliver to another address" (Entregar em outro endereço) para adicionar um novo endereço em "Invoice Address" (Endereço da fatura) sem selecionar nenhuma outra opção.

A solicitação foi `/api/checkout/pub/postal-code/null/postalcodenumber`, por isso retorna o erro 500. Devido a esse retorno, ele não preenche automaticamente o endereço usando o serviço de código postal
## Workaround


Selecione uma opção já registrada antes de adicionar um novo endereço


