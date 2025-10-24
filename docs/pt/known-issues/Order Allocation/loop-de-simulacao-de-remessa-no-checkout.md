---
title: 'Loop de simulação de remessa no checkout'
slug: loop-de-simulacao-de-remessa-no-checkout
status: PUBLISHED
createdAt: 2025-10-16T20:44:53.787Z
updatedAt: 2025-10-16T20:44:53.787Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: shipping-simulation-loop-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 1204287
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


O problema ocorre quando um carrinho de compras, em uma conta configurada para não permitir a divisão de carga, passa pelo fluxo de envio e, inicialmente, apenas alguns dos itens desse carrinho compartilham o mesmo SLA, deixando outros sem uma opção de entrega.

No entanto, durante a etapa de pagamentos, o sistema divide a compra em vários orderForms com base nos IDs de SLA, o que aciona uma nova simulação de frete. Esse recálculo pode tornar disponíveis opções de entrega para itens anteriormente indisponíveis, alterando o preço do carrinho e acionando outra simulação.

O resultado é um loop contínuo, em que o sistema alterna entre estados de entrega possíveis e impossíveis devido a restrições de SLA e divisão de pedidos.
## Simulação


** **
Configuração de uma conta para não permitir divisões de carga (em logística).

Criar um carrinho com itens que tenham SLAs diferentes, resultando na ausência de uma opção de envio para alguns deles.

Prossiga para a etapa de pagamento e veja que o pedido está dividido em vários orderForms.

Verifique se, com essa divisão, novos SLAs são retornados para os itens anteriormente não entregues.

Observe que essa alteração afeta o preço do carrinho, acionando novas simulações e podendo levar o checkout a um loop infinito
## Workaround


** **
Se possível, habilite a permissão de divisão de carga (no sistema de logística)



