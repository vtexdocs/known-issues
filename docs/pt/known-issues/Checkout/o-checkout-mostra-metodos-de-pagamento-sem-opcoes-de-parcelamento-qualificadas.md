---
title: 'O checkout mostra métodos de pagamento sem opções de parcelamento qualificadas'
slug: o-checkout-mostra-metodos-de-pagamento-sem-opcoes-de-parcelamento-qualificadas
status: PUBLISHED
createdAt: 2025-10-08T23:17:34.427Z
updatedAt: 2025-10-08T23:17:34.427Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-shows-payment-methods-without-eligible-installment-options
locale: pt
kiStatus: Backlog
internalReference: 1305022
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O checkout pode exibir um método de pagamento mesmo quando nenhuma regra de pagamento e nenhuma opção de parcelamento estiverem disponíveis para ele no contexto atual do carrinho (ou seja, as condições comerciais das SKUs não correspondem a nenhuma das regras). Isso leva a um fluxo de bloqueio e a uma mensagem de erro "Selecione o número desejado de parcelas" quando se tenta fazer o pedido.

Isso acontece porque, no pipeline de checkout, a solicitação para a lista de sistemas de pagamento ativos não leva em conta o contexto completo do carrinho (como as condições comerciais do item), enquanto as regras selecionadas e suas respectivas opções de parcelamento são retornadas por uma segunda solicitação, que é feita posteriormente e leva em conta o contexto do carrinho (incluindo as condições comerciais do item).

Depois disso, a lista de sistemas de pagamento ativos não é filtrada pelas opções de parcelamento reais retornadas para o carrinho, o que pode causar a incompatibilidade entre os sistemas de pagamento disponíveis e as parcelas disponíveis.
## Simulação



- Pré-requisitos:
  - Configure um método de pagamento que só tenha regras de pagamento restritas pela porcentagem de SKUs de uma determinada condição comercial no carrinho (por exemplo, aplicar somente quando a porcentagem de SKU > 70%).

- Etapas:
  - Crie um carrinho que não atenda à condição de porcentagem de SKU para nenhuma das regras disponíveis para o método configurado
  - Prossiga para o pagamento. Você verá que, mesmo que as condições não sejam atendidas, o método de pagamento estará disponível.
  - Selecione o método de pagamento
  - Comportamento observado: O checkout lista o método, mas nenhuma opção de parcelamento é apresentada; o modal permanece preso solicitando "Selecione o número desejado de parcelas." se você tentar fazer o pedido
## Workaround



- Os compradores devem escolher outro método de pagamento qualificado e seguir o fluxo de compra.
- Os comerciantes podem implementar uma personalização de front-end para ocultar ou desativar os métodos de pagamento que não têm installmentOptions para o contexto atual do carrinho.



%0A