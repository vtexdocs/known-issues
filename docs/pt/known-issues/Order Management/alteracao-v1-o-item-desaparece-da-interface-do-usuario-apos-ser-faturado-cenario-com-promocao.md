---
title: 'Alteração v1: O item desaparece da interface do usuário após ser faturado, cenário com promoção.'
slug: alteracao-v1-o-item-desaparece-da-interface-do-usuario-apos-ser-faturado-cenario-com-promocao
status: PUBLISHED
createdAt: 2024-08-13T16:10:56.000Z
updatedAt: 2026-10-29T22:29:15.000Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: change-v1-item-disappears-from-ui-after-being-invoiced-scenario-with-promotion
locale: pt
kiStatus: Fixed
internalReference: 1080187
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário

Identificamos um cenário na Alteração V1 em que, após aplicar uma promoção do tipo "compre 2 e ganhe desconto na segunda unidade", quando faturamos um dos itens e o segundo é removido pela Alteração V1, as informações sobre o produto faturado desaparecem da interface de pedidos, restando apenas as informações sobre o item removido na Alteração V1.

Como a Alteração V1 não utiliza o itemIndex, a validação é feita pelo ID, o que gera esse comportamento.

Nesse caso, também não teremos as informações sobre o item faturado na API.

## Simulação

Para simular esse cenário, você precisa criar uma promoção do tipo "compre 2 e ganhe desconto na segunda unidade", faturar apenas um dos itens do pedido e remover o outro pela Alteração V1.

O comportamento descrito nesta KI será identificado, ou seja, o produto faturado não aparecerá na interface de pedidos.

## Workaround

Estamos atualmente desenvolvendo a Alteração V2. Caso esse cenário não ocorra, sugerimos migrar para a Alteração V2.