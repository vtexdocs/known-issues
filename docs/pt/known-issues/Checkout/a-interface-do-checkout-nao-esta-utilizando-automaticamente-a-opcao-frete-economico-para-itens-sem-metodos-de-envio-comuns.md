---
title: 'A interface do checkout não está utilizando automaticamente a opção "frete econômico" para itens sem métodos de envio comuns'
slug: a-interface-do-checkout-nao-esta-utilizando-automaticamente-a-opcao-frete-economico-para-itens-sem-metodos-de-envio-comuns
status: PUBLISHED
createdAt: 2021-02-01T16:11:48.000Z
updatedAt: 2024-04-02T15:27:09.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-is-not-automatically-using-lean-shipping-for-items-with-no-common-shipping-methods
locale: pt
kiStatus: Backlog
internalReference: 329846
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

As configurações da interface de checkout permitem desativar o envio otimizado (otimizações do modo de entrega), mas isso só é possível se todos os itens do carrinho tiverem as mesmas formas de entrega em comum. Caso contrário, o envio otimizado deve aparecer obrigatoriamente no carrinho, mesmo com a opção desativada.
No entanto, em alguns casos, o comportamento descrito acima não ocorre, e todas as formas de entrega disponíveis são apresentadas individualmente ao comprador.

Como resultado, como não há como selecionar um método de entrega diferente para cada item, nenhuma entrega exibida corresponde a uma única opção de entrega para todo o carrinho, sendo apresentadas opções e pacotes sem sentido.

## Simulação

- Desative as **Opções de Envio Otimizadas****;**
- Monte um carrinho em que nem todos os itens tenham o mesmo método de entrega;
- Também é necessário que a loja tenha "allowMultipleDeliveries" ativado;
- O cenário relatado mostrará as opções abertamente em vez do envio enxuto.

## Workaround

N/A