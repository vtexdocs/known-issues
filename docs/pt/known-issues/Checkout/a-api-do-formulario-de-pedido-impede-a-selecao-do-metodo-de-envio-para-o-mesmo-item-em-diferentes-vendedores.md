---
title: 'A API do Formulário de Pedido impede a seleção do método de envio para o mesmo item em diferentes vendedores'
slug: a-api-do-formulario-de-pedido-impede-a-selecao-do-metodo-de-envio-para-o-mesmo-item-em-diferentes-vendedores
status: PUBLISHED
createdAt: 2023-01-27T21:55:48.000Z
updatedAt: 2023-07-05T14:33:38.000Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-api-preventing-the-shipping-method-selection-for-the-same-item-under-different-sellers
locale: pt
kiStatus: Fixed
internalReference: 742139
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Embora um formulário de pedido permita que o mesmo SKU seja adicionado várias vezes por diferentes vendedores, ele não permite que o método de envio (SLA) seja selecionado individualmente — já que a logística de um vendedor é totalmente independente da dos demais.

Apesar disso, após informar o endereço ou escolher um método de envio disponível apenas para uma ocorrência específica do SKU, as outras ocorrências ficarão sob um SLA diferente sem que isso seja um problema. Portanto, a questão se restringe à solicitação de seleção do SLA entre itens neste cenário ou por meio da

## Simulação

do orderForm.


## **Simulação**
Em um carrinho com o mesmo item adicionado mais de uma vez, mas por meio de vendedores diferentes, tente selecionar seus métodos de envio (SLAs) via API usando opções diferentes para cada um. O mesmo cenário também pode ser testado por meio da API de simulação, declarando um “selectedSlaId”. A API recusará a ação, apresentando a mensagem “O mesmo item não pode ter mais de um SLA selecionado”.

## Workaround

N/A