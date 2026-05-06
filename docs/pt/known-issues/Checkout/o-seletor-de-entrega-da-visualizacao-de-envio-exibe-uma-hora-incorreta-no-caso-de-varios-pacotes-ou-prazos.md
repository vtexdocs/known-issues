---
title: 'O seletor de entrega da visualização de envio exibe uma hora incorreta no caso de vários pacotes ou prazos'
slug: o-seletor-de-entrega-da-visualizacao-de-envio-exibe-uma-hora-incorreta-no-caso-de-varios-pacotes-ou-prazos
status: PUBLISHED
createdAt: 2020-07-13T22:56:56.000Z
updatedAt: 2023-03-23T15:50:05.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-delivery-selector-showing-wrong-time-in-case-of-multiple-packagesdeadlines
locale: pt
kiStatus: Backlog
internalReference: 264441
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Se o carrinho contiver vários pacotes com prazos de entrega diferentes, o seletor de entrega da Visualização de Envio exibe apenas um dos prazos, fornecendo informações incorretas.
O comportamento esperado nesse cenário é que o seletor exiba a mensagem **Prazos variados** e, abaixo do seletor, haja uma mensagem informando o prazo de entrega de cada pacote em dias úteis.

## Simulação

- Adicione 2 itens com SLAs diferentes;
- Verifique se a data está incorreta no seletor da Visualização de envio.

## Workaround

N/A