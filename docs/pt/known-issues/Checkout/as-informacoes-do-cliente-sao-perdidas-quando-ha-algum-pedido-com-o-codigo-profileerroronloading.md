---
title: 'As informações do cliente são perdidas quando há algum pedido com o código "profileErrorOnLoading"'
slug: as-informacoes-do-cliente-sao-perdidas-quando-ha-algum-pedido-com-o-codigo-profileerroronloading
status: PUBLISHED
createdAt: 2021-03-02T22:21:33.000Z
updatedAt: 2023-06-27T12:51:19.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: customer-information-being-lost-when-it-has-some-order-with-profileerroronloading
locale: pt
kiStatus: Backlog
internalReference: 340036
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o pedido tem "profileErrorOnLoading=true", o comportamento esperado é que o perfil do cliente, o endereço e os dados do cartão de crédito não sejam salvos/atualizados no Sistema de Perfis.

O problema é que o checkout continua fazendo algumas solicitações para registrar o e-mail do comprador, naturalmente, sem enviar outros campos como nome e telefone. Portanto, se o cliente já estiver registrado na loja, esses campos são apagados e os dados do cliente são perdidos.

## Simulação

Não podemos simular o comportamento, pois o "profileErrorOnLoading" serve apenas para exceções inesperadas.

## Workaround

N/A