---
title: 'O envio enxuto exibe na UI o shippingEstimate mais alto dos SLAs selecionados'
slug: o-envio-enxuto-exibe-na-ui-o-shippingestimate-mais-alto-dos-slas-selecionados
status: PUBLISHED
createdAt: 2025-11-12T02:22:18.018Z
updatedAt: 2025-11-12T02:22:18.018Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-displays-at-ui-the-higher-shippingestimate-from-the-selected-slas
locale: pt
kiStatus: Backlog
internalReference: 1126188
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em carrinhos que têm pacotes divididos entre entrega e retirada, o Lean Shipping exibe na interface do usuário o `shippingEstimate` da opção de entrega mais barata disponível para pelo menos um dos itens do pacote de retirada, em vez daquele da opção de retirada selecionada. Nos casos conhecidos, o SLA de entrega exibido era o `shippingEstimate` mais alto entre os SLAs selecionados.

Por exemplo: há quatro produtos no carrinho e três deles têm pickup como `selectedSla` e `4h` de `shippingEstimate`. O último item será entregue pela loja, tem `3bd` de `shippingEstimate` e esse SLA é o SLA de entrega mais barato disponível para pelo menos um dos itens do Pickup Package. Na interface do usuário do checkout, o `shippingEstimate` será:

-pickup package: `3bd`
-delivery package: `3bd`

A estimativa de envio para coleta é `3bd`, embora essa não seja a informação correta.
## Simulação


1- Crie um carrinho com produtos do mesmo vendedor e canais de entrega distintos.
2- Insira o código postal
3- Tente selecionar um ponto de coleta
## Workaround


N/A



