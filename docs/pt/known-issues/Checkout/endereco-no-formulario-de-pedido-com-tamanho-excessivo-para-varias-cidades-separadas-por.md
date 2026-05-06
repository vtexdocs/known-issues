---
title: 'Endereço no formulário de pedido com tamanho excessivo para várias cidades separadas por "::"'
slug: endereco-no-formulario-de-pedido-com-tamanho-excessivo-para-varias-cidades-separadas-por
status: PUBLISHED
createdAt: 2020-09-15T22:34:38.000Z
updatedAt: 2023-01-06T11:52:20.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: address-in-orderform-with-excessive-size-for-multiples-cities-separated-by
locale: pt
kiStatus: Backlog
internalReference: 287854
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Em alguns casos, a API do Checkout utiliza "::" como separador quando o serviço de CEP apresenta várias opções de cidades, causando um erro de tamanho excessivo no campo de endereço, o que prejudica a finalização do pedido. Esse comportamento ocorre porque a API possui um recurso de autocompletar para endereços

## Simulação

Considerando a Argentina como um exemplo que se encaixa nessa condição, ao adicionar o código postal 4427 via "vtexjs" ou API, é possível ver o endereço definido no orderForm separado por "::"

## Workaround

Via API: envie o parâmetro `"clearAddressIfPostalCodeNotFound": false` na solicitação para evitar que o endereço seja autocompletado
Via "vtexjs": use a função "sendAttachment()" em vez de "calculateShipping()" para que seja possível usar o parâmetro mencionado acima