---
title: 'Amazon Os SKUs inativos ou fora da política comercial permanecem publicados (Correspondência/novo anúncio) na Amazon após o conector enviá-los.'
slug: amazon-os-skus-inativos-ou-fora-da-politica-comercial-permanecem-publicados-correspondencianovo-anuncio-na-amazon-apos-o-conector-envialos
status: PUBLISHED
createdAt: 2026-07-28T17:05:56.000Z
updatedAt: 2026-07-28T17:05:56.000Z
contentType: knownIssue
productTeam: Marketplace Out
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace Out
slugEN: amazon-inactive-or-outofcommercialpolicy-skus-remain-published-matchnew-listing-on-amazon-after-the-connector-sends-them
locale: pt
kiStatus: Backlog
internalReference: 1440366
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

SKUs que estão inativos no catálogo VTEX, ou que não pertencem mais à política comercial configurada para o canal da Amazon, podem continuar aparecendo como publicados na Amazon, seja vinculados a um produto existente (Correspondência) ou como um novo anúncio criado pelo conector, mesmo depois de deixarem de atender a essas condições. A validação existente impede que um SKU nessa situação seja publicado pela primeira vez, mas não remove da Amazon um SKU que já foi publicado (via Correspondência ou como um novo anúncio) antes de se tornar inativo ou sair da política comercial.

## Simulação

- Publique um SKU na Amazon enquanto ele estiver ativo e dentro da política comercial configurada para o canal, seja por meio de uma Correspondência com um produto existente ou como um novo anúncio.

- Desative esse SKU no catálogo VTEX ou altere sua política comercial para que ele não pertença mais ao canal de vendas configurado para a integração com a Amazon.

- Verifique a tela de Correspondência ou o anúncio desse SKU na conta do vendedor na Amazon.
O SKU continua aparecendo como publicado, tanto no cenário de Correspondência quanto no de novo anúncio, mesmo que não devesse mais estar disponível.

## Workaround

Não há como remover automaticamente o SKU da Amazon por meio do conector nesta situação, em nenhum dos cenários (Correspondência ou novo anúncio). Como uma mitigação parcial, o estoque do SKU tende a ser atualizado para zero durante as atualizações de disponibilidade (impedindo novas vendas).