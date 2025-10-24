---
title: 'Informações incompatíveis na interface de usuário do checkout levam à visualização incorreta de pacotes'
slug: informacoes-incompativeis-na-interface-de-usuario-do-checkout-levam-a-visualizacao-incorreta-de-pacotes
status: PUBLISHED
createdAt: 2025-10-16T20:33:10.677Z
updatedAt: 2025-10-16T20:33:10.677Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: mismatched-information-in-checkouts-ui-leads-to-incorrect-packages-visualization
locale: pt
kiStatus: Backlog
internalReference: 1170509
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O componente de omnishipping da interface do usuário do Checkout espera a mesma ordenação para o objeto orderForm `items` e o objeto orderForm `shippingData.logisticsInfo`.

Quando essa ordenação não corresponde aos dois objetos, as informações do pacote do pedido podem apresentar itens e pacotes incompatíveis.
## Simulação


Não há um processo passo a passo direto para replicar esse cenário, mas ele pode ser verificado no orderForm via API.


## Workaround


N/A



