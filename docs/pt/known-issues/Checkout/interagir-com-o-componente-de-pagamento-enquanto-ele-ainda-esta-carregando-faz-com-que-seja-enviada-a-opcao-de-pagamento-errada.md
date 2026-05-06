---
title: 'Interagir com o componente de pagamento enquanto ele ainda está carregando faz com que seja enviada a opção de pagamento errada'
slug: interagir-com-o-componente-de-pagamento-enquanto-ele-ainda-esta-carregando-faz-com-que-seja-enviada-a-opcao-de-pagamento-errada
status: PUBLISHED
createdAt: 2023-12-12T22:07:44.000Z
updatedAt: 2023-12-12T22:07:44.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: interacting-with-the-payment-component-while-is-still-in-a-loading-state-sends-the-wrong-payment-option
locale: pt
kiStatus: Backlog
internalReference: 952086
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando o comprador altera a forma de pagamento enquanto o componente de pagamento ainda está carregando na página, se a forma de pagamento tiver opções, os dados de pagamento enviados ao orderForm ficam incorretos. Quando isso ocorre, o pedido não é criado e é exibida uma mensagem solicitando a revisão das informações de pagamento.

## Simulação

- Adicione itens ao carrinho e avance até a seção de dados de pagamento;
- Clique em uma forma de pagamento diferente enquanto a página está carregando e selecione outra opção dentro do componente;
- O pagamento enviado para o orderForm está incorreto, sendo a primeira opção.

## Workaround

N/A