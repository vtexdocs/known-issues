---
title: 'Armazém incorreto atribuído ao item adicionado via ChangeOrderV2 (FFM/SOS ShippingEnricher ignora os DeliveryIds da Logística)'
slug: armazem-incorreto-atribuido-ao-item-adicionado-via-changeorderv2-ffmsos-shippingenricher-ignora-os-deliveryids-da-logistica
status: PUBLISHED
createdAt: 2026-07-10T23:45:23.000Z
updatedAt: 2026-07-10T23:45:23.000Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: wrong-warehouse-assigned-to-item-added-via-changeorderv2-ffmsos-shippingenricher-ignores-logistics-deliveryids
locale: pt
kiStatus: Backlog
internalReference: 1433311
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Quando um novo item é adicionado a um pedido existente por meio do fluxo de alteração pós-compra, o sistema pode salvar o item com a atribuição de armazém incorreta. O sintoma visível é que o item é alocado a um armazém que não corresponde à resposta logística esperada para esse produto. Isso afeta cenários com atendimento em vários armazéns, especialmente quando o item adicionado deve ser roteado de forma diferente dos itens já presentes no pedido.

## Simulação

Não há uma maneira fácil de reproduzir o cenário.

## Workaround

1. Evite usar o fluxo de alteração pós-compra para adicionar itens que dependem de um roteamento de armazém diferente dos itens já presentes no pedido.

2. Se o item precisar ser vendido separadamente, crie um novo pedido em vez de adicioná-lo ao existente.