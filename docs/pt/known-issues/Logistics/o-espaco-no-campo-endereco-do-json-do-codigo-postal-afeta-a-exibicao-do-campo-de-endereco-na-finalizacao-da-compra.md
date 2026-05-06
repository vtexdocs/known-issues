---
title: 'O espaço no campo “Endereço” do JSON do código postal afeta a exibição do campo de endereço na finalização da compra'
slug: o-espaco-no-campo-endereco-do-json-do-codigo-postal-afeta-a-exibicao-do-campo-de-endereco-na-finalizacao-da-compra
status: PUBLISHED
createdAt: 2023-08-01T22:30:21.000Z
updatedAt: 2023-08-01T22:30:21.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: space-in-street-property-in-postal-code-json-affects-address-field-display-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 872935
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Ao ativar o uso da API de CEP no formulário de endereço para países que não seguem o modelo BR (país, estado, cidade, bairro, rua), esses países que não têm todos esses campos preenchidos na API e precisam poder inserir os demais dados de endereço no formulário de endereço no checkout, o campo de rua do bloco de endereço não estará disponível se a propriedade de rua do JSON estiver com espaço, pois será interpretado como preenchido e válido, o que não permite prosseguir com o pedido.

## Simulação

Crie um carrinho em uma loja da EMEA que utilize o formulário de CEP e endereço e, na base de CEP, o campo de rua contenha um espaço " ".
O campo de endereço não estará disponível para preenchimento.

## Workaround

Não existe