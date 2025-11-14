---
title: 'O espaço na propriedade da rua no código postal JSON afeta a exibição do campo de endereço no checkout'
slug: o-espaco-na-propriedade-da-rua-no-codigo-postal-json-afeta-a-exibicao-do-campo-de-endereco-no-checkout
status: PUBLISHED
createdAt: 2025-11-14T19:23:41.700Z
updatedAt: 2025-11-14T19:23:41.700Z
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


Ao ativar o uso da API de código postal no formulário de endereço para países que não estão no modelo BR (país, estado, cidade, bairro, rua), esses países que não têm todos esses campos preenchidos na API e precisam ser capazes de inserir os outros dados de endereço no formulário de endereço no checkout, o campo rua do bloco de endereço não estará disponível se a propriedade rua do JSON estiver com espaço, pois será entendido como preenchido e válido, o que não permite prosseguir com o pedido.

## Simulação


Crie um carrinho em uma loja EMEA que use o código postal e o formulário de endereço e, na base do código postal, o campo street esteja com espaço " " .
O campo de endereço não estará disponível para ser preenchido
## Workaround


Não existe



