---
title: 'O checkout não exibe a promoção de frete imediatamente em determinadas condições'
slug: o-checkout-nao-exibe-a-promocao-de-frete-imediatamente-em-determinadas-condicoes
status: PUBLISHED
createdAt: 2020-08-20T16:42:07.000Z
updatedAt: 2024-01-15T14:35:22.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-display-shipping-promotion-at-first-instant-for-specific-condition
locale: pt
kiStatus: No Fix
internalReference: 280144
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

O checkout (backend) tem a função de pré-selecionar a melhor forma de entrega para o usuário assim que o CEP é informado.

As promoções que utilizam a restrição “Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente” são, na verdade, aplicadas somente após o cliente escolher o método de entrega específico.

Acontece que, se a opção de entrega selecionada automaticamente pelo checkout se enquadrar em qualquer promoção com a restrição acima, o desconto não será aplicado (a opção mencionada é aquela que diz “Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente”).

Isso ocorre apenas no primeiro momento, pois o checkout não recalcula as promoções ao fazer essa escolha automática de entrega. Isso ocorre porque, se as promoções forem recalculadas, eventualmente a melhor opção de entrega pode ser diferente, e isso deixaria o sistema em um loop, sempre procurando a melhor opção. Em uma futura atualização do orderForm, todo o seu contexto é recalculado, desta vez com o formulário de entrega efetivamente selecionado, e então a promoção será aplicada.

Além disso, a

## Simulação

de frete do carrinho (shipping-preview) faz solicitações adicionais à API, não apenas usando o contexto do orderForm. Isso faz com que ele receba a promoção, enquanto os totais do carrinho estão restritos ao contexto do orderForm, que ainda não possui a promoção, resultando em valores divergentes.


## **Simulação**
- tenha uma promoção de frete grátis restrita à opção "A" e com a opção adicional acima ativada
- tenha um carrinho e um CEP com dois ou mais tipos de frete, sendo que "A" é o frete mais barato (exemplo: A = R$ 10; B = R$ 20)
- insira o CEP e observe que "A" (o mais barato) será selecionado automaticamente, mas continuará aparecendo como R$ 10
- selecione o frete “B” (R$ 20) e volte para o frete “A” (R$ 10)
- nesse momento, o valor de “A” será recalculado e exibido como gratuito

## Workaround

Não é recomendável usar essa restrição em promoções de frete.


%0A