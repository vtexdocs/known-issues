---
title: Mercado Livre Em alguns casos, um pedido cancelado no marketplace não atualiza o estoque no catálogo
slug: mercado-livre-em-alguns-casos-um-pedido-cancelado-no-marketplace-nao-atualiza-o-estoque-no-catalogo
status: PUBLISHED
createdAt: 2025-10-16T20:27:05.187Z
updatedAt: 2025-10-16T20:27:05.187Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-in-some-cases-a-canceled-order-on-the-marketplace-doesnt-update-stock-in-the-catalog
locale: pt
kiStatus: Backlog
internalReference: 1146543
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Em alguns casos, um pedido cancelado no marketplace não atualiza o estoque no catálogo. Esse cenário afeta as contas que trabalham com poucas unidades em estoque (1 / 2 unidades)

## Simulação



Cenário
Anúncio com uma unidade em estoque
Quando um pedido é concluído com a última unidade em estoque > o Mercado Livre redefine o estoque do anúncio e pausa

Em algumas situações
Pedido criado no Mercado Livre > Mercado Livre zera o estoque e pausa o anúncio
Minutos depois, esse pedido foi cancelado no Mercado Livre
Pedido cancelado > Mercado Livre devolve o estoque e ativa o anúncio no Mercado Livre
Mas o estoque não retorna ao inventário do Catálogo VTEX
## Workaround


Anúncio para ter mais de 2 unidades em estoque



