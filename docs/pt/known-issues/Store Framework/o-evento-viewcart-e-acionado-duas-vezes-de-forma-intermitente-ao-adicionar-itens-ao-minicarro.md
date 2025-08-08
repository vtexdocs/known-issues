---
title: O evento view_cart é acionado duas vezes de forma intermitente ao adicionar itens ao minicarro
slug: o-evento-viewcart-e-acionado-duas-vezes-de-forma-intermitente-ao-adicionar-itens-ao-minicarro
status: PUBLISHED
createdAt: 2025-08-08T15:29:39.326Z
updatedAt: 2025-08-08T15:29:39.326Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: viewcart-event-is-intermittently-triggered-twice-when-adding-items-to-the-minicart
locale: pt
kiStatus: Backlog
internalReference: 1265581
---

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

## Sumário


Ao adicionar itens ao carrinho, o evento analítico `view_cart` é acionado duas vezes de forma intermitente. Esse comportamento inesperado leva a entradas de eventos duplicadas, o que pode causar imprecisões na análise de dados e nos relatórios.
## Simulação


1. Adicione um produto ao minicarro;
2. Verifique seu dataLayer, às vezes você verá dois eventos de `view_cart` após o `add_to_cart
## Workaround


N/A



