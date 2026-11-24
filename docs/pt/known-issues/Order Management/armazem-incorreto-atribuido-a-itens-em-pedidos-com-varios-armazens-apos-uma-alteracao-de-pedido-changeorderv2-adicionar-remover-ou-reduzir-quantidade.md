---
title: 'Armazém incorreto atribuído a itens em pedidos com vários armazéns após uma alteração de pedido (ChangeOrderV2) (adicionar, remover ou reduzir quantidade).'
slug: armazem-incorreto-atribuido-a-itens-em-pedidos-com-varios-armazens-apos-uma-alteracao-de-pedido-changeorderv2-adicionar-remover-ou-reduzir-quantidade
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-11-25T00:19:25.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: wrong-warehouse-assigned-to-items-in-multiwarehouse-orders-after-a-changeorderv2-add-remove-or-reduce-quantity
locale: pt
kiStatus: Backlog
internalReference: 1433311
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um pedido com itens atendidos por diferentes armazéns é modificado através do fluxo de alteração pós-compra, um item pode acabar salvo no armazém errado. Isso pode acontecer quando um item é adicionado, e também quando outros itens são removidos ou têm sua quantidade reduzida: um item restante pode ser reatribuído ao armazém (e à taxa de frete) de outro item no pedido. O registro do pedido e o painel de administração mostram, então, um armazém diferente da reserva de estoque, que mantém o armazém original. Essa alteração não se origina da emissão de faturas ou do ERP.

## Simulação

1. Pedido no marketplace com dois itens atendidos por diferentes armazéns que compartilham o mesmo cais de entrega e a mesma opção de frete.

2. Reduza a quantidade de um item ou remova um item através do fluxo de alteração.

3. Compare o armazém do item no pedido antes e depois da alteração, e a reserva de estoque. A reserva não é atualizada.

## Workaround

Não há solução alternativa validada para remoções ou reduções de quantidade. A reserva de estoque mantém o armazém original, portanto o inventário não é afetado; a divergência ocorre no registro do pedido. Se o armazém exato for crucial, evite remover itens de pedidos com múltiplos armazéns por meio do fluxo de alteração (não validado).